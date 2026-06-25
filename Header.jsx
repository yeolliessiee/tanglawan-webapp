import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  // Helper function to mark active page states dynamically
  const isActive = (path) => location.pathname === path ? "text-blue-400" : "hover:text-blue-400 transition-colors";

  return (
    <nav className="flex justify-between items-center px-10 py-6 w-full max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <img src="/logo.png.png" alt="TANGLAWAN Logo" className="h-10 w-auto" />
        <span className="text-xl font-bold tracking-tight nav-logo-text">TANGLAWAN</span>
      </div>
      <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
        <Link to="/" className={isActive("/")}>Home</Link>
        <Link to="/about" className={isActive("/about")}>About</Link>
        <Link to="/privacy" className={isActive("/privacy")}>Privacy Policy</Link>
        <Link to="/login">
          <button className="btn-gradient px-6 py-2 rounded-full font-bold text-sm tracking-wide">
            Patient Login
          </button>
        </Link>
      </div>
    </nav>
  );
}