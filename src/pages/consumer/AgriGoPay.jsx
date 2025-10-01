import React from 'react';
import { Link } from 'react-router-dom';
import { FaQrcode, FaMobileAlt, FaUniversity, FaHistory } from 'react-icons/fa';
import ConsumerHeader from '../../components/ConsumerHeader'; // Assuming you have this for consistent header
import './AgriGoPay.css';

const AgriGoPay = () => {
  return (
    <>
      <ConsumerHeader />
      <div className="agrigopay-container">
        <div className="wallet-card">
          <div className="wallet-balance">
            <p>Your AgriGoPay Balance</p>
            <h2>₹ 1,500.00</h2>
          </div>
          <Link to="/consumer/link-bank" className="link-bank-btn">
            <FaUniversity /> Link a Bank Account
          </Link>
        </div>

        <div className="payment-options">
          <div className="option-card">
            <FaQrcode className="option-icon" />
            <p>Scan & Pay</p>
          </div>
          <div className="option-card">
            <FaMobileAlt className="option-icon" />
            <p>Pay to Mobile</p>
          </div>
        </div>

        <div className="transaction-history">
          <h3><FaHistory /> Transaction History</h3>
          <div className="transaction-item">
            <p>Paid for Organic Spinach</p>
            <span>- ₹30.00</span>
          </div>
          <div className="transaction-item">
            <p>Added money from bank</p>
            <span className="credit">+ ₹500.00</span>
          </div>
          <div className="transaction-item">
            <p>Paid for Fresh Tomatoes</p>
            <span>- ₹40.00</span>
          </div>
        </div>
      </div>
    </>
  );
};

// Re-using the header from the dashboard. If you don't have a separate component, you can paste the JSX here.
const TempConsumerHeader = () => {
  return (
    <header className="consumer-header-bar">
      <div className="consumer-header-content">
        <h1 className="consumer-title">Agrivia Fresh</h1>
        <Link to="/consumer/agrigopay" className="agrigopay-btn">
          <FaWallet />
          <span>AgriGoPay</span>
        </Link>
      </div>
    </header>
  );
};

// Final component to be exported
const AgriGoPayPage = () => {
    // A temporary fix to ensure header is defined.
    // Ideally, ConsumerHeader is a separate component.
    const DefinedConsumerHeader = typeof ConsumerHeader === 'undefined' ? TempConsumerHeader : ConsumerHeader;
    return (
        <>
            <DefinedConsumerHeader />
            <div className="agrigopay-container">
                {/* Content from AgriGoPay component above */}
                <div className="wallet-card">
                  <div className="wallet-balance">
                    <p>Your AgriGoPay Balance</p>
                    <h2>₹ 1,500.00</h2>
                  </div>
                  <Link to="/consumer/link-bank" className="link-bank-btn">
                    <FaUniversity /> Link a Bank Account
                  </Link>
                </div>

                <div className="payment-options">
                  <div className="option-card">
                    <FaQrcode className="option-icon" />
                    <p>Scan & Pay</p>
                  </div>
                  <div className="option-card">
                    <FaMobileAlt className="option-icon" />
                    <p>Pay to Mobile</p>
                  </div>
                </div>

                <div className="transaction-history">
                  <h3><FaHistory /> Transaction History</h3>
                  <div className="transaction-item">
                    <p>Paid for Organic Spinach</p>
                    <span>- ₹30.00</span>
                  </div>
                  <div className="transaction-item">
                    <p>Added money from bank</p>
                    <span className="credit">+ ₹500.00</span>
                  </div>
                  <div className="transaction-item">
                    <p>Paid for Fresh Tomatoes</p>
                    <span>- ₹40.00</span>
                  </div>
                </div>
            </div>
        </>
    );
};

export default AgriGoPayPage;

