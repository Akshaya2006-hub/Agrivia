import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaIdCard, FaMapMarkerAlt, FaPhone, FaSignOutAlt } from 'react-icons/fa';
import './Profile.css';

// Mock data for the farmer
const farmerData = {
  name: "M. Kumar",
  farmerId: "KER-FARM-84321",
  aadhar: "XXXX XXXX 5678",
  region: "Palakkad, Kerala",
  phone: "+91 98765 43210",
  address: "123 Green Valley, Chittur, Palakkad, 678101",
  // Updated with the new profile image
  profilePic: "https://images.rawpixel.com/image_png_1100/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlMTJfcGhvdG9fb2ZfYW5faW5kaWFuX2Zhcm1lcl9kb2luZ19hZ3JpY3VsdHVyZV9zbV84M2Y5ODI4MC05MGFlLTRmZTEtOWQ3NS0xMjM4MWI5MTMxZjYucG5n.png"
};

const Profile = () => {
  // This check prevents the component from crashing if farmerData is not yet available.
  if (!farmerData) {
    return <div className="profile-container">Loading...</div>;
  }

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${farmerData.farmerId}`;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img 
            src={farmerData.profilePic} 
            alt="Farmer" 
            className="profile-picture" 
          />
          <h2>{farmerData.name}</h2>
          <p className="farmer-id">{farmerData.farmerId}</p>
        </div>
        
        <div className="profile-details">
          <h3>Unique QR Code</h3>
          <div className="qr-code-container">
            <img src={qrCodeUrl} alt="Farmer QR Code" />
            <p>Scan this for farmer verification and transactions.</p>
          </div>

          <h3>Personal Information</h3>
          <ul>
            <li><FaIdCard /> <strong>Aadhaar:</strong> {farmerData.aadhar}</li>
            <li><FaPhone /> <strong>Phone:</strong> {farmerData.phone}</li>
            <li><FaMapMarkerAlt /> <strong>Address:</strong> {farmerData.address}</li>
          </ul>
        </div>
        
        <div className="profile-footer">
          <Link to="/" className="logout-button">
            <FaSignOutAlt /> Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;

