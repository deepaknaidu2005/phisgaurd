# PhishGuard — Phishing Awareness Training

## Project purpose
PhishGuard is a college-level interactive cybersecurity awareness module focused on phishing, fake websites, impersonation and social engineering.

## Why this version is stronger
This version is designed as a maintainable awareness product rather than a static presentation. It includes:
- real-world-inspired scam scenarios
- phishing type coverage: email, smishing, vishing, spear phishing, whaling and QR phishing
- fake website checklist
- safe phishing-message simulator
- "I already clicked" response workflow
- randomized interactive quiz
- 25-question bank with 10 random questions per attempt
- shuffled answer choices
- current threat snapshot
- future-ready version roadmap
- source section for continuous updates

## Requirements mapping
1. Create presentation/online module → Interactive responsive web module.
2. Recognize phishing emails/fake websites → Warning signs + fake website checklist + simulator.
3. Social engineering → Dedicated tactics section.
4. Best practices → Five-layer safety scorecard + incident response.
5. Real-world examples + interactive quizzes → Eight documented-pattern scenarios + randomized quiz.

## Real-world evidence
The content is informed by current public guidance and data from the FTC and CISA. Examples are deliberately fictionalized so the project does not distribute live malicious links or credentials.

## Future updates
The project can be updated by:
- adding new objects to `bank` in `script.js`
- adding new case cards in `index.html`
- updating the Current Threat Snapshot
- creating versioned content releases
- adding a backend/database later for progress tracking
- adding a teacher/admin dashboard
- adding multilingual content
- adding safe AI-assisted explanations
- adding accessibility improvements and certificate generation

## Suggested future architecture
Frontend: HTML/CSS/JavaScript
Future backend: Python Flask/FastAPI or Node.js
Future database: SQLite/PostgreSQL
Future analytics: anonymized completion and quiz performance
Future deployment: GitHub Pages for the static version; a backend host when accounts/analytics are added.

## Run
Open `index.html` in a browser or use VS Code Live Server.

## Safety
This is an awareness project. It intentionally contains no working phishing links, credential-harvesting pages, malware, or operational attack instructions.

## Viva
"This project is an interactive phishing awareness platform. It combines real-world scam patterns, social-engineering education, a safe phishing-message simulator, incident-response guidance, and a randomized quiz. The architecture is designed so new threats, questions and learning modules can be added in future versions."
