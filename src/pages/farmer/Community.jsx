import React from 'react';
import PostCard from '../../components/PostCard';
import { FaPlus, FaImage } from 'react-icons/fa';
import './Community.css';

// Mock data with new, working image URLs
const mockPosts = [
  { 
    id: 1, 
    author: "Anjali V.", 
    content: "Harvested these beautiful tomatoes today! The bio-fertilizer really works wonders.", 
    time: "2 hours ago",
    image: "https://images.unsplash.com/photo-1598512752271-33f913a5af13?auto=format&fit=crop&w=800&q=60" 
  },
  { 
    id: 2, 
    author: "Suresh P.", 
    content: "Warning: Seeing signs of yellow leaf disease in the Thrissur area. Please check your coconut trees.", 
    time: "5 hours ago",
    image: "https://images.unsplash.com/photo-1534349914343-4b6f1323c2fb?auto=format&fit=crop&w=800&q=60"
  },
  { 
    id: 3, 
    author: "M. Kumar", 
    content: "What is the best way to manage water during this dry spell? My soil moisture is very low.", 
    time: "1 day ago",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=60"
  },
];

const Community = () => {
  return (
    <div className="community-container">
      <div className="new-post-form glass-card-light">
        <textarea placeholder="Ask a question or share an update..."></textarea>
        <div className="new-post-actions">
          <button className="add-image-btn"><FaImage /> Add Image</button>
          <button className="post-btn"><FaPlus /> Post</button>
        </div>
      </div>
      <div className="post-feed">
        {mockPosts.map(post => (
          <PostCard
            key={post.id}
            author={post.author}
            content={post.content}
            time={post.time}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Community;

