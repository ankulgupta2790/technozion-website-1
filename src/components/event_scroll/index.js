// src/Index.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Poster from './poster.js'; // Ensure this path is correct
import './index.css';
import { WebCanvas } from '../bg_animation/bg_animate.js';
import imgsrc from './tzcomingsoon.png';

function Index() {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate function
  const { state } = location || {};
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (state && state.dataSource === 'societies') {
          response = await fetch('/dataJSON/societyx.json');
        } else if (state && state.dataSource === 'spotlight') {
          response = await fetch('/dataJSON/spotlight.json');
        } else if (state && state.dataSource === 'clubevents') {
          response = await fetch('/dataJSON/club.json');
        }

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [state]);

  if (isLoading) {
    return <p>Loading...</p>; // Display loading indicator while fetching data
  }

  if (!data.length) {
    return <p>No data available</p>; // Handle case when no data is available
  }

  // Function to handle poster click
  const handlePosterClick = (item) => {
    navigate('/card', { state: { ...item } }); // Navigate to /card with item data
  };

  // Function to render society posters
  const renderSocieties = () => {
    return data.map((society) => (
      <div key={society.societyName}>
        <h2 className="society-heading">{society.societyName}</h2> {/* Centered society name */}
        <div className="poster-container">
          {society.events.map((event, index) => (
            <Poster
              key={index}
              imageSrc={event.imgsrc || imgsrc} 
              title={event.title} 
              content={event.name} 
              onClick={() => handlePosterClick(event)} // Handle click to navigate
            />
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="outer-container">
      <div className="poster-canvas">
        <WebCanvas />
      </div>
      <div className="inner-container">
        {state && state.dataSource === 'societies' ? renderSocieties() : (
          <div className="poster-container">
            {data.map((item, index) => (
              <Poster 
                key={index}
                imageSrc={item.imgsrc || imgsrc} 
                title={item.title} 
                content={item.name} 
                onClick={() => handlePosterClick(item)} // Handle click to navigate
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
