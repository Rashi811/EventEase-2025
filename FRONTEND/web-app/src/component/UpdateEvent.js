import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./UpdateEvent.css";

const UpdateEvent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [eventData, setEventData] = useState(location.state?.eventData);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/events/${eventData._id}`, eventData);
      navigate("/event-summary", { state: { eventData } });
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  return (
    <div className="update-event">
      <h1>Update Event</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="eventName" value={eventData.eventName} onChange={handleChange} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateEvent;
