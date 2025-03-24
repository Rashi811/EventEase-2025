import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">📺 YouTube</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷 Instagram</a>
      </div>
      <p>© 2025 EventEase. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

