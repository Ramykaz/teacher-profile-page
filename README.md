# Seeds Platform - Frontend Assignment

This project is a frontend implementation for the "Seeds Roles Assignment," focusing on building key user interface components for an online learning platform connecting students with Qur'an and Arabic teachers.

## Assignment Focus: Task 1 - Frontend (React)

This part of the assignment involved building:
1.  A responsive **Teacher Profile Page**.
2.  A **Home Page** for the platform.
3.  Global components like a **Header** and **Footer**.
4.  Client-side **routing** and **page transitions**.

## Features Implemented

### 1. Home Page (`/`)
*   **Hero Section:** Engaging introduction with a headline, sub-headline, call-to-action buttons ("Find a Teacher", "Join as a Teacher"), and a placeholder image.
*   **Value Proposition Section:** Highlights key benefits of the platform (e.g., "Discover Trusted Tutors," "Flexible Learning," "Supportive Community") using a card-based layout with icons.
*   Responsive design for various screen sizes.

### 2. Teacher Profile Page (`/teacher-profile`)
*   **Profile Introduction:** Displays teacher's name, subject (with icon), a short tagline, a "Book a Session" button, and a clickable video thumbnail (currently shows an alert).
*   **Detailed Bio Section:** Shows an extended "About Me" for the teacher.
*   **Courses List:** Displays 2-3 mock courses offered by the teacher, each presented in a card format with:
    *   Course thumbnail image.
    *   Title and description.
    *   Duration (with icon).
    *   "Learn More" button (currently shows an alert).
*   Responsive design.

### 3. Global Components
*   **Header:**
    *   Sticky navigation bar.
    *   Site logo/name ("Seeds" with seedling icon) linking to the Home page.
    *   Navigation links: "Home," "Teachers" (links to Teacher Profile), "Courses" (placeholder), "Login" (placeholder).
*   **Footer:**
    *   Copyright information with the current year.
    *   "Made with love" credit.

### 4. Routing & Page Transitions
*   **Client-Side Routing:** Implemented using `react-router-dom` to navigate between the Home page and the Teacher Profile page without full page reloads.
*   **Page Transitions:** Smooth animated transitions (slide and fade) between pages using `framer-motion` for an enhanced user experience.

## Technologies Used

*   **React:** JavaScript library for building user interfaces.
*   **Create React App (or Vite):** For project setup and tooling.
*   **JavaScript (ES6+):** Core programming language.
*   **HTML5 & CSS3:** For structure and styling.
    *   CSS Flexbox & Grid for layout.
    *   Responsive design principles (media queries).
    *   CSS Custom Properties (Variables) for theming.
*   **`react-router-dom`:** For client-side routing.
*   **`framer-motion`:** For page transitions and animations.
*   **`react-icons`:** For including scalable vector icons.
*   **Placeholder Services:** `placehold.co` for mock images.

## Setup and Installation

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    # or if using Vite:
    # npm run dev
    # yarn dev
    ```
    This will typically open the application in your default web browser at `http://localhost:3000` (for Create React App) or `http://localhost:5173` (for Vite).

## Available Scripts

In the project directory, you can run:

*   `npm start` / `yarn start` (or `npm run dev` / `yarn dev` for Vite): Runs the app in development mode.
*   `npm test` / `yarn test`: Launches the test runner in interactive watch mode (if tests are set up).
*   `npm run build` / `yarn build`: Builds the app for production to the `build` folder.



## Assignment Context

This project was developed as part of the **Seeds Roles Assignment**. The goal was to demonstrate frontend development skills by creating realistic and functional UI components for the Seeds platform.


