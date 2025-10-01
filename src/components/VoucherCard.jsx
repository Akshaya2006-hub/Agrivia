// src/components/VoucherCard.jsx
import React from 'react';
import { FaGift } from 'react-icons/fa';
import './VoucherCard.css';

const VoucherCard = ({ title, code, expiry, isRedeemed }) => {
  return (
    <div className={`voucher-card ${isRedeemed ? 'redeemed' : ''}`}>
      <div className="voucher-icon">
        <FaGift />
      </div>
      <div className="voucher-details">
        <h4>{title}</h4>
        <p className="voucher-code">Code: <strong>{code}</strong></p>
        <p className="voucher-expiry">Expires on: {expiry}</p>
      </div>
      <button className="redeem-button" disabled={isRedeemed}>
        {isRedeemed ? 'Redeemed' : 'Redeem'}
      </button>
    </div>
  );
};

export default VoucherCard;