-- This script populates the questions and answers tables from the JSON data.
-- Note: UUIDs are generated for each question and answer.

-- CKA: Cluster Architecture, Installation & Configuration
DO $$
DECLARE
  question_id_1 UUID := gen_random_uuid();
  question_id_2 UUID := gen_random_uuid();
BEGIN
  -- Question 1
  INSERT INTO public.questions (id, question_text)
  VALUES (question_id_1, 'How do you perform a rolling update of a Deployment?');

  INSERT INTO public.answers (question_id, answer_text, is_correct)
  VALUES
    (question_id_1, 'By manually deleting old pods and creating new ones.', FALSE),
    (question_id_1, 'By updating the image in the Deployment''s Pod template.', TRUE),
    (question_id_1, 'By running `kubectl rollout update`.', FALSE),
    (question_id_1, 'By creating a new Deployment with the updated image.', FALSE);

  -- Question 2
  INSERT INTO public.questions (id, question_text)
  VALUES (question_id_2, 'What is the purpose of a Role in RBAC?');

  INSERT INTO public.answers (question_id, answer_text, is_correct)
  VALUES
    (question_id_2, 'To define permissions for a user across the entire cluster.', FALSE),
    (question_id_2, 'To define permissions for a group of users within a namespace.', FALSE),
    (question_id_2, 'To define a set of permissions within a specific namespace.', TRUE),
    (question_id_2, 'To bind a user to a specific set of permissions.', FALSE);
END $$;

-- CKA: Workloads & Scheduling
DO $$
DECLARE
  question_id_1 UUID := gen_random_uuid();
  question_id_2 UUID := gen_random_uuid();
BEGIN
  -- Question 1
  INSERT INTO public.questions (id, question_text)
  VALUES (question_id_1, 'What is the difference between a ReplicaSet and a Deployment?');

  INSERT INTO public.answers (question_id, answer_text, is_correct)
  VALUES
    (question_id_1, 'A Deployment manages ReplicaSets and provides declarative updates.', TRUE),
    (question_id_1, 'A ReplicaSet is used for stateful applications, while a Deployment is for stateless applications.', FALSE),
    (question_id_1, 'There is no difference; they are interchangeable.', FALSE),
    (question_id_1, 'A ReplicaSet can be scaled, but a Deployment cannot.', FALSE);

  -- Question 2
  INSERT INTO public.questions (id, question_text)
  VALUES (question_id_2, 'How can you provide sensitive information to a Pod?');

  INSERT INTO public.answers (question_id, answer_text, is_correct)
  VALUES
    (question_id_2, 'Using a ConfigMap.', FALSE),
    (question_id_2, 'Using a Secret.', TRUE),
    (question_id_2, 'By hardcoding it in the Pod definition.', FALSE),
    (question_id_2, 'Using an annotation.', FALSE);
END $$;

-- CKAD: Application Design and Build
DO $$
DECLARE
  question_id_1 UUID := gen_random_uuid();
  question_id_2 UUID := gen_random_uuid();
BEGIN
  -- Question 1
  INSERT INTO public.questions (id, question_text)
  VALUES (question_id_1, 'What is a common use case for a multi-container Pod?');

  INSERT INTO public.answers (question_id, answer_text, is_correct)
  VALUES
    (question_id_1, 'To run multiple instances of the same application for high availability.', FALSE),
    (question_id_1, 'To run a main application container and a sidecar container for logging or monitoring.', TRUE),
    (question_id_1, 'To isolate different applications from each other.', FALSE),
    (question_id_1, 'To run applications that require different operating systems.', FALSE);

  -- Question 2
  INSERT INTO public.questions (id, question_text)
  VALUES (question_id_2, 'How do you define a Job in Kubernetes?');

  INSERT INTO public.answers (question_id, answer_text, is_correct)
  VALUES
    (question_id_2, 'As a long-running service.', FALSE),
    (question_id_2, 'As a Pod that runs to completion.', TRUE),
    (question_id_2, 'As a way to expose a Pod to the network.', FALSE),
    (question_id_2, 'As a configuration object for a Pod.', FALSE);
END $$;
