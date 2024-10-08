import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WebCanvas } from '../bg_animation/bg_animate';
import { useNavigate } from 'react-router-dom';
import Event from './Event.png';
import Portal from './Portal.png';
import Flame from './Flame.png';
import P1 from './2.png';
import { Helmet } from 'react-helmet'

import './index.css'; // Assuming you have this file for styling

const Events = () => {
  const navigate = useNavigate();


  
  // Updated states
  const [card1State, setCard1State] = useState({ moveToCenter: false, moveDown: false });
  const [card2State, setCard2State] = useState({ moveToCenter: false, moveDown: false });
  const [card3State, setCard3State] = useState({ moveToCenter: false, moveDown: false });
  const [flamestate, setflamestate] = useState(true);

  const [initial,setinitial] =useState(false);

  
  

  // Variants for card animations
  const screenWidth = window.innerWidth;

// Calculate X1f and X2f in vw (viewport width)
const X1f = (screenWidth < 768) ? '0vw' : '25vw'; // Set as '0vw' or '25vw' based on the condition
const X2f = (screenWidth < 768) ? '0vw' : '-25vw'; // Set as '0vw' or '-25vw' based on the condition
const Xf3=(screenWidth>7678 &&screenWidth<1000)?-190:0;
const cardVariants = {
  initial: { scale: 1, opacity: 1 },

  // Click animations
  moveToCenterCard1: { scale: 2, x: X1f, y: '-20vh', opacity: 1, rotateY: 720 },
  moveDownCard1: { scale: 0, y: '100vh', x: '40vh', opacity: 0 },
  moveToCenterCard2: { scale: 2, x: '0', y: '-20vh', opacity: 1, rotateY: 720 },
  moveDownCard2: { scale: 0, y: '100vh', opacity: 0 },
  moveToCenterCard3: { scale: 2, x: X2f, y: '-20vh', opacity: 1, rotateY: 720 },
  moveDownCard3: { scale: 0, y: '100vh', x: '-40vh', opacity: 0 },
};

  // Handle click events for each card

  const handleCard1Click = () => {
    setCard1State({ moveToCenter: true, moveDown: false });
    setTimeout(() => {
      setCard1State({ moveToCenter: false, moveDown: true });
      setflamestate(true);
    }, 800);
    setTimeout(() => {
      navigate('/displayevents', {state : { dataSource: 'clubevents'}});
    }, 1600);
  };

  const handleCard2Click = () => {
    setCard2State({ moveToCenter: true, moveDown: false });
    setTimeout(() => {
      setCard2State({ moveToCenter: false, moveDown: true });
      setflamestate(true);
    }, 800);
    setTimeout(() => {
      navigate('/displayevents', {state : { dataSource: 'spotlight'}});
    }, 1600);
  };

  const handleCard3Click = () => {
    setCard3State({ moveToCenter: true, moveDown: false });
    setTimeout(() => {
      setCard3State({ moveToCenter: false, moveDown: true });
      setflamestate(true);
    }, 800);
    setTimeout(() => {
      navigate('/displayevents', {state : { dataSource: 'societies'}});
    }, 1600);
  };

  return (
    <>
 

        <div className='web-canvas'>
          <WebCanvas/>
        </div>


      <div className="events-container">
        <div className="EventImg">
          <img src={Event} alt="Event" />
        </div>
        <img src={Portal} alt="Portal" className="portal-img" />
        <motion.img
          src={Flame}
          alt="Flame"
          className="portal-img"
          initial={{ opacity: 0 }}
          animate={{ opacity: flamestate ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          
        />
        <motion.div className="Maincards-container"
          initial={{
        y: "100vh", // Start from the bottom of the screen
        opacity: 0, // Start with 0 opacity
        scale: 0,   // Start with 0 scale
        x:0
      }}
      animate={{
        y: 0,      
        opacity: 1,
        scale: 1,
        x:0
      }}
      transition={{
        duration: 1, // Adjust duration as needed
        ease: "easeInOut", // Smooth transition
      }}
      onAnimationComplete={()=>(setflamestate(false))}
       >
          <motion.div
            className="Maincard" id='C1'
            variants={cardVariants}
            initial={{ scale: 1, opacity: 0 }} // Conditional initial state
            animate={
               card1State.moveDown
                ? 'moveDownCard1'
                : card1State.moveToCenter
                ? 'moveToCenterCard1'
                : 'initial'
            }
            transition={{ duration:  (card1State.moveDown ? 0.8 : 0.5) }} // Set a longer duration for the first animation
            onClick={handleCard1Click}
          >
     
          </motion.div>

          <motion.div
            className="Maincard" id='C2'
            variants={cardVariants}
            initial={{ scale: 1, opacity: 0 }} // Conditional initial state
            animate={
             card2State.moveDown
                ? 'moveDownCard2'
                : card2State.moveToCenter
                ? 'moveToCenterCard2'
                : 'initial'
            }
            transition={{ duration:  (card1State.moveDown ? 0.8 : 0.5) }}// Keep other cards as is
            onClick={handleCard2Click}
          >
   
          </motion.div>

          <motion.div
            className="Maincard" id='C3'
            variants={cardVariants}
            initial={{ scale: 1, opacity: 0 }} // Conditional initial state
            animate={
             card3State.moveDown
                ? 'moveDownCard3'
                : card3State.moveToCenter
                ? 'moveToCenterCard3'
                : 'initial'
            }
            transition={{ duration:  (card1State.moveDown ? 0.8: 0.5) }}// Keep other cards as is
            onClick={handleCard3Click}
                  
                  >
           
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Events;
