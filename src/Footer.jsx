import React from "react";
import "./Footer.css"; // We'll create this next
import { FaHeart } from "react-icons/fa"; // Example icon

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>
          &copy; {currentYear} Seeds Platform. All Rights Reserved.
        </p>
        <p className="footer-credits">
          Made with <FaHeart className="footer-heart-icon" /> for learning.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
