# JCE Community Chat

**JCE Community Chat** is a dedicated student discussion forum built exclusively for the Jerusalem College of Engineering. It serves as a centralized hub for students to connect, discuss academic topics, share hostel updates, network for internships, and coordinate campus events.

## 🎯 What This Website Does

This application is designed to simulate a modern, real-time communication platform tailored for college life. Key features include:

- **Exclusive Access**: A secure authentication flow that restricts signups and logins solely to users with `@jerusalemengg.ac.in` email addresses, ensuring a safe, student-only environment.
- **Categorized Channels**: Conversations are organized into dedicated channels so information is easy to find:
  - `# General` – Campus-wide announcements and broad discussions.
  - `# Hostel & Campus` – Room availability, food quality, rules, and campus issues.
  - `# Academics & Exams` – Study notes, syllabus doubts, and exam schedules.
  - `# Internships & Careers` – Off-campus drives, interview prep, and skill development.
  - `# Clubs & Events` – Symposiums, cultural events, and club activities.
  - `# Buy & Sell` – A student marketplace for textbooks, electronics, etc.
- **Interactive Feed**: Students can post updates, filter posts by channel, and view detailed information including the author's year and department.
- **Rich Engagement**: Users can interact with posts by leaving replies or using emoji reactions (👍, ❤️, 😂, 😮, 😢) to express their thoughts instantly.
- **Responsive & Modern UI**: The interface utilizes a sleek glassmorphic design, vibrant gradients, and dynamic layouts to provide a premium user experience across desktops, tablets, and mobile devices.

## 🛠️ Technologies Used

The project was developed with a focus on writing clean, modular, and performant code without relying on heavy frontend frameworks.

- **Vanilla JavaScript (ES6)**: Powers all the interactive elements, modal toggling, form validations, and in-memory state management. The code is modularized into specialized services, UI components, and utility functions.
- **HTML5**: Provides semantic structure and accessibility for the application, ensuring a solid foundation.
- **CSS3 / CSS Variables**: Used to build a scalable design system. The styling is broken down into modular files (`variables.css`, `main.css`, and `components.css`), leveraging CSS Grid and Flexbox for complex, responsive layouts.
- **GitHub Pages**: The project is configured with a `.nojekyll` file to serve the native HTML/CSS/JS files directly, providing instant, fast deployments directly from the repository.

## 📐 Architecture & Structure

To maintain a "production-ready" standard, the codebase follows strict separation of concerns:
- **Services Layer**: Manages the data state (users, posts, channels), designed so it can easily be swapped out for a real backend API (like Firebase or AWS) in the future.
- **Components Layer**: Handles DOM manipulation, rendering posts dynamically, and managing modal overlays.
- **Utils**: Contains pure functions for data transformation (e.g., mapping department acronyms to full names).

---
*Created as a portfolio project and community tool for Jerusalem College of Engineering.*
