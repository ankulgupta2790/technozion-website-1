import React from 'react';
import './poster.css'; // Assuming you have some styles for Poster

const Poster = ({ imageSrc, fallbackSrc, title, content, onClick }) => {
  const handleError = (e) => {
    e.target.src = fallbackSrc; // Set fallback image if the original fails
  };

  return (
    <div className="poster" onClick={onClick}>
      <img src={imageSrc} alt={title} onError={handleError} className="poster-image" />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Poster;
