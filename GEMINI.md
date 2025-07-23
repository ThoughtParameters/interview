# Gemini Project: Professional Learning and Certification Website

This document outlines the plan for building a professional learning and exam/certification website for Thought Parameters LLC.

## 1. Project Overview

The project is a web platform for users to access learning materials, take certification exams, read blog posts, and verify certifications. The frontend will be a Gatsby site, the backend will be a FastAPI application running on Google App Engine, and Supabase will be used for the database and authentication.

- **Company:** Thought Parameters LLC
- **Website URL:** `interview.thoughtparameters.com`
- **API URL:** `interviewapi.thoughtparameters.com`

## 2. Technology Stack

- **Frontend:** Gatsby (React), Tailwind CSS
- **Backend:** FastAPI (Python)
- **Database & Auth:** Supabase
- **Hosting (Frontend):** GitHub Pages
- **Hosting (Backend):** Google App Engine
- **Analytics:** Google Analytics

## 3. Project Structure
(No changes from previous version, but new pages will be added under `/pages/exams/`)

## 4. Database & Content Strategy

-   **Database Schema:** The schema will be extended to support multiple, distinct exams.
    -   A new **`exams`** table will serve as the central directory for all certifications (e.g., CKA, Docker). It will store the exam's name, slug, description, and passing score.
    -   The **`questions`** table will have a direct foreign key relationship to the `exams` table, explicitly linking each question to a specific exam.
-   **Database Management:** The Supabase CLI will be used to manage database migrations.
-   **Content Generation:** Learning content and exam questions will be generated via deep research for each specific exam subject.

## 5. Authentication & Backend Strategy
(No changes from previous version)

## 6. SEO & Analytics
(No changes from previous version)

## 7. FastAPI Backend (Google App Engine)
(No changes from previous version)

## 8. Development Roadmap

This roadmap is updated for the multi-exam architecture.

### Phase 1: Core Infrastructure & Authentication
(No changes from previous version)

### Phase 2: Multi-Exam Architecture & Content

*Goal: Build a scalable foundation for multiple exams and deliver the core content.*

1.  **Update Database Schema:** Create a new migration to add the `exams` table and update the `questions` table with the new `exam_id` foreign key.
2.  **Seed Exams Data:** Add CKA and CKAD as the initial entries in the new `exams` table.
3.  **Generate Learning Content:** Begin the automated deep research and generation for CKA/CKAD learning materials.
4.  **Generate Exam Questions:** Create the comprehensive bank of 150+ weighted exam questions, ensuring each is linked to the correct exam in the database.
5.  **Create Question Seeding Migration:** Create a new Supabase migration to seed the database with the generated exam questions.
6.  **Build Exam Directory:**
    -   Create a new exam directory page at `/exams` that fetches and displays all available exams from the database.
    -   Create a dynamic exam detail page at `/exams/{exam_slug}` to display specific information for each exam.
7.  **Update Navigation:** Change the main "Exam" link in the header to point to the new `/exams` directory.

### Phase 3: Exam Delivery & User Experience

*Goal: Build the full, interactive exam-taking and results workflow.*

1.  **Build Exam Backend:**
    -   Update the `/questions/{exam_slug}` endpoint in FastAPI to fetch questions for the specified exam.
    -   Create the authenticated `/submit-exam` endpoint to handle grading and result storage.
2.  **Build Exam Interface:** Develop the interactive exam UI in a new, dynamic `/exam/{exam_slug}` page.
3.  **Connect Exam Flow:** Integrate the frontend and backend to create a seamless exam experience, from starting the exam on the detail page to viewing the results.
4.  **Enhance Profile Page:** Update the `/profile` page to display a history of the user's past exam attempts.

### Phase 4: Polish & Advanced Features
(Renumbered from Phase 3)

### Phase 5: Final Deployment & Maintenance
(Renumbered from Phase 4)

