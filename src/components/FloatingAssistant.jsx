import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRobot, FaTimes, FaMicrophone, FaPaperPlane } from 'react-icons/fa';
import './FloatingAssistant.css';

const FloatingAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ text: "Hello! I am your Agrivia assistant. You can ask me about pests, fertilizers, or ask me to navigate.", sender: 'assistant' }]);
  const navigate = useNavigate();
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  const getBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    // Navigation
    if (lowerInput.includes('quest')) { setTimeout(() => navigate('/farmer/dashboard/quests'), 500); return "Navigating to Daily Quests."; }
    if (lowerInput.includes('profile')) { setTimeout(() => navigate('/farmer/dashboard/profile'), 500); return "Opening your profile."; }
    if (lowerInput.includes('buy') || lowerInput.includes('import')) { setTimeout(() => navigate('/farmer/dashboard/imports'), 500); return "Here is the marketplace to buy seeds and pesticides."; }
    if (lowerInput.includes('sell') || lowerInput.includes('export')) { setTimeout(() => navigate('/farmer/dashboard/exports'), 500); return "Here you can manage the products you want to sell."; }
    // Agricultural FAQs
    if (lowerInput.includes('pest') && lowerInput.includes('control')) { return "For organic pest control, consider using Neem oil spray or introducing beneficial insects like ladybugs."; }
    if (lowerInput.includes('fertilizer')) { return "A good organic fertilizer is compost or vermicompost. They enrich the soil with essential nutrients."; }
    if (lowerInput.includes('soil') && lowerInput.includes('health')) { return "To improve soil health, practice crop rotation, use cover crops, and add organic matter like compost."; }
    if (lowerInput.includes('water') || lowerInput.includes('irrigation')) { return "Drip irrigation is a highly efficient method to save water and provide consistent moisture to your crops."; }
    // General
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) { return "Hello there! How can I assist you?"; }
    return "I'm sorry, I don't have information on that. Try asking about pests, fertilizers, or soil health.";
  };

  const handleSendMessage = (e, messageText = input) => {
    if (e) e.preventDefault();
    if (!messageText.trim()) return;

    const userMessage = { text: messageText, sender: 'user' };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    if (input) setInput('');

    setTimeout(() => {
      const botResponseText = getBotResponse(messageText);
      const botMessage = { text: botResponseText, sender: 'assistant' };
      setMessages(prev => [...prev, botMessage]);
      speak(botResponseText);
    }, 1000);
  };

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="floating-btn" onClick={toggleChat}><FaRobot /></button>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header"><h4>Agrivia Assistant</h4><button className="close-chat-btn" onClick={toggleChat}><FaTimes /></button></div>
          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, index) => <div key={index} className={`message ${msg.sender}`}>{msg.text}</div>)}
          </div>
          <div className="suggested-topics">
            <button onClick={(e) => handleSendMessage(null, "Pest Control")}>Pest Control</button>
            <button onClick={(e) => handleSendMessage(null, "Fertilizer Info")}>Fertilizers</button>
            <button onClick={(e) => handleSendMessage(null, "Soil Health")}>Soil Health</button>
          </div>
          <form className="chat-input-area" onSubmit={handleSendMessage}>
            <input type="text" placeholder="Type or ask..." value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit" className="send-btn"><FaPaperPlane /></button>
            <button type="button" className="mic-btn"><FaMicrophone /></button>
          </form>
        </div>
      )}
    </>
  );
};
export default FloatingAssistant;
