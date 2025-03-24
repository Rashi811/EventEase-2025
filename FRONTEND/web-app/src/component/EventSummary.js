import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EventSummary.css";

const EventSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const eventData = location.state?.eventData;

  if (!eventData || !eventData._id) {
    return <h1>Error: No event data found!</h1>;
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/events/${eventData._id}`);
      alert("Details deleted successfully");
      navigate("/events");
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Failed to delete the event.");
    }
  };

  return (
    <div className="event-summary">
      <h1>Event Summary</h1>
      <p><strong>Event Name:</strong> {eventData.eventName}</p>
      <p><strong>Type:</strong> {eventData.eventType}</p>
      <p><strong>Date:</strong> {eventData.date}</p>
      <p><strong>Guests:</strong> {eventData.guestCount}</p>
      <button onClick={() => navigate("/update-event", { state: { eventData } })}>Update</button>
      <button onClick={handleDelete} className="delete-btn">Delete</button>
    </div>
  );
};

export default EventSummary;
