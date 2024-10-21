// src/components/Poster.js
import React from 'react';
import './poster.css';

const Poster = ({ imageSrc, title, content, onClick }) => {
  return (
    <div className="poster" onClick={onClick}> {/* Add onClick handler */}
      <img src={imageSrc} alt={title} className="poster-image" />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Poster;
