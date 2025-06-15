import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import  Home  from "./pages/Home";
import { About } from "./pages/About";

import { Contact } from "./pages/Contact";
import  Navbar  from "./components/Navbar";
import { Projects } from "./pages/Projects";



export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}
