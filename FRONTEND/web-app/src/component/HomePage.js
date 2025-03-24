import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homePage">
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="event">Event</a></li>
          <li><a href="#venue">Venue</a></li>
          <li><a href="#staff">Staff</a></li>
          <li><a href="#register">Register</a></li>
        </ul>
      </nav>

      <header className="hero-section">
        <h1>TAKE A TRIP INTO PARADISE</h1>
        <p>Partner with <strong>EventEase</strong></p>
        <p>Sri Lanka's #1 Exclusive Event Company</p>
      </header>

      <footer className="footer">
        <p>About Us | Contact Us</p>
        <p>All Right Reserved by EventEase (pvt)</p>
      </footer>
    </div>
  );
}

export default HomePage;