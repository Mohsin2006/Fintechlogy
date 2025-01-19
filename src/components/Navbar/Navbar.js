import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarTogglerDemo02"
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/aboutus">ABOUT US</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/fintech">FINTECH</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/blockchain">BLOCK CHAIN</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cybersecurity">CYBER SECURITY</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/technology">TECHNOLOGY</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contactus">CONTACT US</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
