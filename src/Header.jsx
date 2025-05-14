import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Header.css";
import { FaSeedling } from "react-icons/fa";

const Header = () => {
  return (
    <header className="site-main-header">
      <div className="header-content-wrapper">
        <Link to="/" className="logo-container"> {/* Link for logo */}
          <FaSeedling className="logo-icon" />
          <span className="site-name">Seeds</span>
        </Link>
        <nav className="main-navigation">
          <Link to="/" className="nav-link">Home</Link>
          {/* For "Teachers", let's link to the TeacherProfile page for now */}
          <Link to="/teacher-profile" className="nav-link">Teachers</Link>
          <Link to="/#courses" className="nav-link">Courses</Link> {/* Assuming courses is a section on home or another page */}
          <Link to="/#login" className="nav-link auth-link">Login</Link> {/* Placeholder */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
