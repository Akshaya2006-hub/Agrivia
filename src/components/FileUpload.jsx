// src/components/FileUpload.jsx
import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import './FileUpload.css';

const FileUpload = ({ label }) => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName('');
    }
  };

  return (
    <div className="file-upload-container">
      <label htmlFor="file-input" className="file-upload-label">
        <FaUpload />
        <span>{label}</span>
      </label>
      <input id="file-input" type="file" onChange={handleFileChange} />
      {fileName && <p className="file-name-display">Selected: {fileName}</p>}
    </div>
  );
};

export default FileUpload;