import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EventDetails.css";

const EventDetails = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/events")
      .then((response) => {
        setEvents(response.data.events);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  return (
    <div className="event-details">
      <h1>All Events</h1>
      <div className="event-list">
        {events.length === 0 ? (
          <p>No events found.</p>
        ) : (
          events.map((event) => (
            <div key={event._id} className="event-card">
              <h3>{event.eventName}</h3>
              <p><strong>Type:</strong> {event.eventType}</p>
              <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
              <p><strong>Guests:</strong> {event.guestCount}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventDetails;
