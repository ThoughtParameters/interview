import json
import os
import uuid
import datetime
import psycopg2
import jwt
from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
from typing import List
from google.cloud import secretmanager

app = FastAPI()

# Google Cloud project ID
PROJECT_ID = "thoughtman"

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def get_secret(secret_id, version_id="latest"):
    client = secretmanager.SecretManagerServiceClient()
    name = f"projects/{PROJECT_ID}/secrets/{secret_id}/versions/{version_id}"
    response = client.access_secret_version(request={"name": name})
    return response.payload.data.decode("UTF-8")

def get_db_connection():
    try:
        host = get_secret("supabase-postgres-host")
        project_ref = host.split('.')[1]
        user = f"{get_secret('supabase-postgres-user')}.{project_ref}"
        password = get_secret("supabase-postgres-password")
        port = get_secret("supabase-postgres-port")
        dbname = get_secret("supabase-postgres-db")
        conn = psycopg2.connect(dbname=dbname, user=user, password=password, host=host, port=port)
        return conn
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database connection error: {e}")

def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        jwt_secret = get_secret("supabase-jwt-secret")
        payload = jwt.decode(token, jwt_secret, algorithms=["HS256"])
        return payload
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")

class Answer(BaseModel):
    question_id: uuid.UUID
    answer_id: uuid.UUID

class ExamSubmission(BaseModel):
    exam_id: uuid.UUID
    answers: List[Answer]
    duration_seconds: int

class VerificationResult(BaseModel):
    full_name: str
    exam_type: str
    completed_at: datetime.datetime
    passed: bool

@app.get("/questions/{exam_slug}")
def get_questions(exam_slug: str, limit: int = 50):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(
        """
        SELECT q.id, q.question_text, a.id, a.answer_text
        FROM questions q
        JOIN answers a ON q.id = a.question_id
        JOIN exams e ON q.exam_id = e.id
        WHERE e.slug = %s
        ORDER BY random()
        LIMIT %s;
        """,
        (exam_slug, limit),
    )
    rows = cur.fetchall()
    cur.close()
    conn.close()

    questions = {}
    for row in rows:
        q_id, q_text, a_id, a_text = row
        if q_id not in questions:
            questions[q_id] = {"id": q_id, "question_text": q_text, "answers": []}
        questions[q_id]["answers"].append({"id": a_id, "answer_text": a_text})
    return list(questions.values())

@app.post("/submit-exam")
def submit_exam(submission: ExamSubmission, user: dict = Depends(get_current_user)):
    conn = get_db_connection()
    cur = conn.cursor()

    question_ids = [str(a.question_id) for a in submission.answers]
    cur.execute(
        "SELECT question_id, id FROM answers WHERE question_id = ANY(%s) AND is_correct = TRUE",
        (question_ids,),
    )
    correct_answers = dict(cur.fetchall())

    score = sum(1 for answer in submission.answers if correct_answers.get(answer.question_id) == answer.answer_id)
    
    cur.execute("SELECT passing_score, name FROM exams WHERE id = %s", (submission.exam_id,))
    exam_details = cur.fetchone()
    passing_score, exam_name = (exam_details[0], exam_details[1]) if exam_details else (75, "")

    percentage_score = int((score / len(question_ids)) * 100) if question_ids else 0
    passed = percentage_score >= passing_score
    verification_id = uuid.uuid4() if passed else None

    cur.execute(
        """
        INSERT INTO user_exams (user_id, exam_type, score, passed, verification_id, duration_seconds)
        VALUES (%s, %s, %s, %s, %s, %s)
        """,
        (user["sub"], exam_name, percentage_score, passed, verification_id, submission.duration_seconds),
    )
    conn.commit()
    cur.close()
    conn.close()

    return {"score": percentage_score, "passed": passed, "verification_id": verification_id}

@app.get("/verify/{verification_id}", response_model=VerificationResult)
def get_verification(verification_id: uuid.UUID):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(
        """
        SELECT p.full_name, ue.exam_type, ue.completed_at, ue.passed
        FROM user_exams ue
        JOIN profiles p ON ue.user_id = p.id
        WHERE ue.verification_id = %s
        """,
        (str(verification_id),),
    )
    result = cur.fetchone()
    cur.close()
    conn.close()

    if result:
        return VerificationResult(full_name=result[0], exam_type=result[1], completed_at=result[2], passed=result[3])
    raise HTTPException(status_code=404, detail="Verification not found")

@app.get("/")
def read_root():
    return {"Hello": "World"}
