// src/components/QuestCard.jsx
import React from 'react';
import './QuestCard.css';
import { FaLeaf } from 'react-icons/fa';

// Add id and onComplete to the props
const QuestCard = ({ id, title, description, points, isCompleted, onComplete }) => {
  return (
    <div className={`quest-card ${isCompleted ? 'completed' : ''}`}>
      <div className="quest-icon">
        <FaLeaf />
      </div>
      <div className="quest-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="quest-reward">
        <span>{points} GC</span>
        {/* Add the onClick handler */}
        <button onClick={() => onComplete(id)} disabled={isCompleted}>
          {isCompleted ? 'Done' : 'Complete Quest'}
        </button>
      </div>
    </div>
  );
};

export default QuestCard;