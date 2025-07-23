-- Seed the exams table with the initial CKA and CKAD certifications.

INSERT INTO public.exams (name, slug, description, passing_score)
VALUES
  (
    'Certified Kubernetes Administrator (CKA)',
    'cka',
    'The CKA certification is for Kubernetes administrators, cloud administrators, and other IT professionals who manage Kubernetes instances.',
    75
  ),
  (
    'Certified Kubernetes Application Developer (CKAD)',
    'ckad',
    'The CKAD certification is for Kubernetes engineers, cloud engineers, and other IT professionals responsible for building, deploying, and configuring cloud-native applications with Kubernetes.',
    75
  );
