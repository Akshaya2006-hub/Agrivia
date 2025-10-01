import React from 'react';
import { FaUserCircle, FaThumbsUp, FaComment, FaShare, FaVolumeUp } from 'react-icons/fa';
import './PostCard.css';

const PostCard = ({ author, content, time, image, likes, comments }) => {
  const handleReadAloud = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(content);
      window.speechSynthesis.speak(utterance);
    } else { alert("Sorry, your browser doesn't support text-to-speech."); }
  };
  return (
    <div className="post-card">
      <div className="post-author">
        <FaUserCircle className="author-icon" />
        <div><h4>{author}</h4><span>{time}</span></div>
      </div>
      <p className="post-content">{content}</p>
      {image && <img src={image} alt="User post" className="post-image" />}
      <div className="post-stats">
        <span>{likes} Likes</span>
        <span>{comments} Comments</span>
      </div>
      <div className="post-actions">
        <button><FaThumbsUp /> Like</button>
        <button><FaComment /> Comment</button>
        <button><FaShare /> Share</button>
        <button className="read-aloud-btn" onClick={handleReadAloud}><FaVolumeUp /> Read</button>
      </div>
    </div>
  );
};
export default PostCard;
