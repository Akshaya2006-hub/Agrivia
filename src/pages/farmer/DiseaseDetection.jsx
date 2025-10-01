// src/pages/farmer/DiseaseDetection.jsx
import React from 'react';
import FileUpload from '../../components/FileUpload';
import './DiseaseDetection.css';

const DiseaseDetection = () => {
  // This is a static example of what the result would look like
  const analysisResult = {
    disease: "Tomato Late Blight",
    confidence: "95% Confidence",
    cause: "Caused by the fungus Phytophthora infestans, often occurring in cool, moist conditions.",
    solution: "1. Remove and destroy infected plants immediately. 2. Ensure proper spacing for air circulation. 3. Apply a bio-fungicide like a copper-based spray or Neem oil as a preventive measure."
  };

  return (
    <div className="detection-container">
      <div className="upload-section">
        <h2>Plant Disease Detection</h2>
        <p>Upload a clear photo of the affected leaf or plant.</p>
        <FileUpload label="Upload Plant Photo" />
        <button className="analyze-button">Analyze Image</button>
      </div>

      <div className="results-section">
        <div className="message assistant">
          <p><strong>Analysis Result:</strong></p>
          <ul>
            <li><strong>Disease:</strong> {analysisResult.disease} <em>({analysisResult.confidence})</em></li>
            <li><strong>Possible Cause:</strong> {analysisResult.cause}</li>
            <li><strong>Recommended Organic Solution:</strong> {analysisResult.solution}</li>
          </ul>
          <small>Disclaimer: This is an AI-generated suggestion. Please consult with a local agricultural expert for confirmation.</small>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetection;