import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddEvent.css";

const AddEvent = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    eventType: "",
    eventName: "",
    contactNumber: "",
    email: "",
    date: "",
    guestCount: "",
    guestDetails: "",
    specialNotes: "",
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Event Data:", eventData); // Debugging log
  
    try {
      const response = await axios.post("http://localhost:5000/events", eventData);
      console.log("Event added successfully:", response.data);
  
      navigate("/event-summary", { state: { eventData: response.data } });
  
    } catch (error) {
      console.error("Error adding event:", error.response ? error.response.data : error.message);      
      alert("Failed to submit the event. Please check console for errors.");
    }
  };
  

  return (
    <div className="add-event">
      <h1>Add New Event</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="eventType" placeholder="Event Type" onChange={handleChange} required />
        <input type="text" name="eventName" placeholder="Event Name" onChange={handleChange} required />
        <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <input type="number" name="guestCount" placeholder="Guest Count" onChange={handleChange} required />
        <textarea name="guestDetails" placeholder="Guest Details" onChange={handleChange}></textarea>
        <textarea name="specialNotes" placeholder="Special Notes" onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEvent;
