import React from "react";
import "./CourseCard.css";
import { FaClock, FaArrowRight } from "react-icons/fa"; // Added FaArrowRight

const CourseCard = ({ title, description, duration, thumbnailUrl }) => {
  const handleLearnMore = () => {
    // In a real app, this would navigate to a detailed course page
    alert(`Learn more about: ${title}`);
  };

  return (
    <div className="course-card">
      {thumbnailUrl && ( // Conditionally render image if URL exists
        <img
          src={thumbnailUrl}
          alt={`${title} course thumbnail`}
          className="course-thumbnail"
        />
      )}
      <div className="course-card-content">
        <h4>{title}</h4>
        <p className="course-description">{description}</p>
        <p className="course-duration">
          <FaClock className="icon-before-text" />
          <strong>Duration:</strong> {duration}
        </p>
        <button className="learn-more-button" onClick={handleLearnMore}>
          Learn More <FaArrowRight className="icon-after-text" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
