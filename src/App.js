import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation, // To get location for AnimatePresence key
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"; // Import Framer Motion

import Header from "./Header";
import HomePage from "./HomePage";
import TeacherProfile from "./TeacherProfile";
import Footer from "./Footer";
import "./App.css";

// Define page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw", // Slide in from left
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100vw", // Slide out to right
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

// A component to handle the animated routes
function AnimatedRoutes() {
  const location = useLocation(); // Get current location

  return (
    <AnimatePresence mode="wait"> {/* 'wait' ensures exit animation completes before enter */}
      <Routes location={location} key={location.pathname}> {/* Pass location and key */}
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/teacher-profile" // Route for the teacher profile page
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <TeacherProfile />
            </motion.div>
          }
        />
        {/* Add other routes here as needed */}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router> {/* Wrap everything with BrowserRouter */}
      <div className="App">
        <Header />
        <main className="main-content">
          <AnimatedRoutes /> {/* Use the animated routes component */}
        </main>
        
      </div>
    </Router>
  );
}

export default App;
