import "./Header.css";
import { Link } from "react-router-dom";

import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="header">

      <div className="logo-row">

        <div className="logo-title">
            <span className="icon">
              <img src="pics/logo.png" alt="logo"/>
            </span>
            <span className="name">TANGLAWAN</span>
          </div>

          <div className="navbar">
            <Link to="/" onClick={closeAll}>Home</Link>
            <Link to="/about" onClick={closeAll}>About</Link>
            <Link to="/privacy" onClick={closeAll}>Privacy Policy</Link>
            <div className="login"><Link to="/login" onClick={closeAll}>Patient Login</Link></div>
          </div>
        
      </div>
      
    </header>
  );
}

export default Header;