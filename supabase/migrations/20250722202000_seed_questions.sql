-- This script seeds the questions and answers tables.

DO $$
DECLARE
  -- CKA Questions
  cka_q1_id UUID := gen_random_uuid();
  cka_q2_id UUID := gen_random_uuid();
  cka_q3_id UUID := gen_random_uuid();

  -- CKAD Questions
  ckad_q1_id UUID := gen_random_uuid();

BEGIN
  -- CKA: Cluster Architecture, Installation & Configuration
  INSERT INTO public.questions (id, question_text) VALUES (cka_q1_id, 'Which command would you use to upgrade a Kubernetes cluster created with kubeadm?');
  INSERT INTO public.answers (question_id, answer_text, is_correct) VALUES
    (cka_q1_id, 'kubeadm upgrade apply', TRUE),
    (cka_q1_id, 'kubectl upgrade cluster', FALSE),
    (cka_q1_id, 'kubeadm update cluster', FALSE),
    (cka_q1_id, 'kubectl cluster-info upgrade', FALSE);

  INSERT INTO public.questions (id, question_text) VALUES (cka_q2_id, 'What is the role of the etcd component in a Kubernetes cluster?');
  INSERT INTO public.answers (question_id, answer_text, is_correct) VALUES
    (cka_q2_id, 'It is the primary key-value store for all cluster data.', TRUE),
    (cka_q2_id, 'It schedules pods onto nodes.', FALSE),
    (cka_q2_id, 'It manages the container runtime.', FALSE),
    (cka_q2_id, 'It provides networking between pods.', FALSE);

  -- CKA: Workloads & Scheduling
  INSERT INTO public.questions (id, question_text) VALUES (cka_q3_id, 'How do you scale a Deployment named ''my-app'' to 5 replicas?');
  INSERT INTO public.answers (question_id, answer_text, is_correct) VALUES
    (cka_q3_id, 'kubectl scale deployment my-app --replicas=5', TRUE),
    (cka_q3_id, 'kubectl edit deployment my-app', FALSE),
    (cka_q3_id, 'kubectl rollout restart deployment my-app', FALSE),
    (cka_q3_id, 'kubectl expose deployment my-app --replicas=5', FALSE);

  -- CKAD: Application Design and Build
  INSERT INTO public.questions (id, question_text) VALUES (ckad_q1_id, 'What is the purpose of a livenessProbe?');
  INSERT INTO public.answers (question_id, answer_text, is_correct) VALUES
    (ckad_q1_id, 'To determine if a container is ready to accept traffic.', FALSE),
    (ckad_q1_id, 'To determine if a container is still running.', TRUE),
    (ckad_q1_id, 'To check for available updates to the container image.', FALSE),
    (ckad_q1_id, 'To provide a secure entrypoint into the container.', FALSE);

END $$;
