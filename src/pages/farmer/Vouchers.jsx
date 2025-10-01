// src/pages/farmer/Vouchers.jsx
import React from 'react';
import VoucherCard from '../../components/VoucherCard';
import './Vouchers.css';

// Mock data for vouchers
const mockVouchers = [
  { id: 1, title: "₹100 off on Bio-Fertilizers", code: "AGRI100", expiry: "2025-10-31", isRedeemed: false },
  { id: 2, title: "15% off on Quality Seeds", code: "SEED15", expiry: "2025-11-15", isRedeemed: false },
  { id: 3, title: "Free Soil Testing Kit", code: "SOILFREE", expiry: "2025-09-20", isRedeemed: true },
];

const Vouchers = () => {
  return (
    <div className="vouchers-container">
      {mockVouchers.map(voucher => (
        <VoucherCard
          key={voucher.id}
          title={voucher.title}
          code={voucher.code}
          expiry={voucher.expiry}
          isRedeemed={voucher.isRedeemed}
        />
      ))}
    </div>
  );
};

export default Vouchers;