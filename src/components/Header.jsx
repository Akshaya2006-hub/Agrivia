import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaBell } from 'react-icons/fa';
import './Header.css';

// Updated with the correct male farmer profile image
const profilePicUrl = "https://images.rawpixel.com/image_png_1100/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMTJfcGhvdG9fb2ZfYW5faW5kaWFuX2Zhcm1lcl9kb2luZ19hZ3JpY3VsdHVyZV9zbV84M2Y5ODI4MC05MGFlLTRmZTEtOWQ3NS0xMjM4MWI5MTMxZjYucG5n.png";

const Header = ({ onMenuClick }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button" onClick={onMenuClick}>
          <FaBars />
        </button>
      </div>
      <h2 className="header-title">Agrivia</h2>
      <div className="header-right">
        <FaBell className="notification-icon" />
        <Link to="/farmer/dashboard/profile">
          <img src={profilePicUrl} alt="Profile" className="header-profile-pic" />
        </Link>
      </div>
    </header>
  );
};

export default Header;

