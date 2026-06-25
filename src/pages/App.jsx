import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import Login from "../components/Login/Login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}