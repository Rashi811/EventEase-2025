import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        
        <h1>EventEase</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/cart">🛒</Link>
        <Link to="/search">🔍</Link>
        <Link to="/login">👤 Login</Link>
        <Link to="/signup">📝 Signup</Link>
      </nav>
    </header>
  );
};

export default Header;
