import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./component/HomePage"; // Ensure this is the correct path

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
