# Gemini Decisions

This file documents the automatic decisions made by the Gemini CLI during the project generation.

## 1. CSS Framework

- **Decision:** Switched from Emotion.js to **Tailwind CSS**.
- **Reasoning:** The user requested a switch to Tailwind CSS. This is a popular and powerful utility-first CSS framework that will allow for rapid UI development.
- **Refinement:** The initial setup will include a basic Tailwind configuration. This can be refined later with a more detailed theme, custom plugins, or different base styles.

## 2. Content Generation (CKA/CKAD)

- **Decision:** The learning content and exam questions will be structured based on the official CKA and CKAD exam curricula found from the Linux Foundation.
- **Reasoning:** This ensures the content is relevant, accurate, and valuable for users preparing for these certifications.
- **Refinement:** I will start by generating placeholder content for the main domains of each exam. This content can be automatically expanded and refined in subsequent steps to cover each sub-point of the curriculum in more detail. The initial question bank will also be based on these domains.

## 3. External Libraries

- **Decision:** I will use public CDNs for libraries where it is simple and does not conflict with the Gatsby build process. For Tailwind CSS, it's better to integrate it into the build process, so I will not use a CDN for it. For other libraries that might be added later (e.g., for charts or graphs), I will prefer a CDN.
- **Reasoning:** Using CDNs can improve performance and reduce local bundle size. However, for core frameworks like Tailwind, local integration provides a better development experience and more control.

## 4. Certification Data

- **Decision:** The `user_exams` table will be updated to include `exam_type` ('CKA' or 'CKAD'), `exam_version` (e.g., 'v1.28'), and `expires_at` (timestamp).
- **Reasoning:** This provides a more robust record of a user's certification, allowing the system to track which exam they passed, which version of the exam it was, and when it expires.
- **Refinement:** The specific versioning and expiration logic can be refined later based on the official policies of the certifications.
