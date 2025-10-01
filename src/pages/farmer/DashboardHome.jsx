import React, { useState } from 'react';
import QuestCard from '../../components/QuestCard';
import DashboardOverview from '../../components/DashboardOverview';

// Mock Data for quests
const initialQuests = [
  { id: 1, title: "7-Day Soil Moisture Check", description: "Upload a photo of your soil moisture test for 7 days.", points: 150, isCompleted: false },
  { id: 2, title: "Switch to Bio-Pesticides", description: "Submit a purchase receipt for a bio-pesticide.", points: 200, isCompleted: false },
  { id: 3, title: "Community Help", description: "Answer a question in the community forum.", points: 50, isCompleted: true },
];

const DashboardHome = () => {
  const [quests, setQuests] = useState(initialQuests);

  const handleCompleteQuest = (questId) => {
    setQuests(quests.map(quest => 
      quest.id === questId ? { ...quest, isCompleted: true } : quest
    ));
  };

  return (
    <>
      <DashboardOverview />
      <h3>Your Active Quests</h3>
      <div className="quest-list">
        {quests.map(quest => (
          <QuestCard 
            key={quest.id}
            id={quest.id}
            title={quest.title}
            description={quest.description}
            points={quest.points}
            isCompleted={quest.isCompleted}
            onComplete={handleCompleteQuest}
          />
        ))}
      </div>
    </>
  );
};

export default DashboardHome;

