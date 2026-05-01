import "./Footer.css";
import { Link } from "react-router-dom";

import { useState } from "react";

export function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <footer className="footer">

      <div className="rights">
        <p>&copy; 2026 TANGLAWAN. All rights reserved.</p>
      </div>
      
    </footer>
  );
}

export default Footer;