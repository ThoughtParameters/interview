# Gemini Project: Professional Learning and Certification Website

This document outlines the plan for building a professional learning and exam/certification website for Thought Parameters LLC.

## 1. Project Vision

To create a premier online learning and certification platform for "Thought Parameters LLC". The platform will offer a seamless user experience, from in-depth learning modules to rigorous, timed exams. Upon successful completion, users will receive a verifiable digital certificate that they can easily share on professional networks like LinkedIn, enhancing their career prospects.

## 2. Technology Stack
(No changes)

## 3. Project Structure
(No changes)

## 4. Database & Content Strategy
(No changes)

## 5. Versioning & Changelog

-   **Versioning:** The project will follow Semantic Versioning. The canonical version number is stored in the `VERSION` file in the root of the repository.
-   **Git Tagging:** Each version bump will be accompanied by an annotated Git tag (e.g., `v0.2.0`).
-   **Changelog:** All significant changes are documented below, linked to the corresponding git commit.

**Current Version: v0.1.0**

---

## 6. Authentication & Backend Strategy
(No changes)

## 7. SEO & Analytics
(No changes)

## 8. FastAPI Backend (Google App Engine)
(No changes)

## 9. Testing Strategy
(No changes)

## 10. Development Roadmap

This roadmap is updated to include timed exams, testing, and professional certification features.

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

### Phase 5: Professional Certification & Polish

*Goal: Elevate the user experience with professional-grade features.*

1.  **Implement "Add to LinkedIn" Feature:**
    -   On the certificate verification page, add a button that allows users to add their credential to their LinkedIn profile.
    -   This will construct a URL with the necessary information (Organization Name, Certificate Name, Issue Date, Credential URL) to pre-fill the LinkedIn form.
2.  **Enhance Profile Page:** Update the `/profile` page to display a rich history of the user's past exam attempts, including scores and durations.
3.  **Implement Analytics Events:** Integrate Google Analytics custom event tracking for key user actions.
4.  **Refine Blog:** Continue generating high-quality blog posts and consider adding features like categories or search.
5.  **Conduct Full Site Review:** Perform a comprehensive review of the entire application for styling, usability, and bugs.

### Phase 6: Final Deployment & Maintenance
(No changes)

---

## Changelog

### v0.1.0 (Initial Commit)
- Initial project setup and core feature implementation.
- Includes Gatsby frontend, FastAPI backend, Supabase integration, multi-exam architecture, question generation, blog, user authentication, and certificate verification.

