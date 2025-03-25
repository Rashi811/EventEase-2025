import React from "react";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing icons
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={30} /> YouTube
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} /> Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} /> Twitter
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} /> Instagram
        </a>
      </div>
      <p>© 2025 EventEase. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
