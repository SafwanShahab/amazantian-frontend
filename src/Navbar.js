import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const offScreenMenu = document.querySelector(".off-screen-menu");
      const hamMenu = document.querySelector(".ham-menu");

      if (
        offScreenMenu &&
        !offScreenMenu.contains(event.target) &&
        !hamMenu.contains(event.target)
      ) {
        setMenuActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMenuItemClick = () => {
    setMenuActive(false);
  };

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">
          <img src="Amazantian Logo.png" alt="Company Logo" className="logo" />
        </Link>
      </div>
      
      {/* Company Verbiage */}
      <div className="verbiage-container">
        <img src="Amazantian (Verbiage).png" alt="Company Verbiage" className="verbiage" />
      </div>

      <div className="header-right">
        <span className="email">Email: Amazantian@gmail.com</span>
        <span className="phone">Phone: (626) 885-4899</span>
      </div>

      <nav className="nav-bar">
        <div className="nav-buttons">
          <Link to="/find-talent">
            <button className="find-talent-btn">Find Talent</button>
          </Link>
          <Link to="/find-jobs">
            <button className="find-jobs-btn">Find Jobs</button>
          </Link>
        </div>
      </nav>

      {/* Off-Screen Menu (Mobile) */}
      <div className={`off-screen-menu ${menuActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/find-jobs" onClick={handleMenuItemClick}>Find Jobs</Link>
          </li>
          <li>
            <Link to="/find-talent" onClick={handleMenuItemClick}>Find Talent</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleMenuItemClick}></Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu */}
      <div className={`ham-menu ${menuActive ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
