# JCE Community Chat

A production-ready, modular frontend application built with Vanilla JS, HTML, and CSS. It serves as a student discussion forum for the Jerusalem College of Engineering.

## Features

- **Authentication**: Secure student login and signup (restricted to `@jerusalemengg.ac.in`).
- **Channel Navigation**: Dedicated channels for general discussion, hostel, academics, careers, events, and a marketplace.
- **Real-time Feed**: View posts, add reactions (👍, ❤️, 😂, 😮, 😢), and reply to conversations.
- **Responsive UI**: A modern, glassmorphic design that works on mobile, tablet, and desktop screens.

## Project Structure

```
├── src/
│   ├── index.html        # Main entry point
│   ├── css/              # Modular stylesheets
│   └── js/
│       ├── main.js       # App initialization
│       ├── config.js     # Global configuration and constants
│       ├── utils/        # Helper functions
│       ├── services/     # Auth and state management
│       └── components/   # UI rendering and modal logic
├── tests/                # Unit tests for core logic
├── .env.example          # Template for environment variables
└── package.json          # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kevinjosh10/Community-Chat.git
   cd "Community Chat"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

### Running the App

Start the development server using Vite:
```bash
npm run dev
```

### Testing

Run the Jest test suite:
```bash
npm test
```

## Architecture

This project uses **Vanilla JavaScript (ES6 Modules)** to keep dependencies light and performance high. The code is structured around:
- **Services**: Manages the data layer (in-memory state that can easily be swapped for real API calls).
- **Components**: Handles DOM manipulation and event binding.
- **Utils**: Pure functions for formatting and data transformation.
