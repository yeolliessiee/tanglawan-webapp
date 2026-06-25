import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardware diagnostic portal authentications go here
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 font-sans">
      
      {/* Centered Glassmorphic Login Card */}
      <div className="card-glow w-full max-w-md p-8 rounded-2xl relative overflow-hidden">
        
        {/* Decorative Top Ambient Light Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-right from-transparent via-blue-500 to-transparent opacity-50" />

        {/* Portal Branding Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-3">
            <img src="/logo.png" alt="TANGLAWAN Logo" className="h-8 w-auto" />
            <span className="text-lg font-bold tracking-tight nav-logo-text">TANGLAWAN</span>
          </Link>
          <h2 className="text-xl font-bold text-blue-300">Clinical Portal Login</h2>
          <p className="text-xs text-gray-500 mt-1">
            Access secure diagnostic records and PIPR waveforms
          </p>
        </div>

        {/* Interactive Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input w-full px-4 py-3 rounded-xl text-sm"
              placeholder="provider@hospital.com"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input w-full px-4 py-3 rounded-xl text-sm"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Assistance Utilities */}
          <div className="flex justify-between items-center text-xs text-gray-400 pt-1">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="accent-blue-600 rounded" />
              <span>Remember device</span>
            </label>
            <a href="#forgot" className="hover:text-blue-400 transition-colors">
              Forgot security key?
            </a>
          </div>

          {/* Form Action Button */}
          <button
            type="submit"
            className="btn-gradient w-full py-3 rounded-xl font-bold text-sm tracking-wide mt-2 shadow-lg"
          >
            Authorize Connection
          </button>
        </form>

        {/* Return Shortcut Footer */}
        <div className="text-center mt-6 pt-4 border-t border-gray-800/60">
          <Link to="/" className="text-xs text-gray-500 hover:text-blue-300 transition-colors">
            ← Back to Public Dashboard
          </Link>
        </div>

      </div>
    </div>
  );
}
