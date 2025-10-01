import React, { useState } from 'react';
import './Awareness.css';

const Awareness = () => {
  const [activeTab, setActiveTab] = useState('Videos');

  return (
    <div className="awareness-container">
      <h2>Awareness Hub</h2>
      <div className="tabs">
        <button onClick={() => setActiveTab('Videos')} className={activeTab === 'Videos' ? 'active' : ''}>Videos</button>
        <button onClick={() => setActiveTab('News')} className={activeTab === 'News' ? 'active' : ''}>News</button>
        <button onClick={() => setActiveTab('Stories')} className={activeTab === 'Stories' ? 'active' : ''}>Success Stories</button>
      </div>
      <div className="tab-content">
        {activeTab === 'Videos' && <div className="video-grid">
          <div className="video-card">Video 1: Drip Irrigation Techniques</div>
          <div className="video-card">Video 2: Organic Pesticide Preparation</div>
        </div>}
        {activeTab === 'News' && <p>Latest agricultural news and government announcements will be shown here.</p>}
        {activeTab === 'Stories' && <p>Inspiring success stories from farmers across Kerala will be featured here.</p>}
      </div>
    </div>
  );
};
export default Awareness;
