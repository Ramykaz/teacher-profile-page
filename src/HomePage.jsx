import React from "react";
import "./HomePage.css";
import {
  FaSearch,
  FaUsers,
  FaChalkboardTeacher,
  FaClock,
  FaComments,          
} from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Hero Section (from previous step) */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-headline">
            Connect with Trusted Qur'an & Arabic Tutors
          </h1>
          <p className="hero-subheadline">
            Learn from passionate teachers from underrepresented regions, right
            from your home. Quality, affordable, and accessible learning
            awaits.
          </p>
          <div className="hero-cta-buttons">
            <button className="cta-button primary">
              <FaSearch className="icon-before-text" /> Find a Teacher
            </button>
            <button className="cta-button secondary">
              <FaUsers className="icon-before-text" /> Join as a Teacher
            </button>
          </div>
        </div>
        <div className="hero-image-placeholder">
          <img
            src="https://placehold.co/600x400/A9CCE3/FFFFFF?text=Inspiring+Learning+Moment"
            alt="Students learning online"
          />
        </div>
      </section>

      {/* Value Proposition / How It Works Section */}
      <section className="value-prop-section">
        <h2 className="section-title">Why Choose Seeds?</h2>
        <div className="value-cards-container">
          <div className="value-card">
            <FaChalkboardTeacher className="value-card-icon" />
            <h3 className="value-card-title">Discover Trusted Tutors</h3>
            <p className="value-card-description">
              Access a curated network of experienced and verified teachers
              specializing in Qur'an and Arabic studies.
            </p>
          </div>
          <div className="value-card">
            <FaClock className="value-card-icon" />
            <h3 className="value-card-title">Flexible Learning</h3>
            <p className="value-card-description">
              Schedule sessions that fit your lifestyle. Learn at your own
              pace, from anywhere in the world.
            </p>
          </div>
          <div className="value-card">
            <FaComments className="value-card-icon" />
            <h3 className="value-card-title">Supportive Community</h3>
            <p className="value-card-description">
              Join a vibrant community of learners and educators, fostering
              connection and shared growth.
            </p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default HomePage;
