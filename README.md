<div align="center">
  <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS Cloud" />
  <img src="https://img.shields.io/badge/Serverless-FD5750?style=for-the-badge&logo=serverless&logoColor=white" alt="Serverless Architecture" />
  <img src="https://img.shields.io/badge/Vanilla%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Vanilla JS" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/Cloud_Infra_Ready-232F3E?style=for-the-badge&logo=linux&logoColor=white" alt="Cloud Infra" />
</div>

<h1 align="center">☁️ JCE Community Chat: Cloud-Native Platform</h1>

**JCE Community Chat** is a high-performance, highly scalable student discussion forum built exclusively for the Jerusalem College of Engineering. 

This project was engineered with a **Cloud-First mindset**, specifically tailored for integration with **Amazon Web Services (AWS)**. As an aspiring **AI Cloud Infrastructure Engineer**, I designed the architecture to be completely decoupled, ensuring the frontend serves as a lightweight, lightning-fast edge client that interfaces perfectly with serverless AWS backend systems (like API Gateway, Lambda, and DynamoDB).

---

## 🏗️ Cloud & Infrastructure Focus

To mimic enterprise-grade deployment standards, the frontend was built using pure Vanilla JS without bulky frameworks. This keeps the asset payload minimal and optimizes delivery via CDN.

- **AWS Cloud Architecture Setup**: The services layer of the application is abstracted to treat all data operations as microservices payloads, preparing the groundwork for direct integrations with **AWS API Gateway** and **AWS Lambda**.
- **Edge Deployment**: The project utilizes zero-build static hosting (via GitHub Pages/Cloudflare/AWS S3 + CloudFront), meaning the client is distributed globally at the edge for sub-100ms load times.
- **AI-Ready Extensibility**: The architecture leaves clean hooks within the `services/` layer, designed to easily route chat data to AWS Comprehend for AI moderation, sentiment analysis, or automated AI bot replies in the future.

## 🎯 Platform Features

- **Exclusive Access Control**: A secure authentication flow that restricts signups and logins solely to users with `@jerusalemengg.ac.in` college emails.
- **Categorized Channels**: Conversations are organized logically to prevent clutter:
  - `# General` – Campus-wide announcements.
  - `# Hostel & Campus` – Rules, facilities, and campus issues.
  - `# Academics & Exams` – Study materials and exam schedules.
  - `# Internships & Careers` – Off-campus drives and cloud/tech interview prep.
  - `# Clubs & Events` – Symposiums and cultural fests.
  - `# Buy & Sell` – A student marketplace.
- **Interactive Feed & State**: Real-time mock state management simulating WebSockets. Users can post updates, leave replies, and use emoji reactions (👍, ❤️, 😂, 😮, 😢).
- **Glassmorphic UI**: A modern, sleek, and highly responsive user interface that provides a premium experience across all devices.

## 📐 Technical Architecture

The codebase follows strict separation of concerns, heavily inspired by modern cloud microservice architectures:

```text
├── src/
│   ├── index.html        # Edge entry point
│   ├── css/              # Modular design system
│   └── js/
│       ├── main.js       # App initialization
│       ├── config.js     # API & Environment constants
│       ├── utils/        # Pure transformation functions
│       ├── services/     # Data Layer: Designed for AWS REST/WebSocket integrations
│       └── components/   # UI & DOM rendering logic
```

- **Services Layer (`/js/services`)**: Currently uses an in-memory data store, but is architecturally isolated so that fetching/posting data can instantly be replaced with `fetch()` calls to an **AWS API Gateway** endpoint.
- **Components Layer (`/js/components`)**: Handles dynamic DOM manipulation and modal rendering without the overhead of React/Angular, making it perfect for low-latency serverless environments.

---
<p align="center">
  <i>Engineered by a future AI Cloud Infrastructure Engineer aiming to build resilient, scalable cloud systems.</i>
</p>
