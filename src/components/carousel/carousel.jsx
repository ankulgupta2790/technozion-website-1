import React, { useState } from 'react';
import Card from '../card/card.jsx'; // Importing the Card component
import './carousel.css'; // Carousel styles
import { WebCanvas } from '../bg_animation/bg_animate.js';
import imgsrc from './tzcomingsoon.png';

const Carousel = () => {
  const cards = [
    { 
      title: "Card 1", 
      description: "This is the description for event 1",
      rules: "These are the rules for event 1",
      contact: "Contact us at event1@example.com",
      imgSrc: imgsrc 
    },
    { 
      title: "Card 2", 
      description: "This is the description for event 2.", 
      rules: "These are the rules for event 2.",
      contact: "Contact us at event2@example.com",
      imgSrc: imgsrc 
    },
    { 
      title: "Card 3", 
      description: "This is the description for evetn 3.", 
      rules: "These are the rules for event 3.",
      contact: "Contact us at event3@example.com",
      imgSrc: imgsrc 
    },
    { 
      title: "Card 4", 
      description: "This is the description for event 4.", 
      rules: "These are the rules for event 4.",
      contact: "Contact us at event@example.com",
      imgSrc: imgsrc 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <>
      <div className="carousel-canvas">
        <WebCanvas /> {/* Position the canvas behind the content */}
      </div>
      <div className="carousel">
        <button onClick={prevCard} className="carousel-button prev">«</button> {/* Updated to « */}
        <div className="carousel-content">
          <Card
            title={cards[currentIndex].title}
            description={cards[currentIndex].description}
            rules={cards[currentIndex].rules} // Passing rules to Card
            contact={cards[currentIndex].contact} // Passing contact to Card
            imgSrc={cards[currentIndex].imgSrc}
          />
        </div>
        <button onClick={nextCard} className="carousel-button next">»</button> {/* Updated to » */}
      </div>
    </>
  );
};

export default Carousel;
