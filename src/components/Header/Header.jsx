import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" className="nav-logo-text font-bold text-xl">TANGLAWAN</a>
        <nav className="space-x-4">
          <a href="/about" className="text-gray-300 hover:text-blue-300">About</a>
          <a href="/privacy" className="text-gray-300 hover:text-blue-300">Privacy</a>
          <a href="/login" className="text-gray-300 hover:text-blue-300">Login</a>
        </nav>
      </div>
    </header>
  );
}
