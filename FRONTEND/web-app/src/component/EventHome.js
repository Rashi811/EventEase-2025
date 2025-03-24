import React from "react";
import { Link } from "react-router-dom";
import "./EventHome.css";

const EventHome = () => {
  return (
    <div className="event-home">
      <h1>Manage Your Events</h1>
      <div className="buttons">
        <Link to="/add-event" className="btn">Add Event</Link>
        <Link to="/event-details" className="btn">Event Details</Link>
      </div>
    </div>
  );
};

export default EventHome;
