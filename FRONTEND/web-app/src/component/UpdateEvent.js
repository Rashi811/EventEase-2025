import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


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
        <input type="text" name="eventName" placeholder="Event Name" onChange={handleChange} required />
        <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <input type="number" name="guestCount" placeholder="Guest Count" onChange={handleChange} required />
        <textarea name="guestDetails" placeholder="Guest Details" onChange={handleChange}></textarea>
        <textarea name="specialNotes" placeholder="Special Notes" onChange={handleChange}></textarea>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateEvent;
