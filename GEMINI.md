# Gemini Project: Professional Learning and Certification Website

This document outlines the plan for building a professional learning and exam/certification website for Thought Parameters LLC.

## 1. Project Overview

The project is a web platform for users to access learning materials, take certification exams, read blog posts, and verify certifications. The frontend will be a Gatsby site, the backend will be a FastAPI application running on Google App Engine, and Supabase will be used for the database and authentication.

- **Company:** Thought Parameters LLC
- **Website URL:** `interview.thoughtparameters.com`
- **API URL:** `interviewapi.thoughtparameters.com` (via custom domain)

## 2. Technology Stack

- **Frontend:** Gatsby (React), Tailwind CSS
- **Backend:** FastAPI (Python), Pytest
- **Database & Auth:** Supabase
- **E2E Testing:** Cypress
- **Hosting (Frontend):** GitHub Pages
- **Hosting (Backend):** Google App Engine
- **Analytics:** Google Analytics

## 3. Project Structure
(No changes from previous version)

## 4. Database & Content Strategy

-   **Database Schema:** The schema will be extended to support multiple, distinct exams and timed results.
    -   An **`exams`** table will serve as the central directory for all certifications.
    -   The **`questions`** table will link to the `exams` table.
    -   The **`user_exams`** table will include a `duration_seconds` column to store the time taken for each exam attempt.
-   **Database Management:** The Supabase CLI will be used for version-controlled migrations.
-   **Content Generation:** Learning content and exam questions will be generated via deep research.

## 5. Versioning & Changelog

-   **Versioning:** The project will follow Semantic Versioning (v0.1.0). The version will be tracked in this document.
-   **Changelog:** All significant changes will be documented in a changelog section in this file, linked to the corresponding git commit.

**Current Version: v0.1.0**

---

## 6. Authentication & Backend Strategy
(No changes from previous version)

## 7. SEO & Analytics
(No changes from previous version)

## 8. FastAPI Backend (Google App Engine)
(No changes from previous version)

## 9. Testing Strategy

-   **Backend (Pytest):** The FastAPI backend will be tested using Pytest. Tests will cover API endpoints, business logic, and database interactions.
-   **Frontend (Cypress):** End-to-end (E2E) tests for the Gatsby frontend will be written using Cypress. These tests will simulate user flows like registration, login, taking an exam, and verifying a certificate.
-   **CI/CD Integration:** Both Pytest and Cypress tests will be integrated into a GitHub Actions workflow to run automatically on each push to the `main` branch, ensuring code quality and preventing regressions.

## 10. Development Roadmap

This roadmap is updated to include timed exams, testing, and custom domain configuration.

### Phase 1: Core Infrastructure & Authentication
(Completed)

### Phase 2: Multi-Exam Architecture & Content
(Completed)

### Phase 3: Timed Exam Implementation

*Goal: Implement the timed exam feature and configure the custom API domain.*

1.  **Update Database Schema:** Create a new migration to add the `duration_seconds` column to the `user_exams` table.
2.  **Configure Custom Domain:**
    -   Add `interviewapi.thoughtparameters.com` as a custom domain for the App Engine project.
    -   Retrieve the required DNS records.
    -   (Pending) Update DNS records on Cloudflare.
3.  **Implement Timed Exam Backend:** Update the `/submit-exam` endpoint to accept and store the exam duration.
4.  **Implement Timed Exam Frontend:**
    -   Add a timer to the exam interface.
    -   Capture the duration and send it to the backend upon submission.

### Phase 4: Testing & Quality Assurance

*Goal: Ensure the application is robust and reliable through comprehensive testing.*

1.  **Setup Pytest:** Initialize Pytest in the `appengine` directory and write initial tests for the core API endpoints.
2.  **Setup Cypress:** Initialize Cypress in the `gatsby` directory and write initial E2E tests for the main user flows (auth, exam directory).
3.  **Create Testing Workflow:** Create a new GitHub Actions workflow to run both Pytest and Cypress tests automatically.

### Phase 5: Polish & Advanced Features
(Renumbered from Phase 3)

### Phase 6: Final Deployment & Maintenance
(Renumbered from Phase 4)

---

## Changelog

### v0.1.0 (Initial Commit)
- Initial project setup and core feature implementation.
- Includes Gatsby frontend, FastAPI backend, Supabase integration, multi-exam architecture, question generation, blog, user authentication, and certificate verification.

