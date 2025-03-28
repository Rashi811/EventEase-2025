import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./component/HomePage"; // Ensure this is the correct path
import EventHome from "./component/EventHome";
import AddEvent from "./component/AddEvent";
import EventSummary from "./component/EventSummary";
import EventDetails from "./component/EventDetails";
import UpdateEvent from "./component/UpdateEvent";
import Header from "./component/Header";  // Import Header
import Footer from "./component/Footer";
import AboutUs from "./component/AboutUs";

//Gangani
import TaskDashboard from "./component/Task/TaskDashboard";
import TaskCreateForm from "./component/Task/CreateTaskForm";
import TaskList from "./component/Task/TaskList";
import UpdateTaskForm from "./component/Task/UpdateTask";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/event" element={<EventHome />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/event-summary/" element={<EventSummary />} />
          <Route path="/update-event/" element={<UpdateEvent />} />
          <Route path="/event-details/" element={<EventDetails />} />
          <Route path="/about/" element={<AboutUs />} />
          <Route path="/task-dashboard/" element={<TaskDashboard/>} />
          <Route path="/create-task/" element={<TaskCreateForm/>} />
          <Route path="/task-list/" element={<TaskList/>}/>
          <Route path="/update-task/:id" element={<UpdateTaskForm/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
