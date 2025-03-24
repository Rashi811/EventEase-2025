import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./component/HomePage"; // Ensure this is the correct path
import EventHome from "./component/EventHome";
import AddEvent from "./component/AddEvent";
import EventSummary from "./component/EventSummary";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/event" element={<EventHome />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/event-summary" element={<EventSummary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
