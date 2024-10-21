import React, { useEffect, useState } from 'react';
// import './team.css'; 

import { WebCanvas } from "../bg_animation/bg_animate";
import Teams from './Teams.png';

export const Team = () => {
  const [data, setData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoverStates, setHoverStates] = useState([]); // Array for hover states

  useEffect(() => {
    fetch('./TeamData.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // Initialize hover states array based on the number of people
        setHoverStates(new Array(data.length).fill(false));
      }) 
      .catch((error) => console.error('Error fetching JSON:', error));
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getGridTemplate = (data) => { 
    let rows = []; 
    let index = 0; 
    const isMobile = windowWidth < 786;

    while (index < data.length) { 
      if (isMobile) { 
        rows.push([data[index]]); 
        index += 1; 
      } else { 
        rows.push([data[index], data[index + 1]]); 
        index += 2; 
      } 
    } 
    return rows; 
  }; 

  const gridTemplate = getGridTemplate(data);

  const handleMouseEnter = (index) => {
    setHoverStates((prev) => {
      const newHoverStates = [...prev];
      newHoverStates[index] = true;
      return newHoverStates;
    });
  };
  
  const handleMouseLeave = (index) => {
    setHoverStates((prev) => {
      const newHoverStates = [...prev];
      newHoverStates[index] = false;
      return newHoverStates;
    });
  };

  return (
    <div className="Teams">
      <div className="web-canvas">
        <WebCanvas />
      </div>
      <img src={Teams} alt="teams" />
      <div className="list">
        {gridTemplate.map((row, rowIndex) => (
          <div className={`grid-row ${row.length === 1 ? 'one-item' : 'two-items'}`} key={rowIndex}>
            {row.map((person, personIndex) =>
              person ? (
                <div
                  className="person"
                  key={personIndex}
                  id={`person-${rowIndex}-${personIndex}`}
                  onMouseEnter={() => handleMouseEnter(rowIndex * 2 + personIndex)} // Calculate index for hover states
                  onMouseLeave={() => handleMouseLeave(rowIndex * 2 + personIndex)} // Calculate index for hover states
                >  
                 <div className="personImage">
                   <img 
                   src={`/teamImages/${person.image}`} 
                   alt={``} 
                  style={{ borderRadius: '50%', width: '100%', height: '100%', objectFit: 'cover' }} 
                   />
                 </div>
                  {!(hoverStates[rowIndex * 2 + personIndex])&&(windowWidth>510) ? ( // Check individual hover state
                    <div className="personDetails">
                      <h1>{person.position}</h1>
                      <h2>{person.name}</h2>
                      <p className="person-contact">{person.contact}</p>
                    </div>
                  ) : (
                    <div className="person-info">
                      <p><strong>{person.position}</strong></p>
                      <p><strong>Name:</strong> {person.name}</p>
                      <p><strong>Contact:</strong> {person.contactNo}</p>
                      <p><strong>Email:</strong> {person.email}</p>
                    </div>
                  )}
                </div>
              ) : null
            )}
          </div>
        ))}
      </div>
    </div>
  );
};  
