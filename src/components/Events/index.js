import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WebCanvas } from '../bg_animation/bg_animate';
import { useNavigate } from 'react-router-dom';
import Event from './Event.png';
import Portal from './newPortal.png';
import Flame from './Flame.png';
import './index.css';

const Events = () => {
  const navigate = useNavigate();

  const [card1State, setCard1State] = useState({ moveToCenter: false, moveDown: false });
  const [card2State, setCard2State] = useState({ moveToCenter: false, moveDown: false });
  const [card3State, setCard3State] = useState({ moveToCenter: false, moveDown: false });
  const [flamestate, setflamestate] = useState(true);

  const screenWidth = window.innerWidth;
  const X1f = (screenWidth < 768) ? '0vw' : '25vw';
  const X2f = (screenWidth < 768) ? '0vw' : '-25vw';
  const D1f = (screenWidth < 768) ? '0vw' : '40vw';
  const D2f = (screenWidth < 768) ? '0vw' : '-40vw';

  const cardVariants = {
    initial: { scale: 1, opacity: 1 },
    floating: {
      y: ["0%", "-10%", "0%"], // Moves up and down
      transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
    },
    moveToCenterCard1: { scale: 2, x: X1f, y: '-20vh', opacity: 1, rotateY: 360 },
    moveDownCard1: { scale: 0, y: '100vh', x: D1f, opacity: 0 },
    moveToCenterCard2: { scale: 2, x: '0', y: '-20vh', opacity: 1, rotateY: 360 },
    moveDownCard2: { scale: 0, y: '100vh', opacity: 0 },
    moveToCenterCard3: { scale: 2, x: X2f, y: '-20vh', opacity: 1, rotateY: 360 },
    moveDownCard3: { scale: 0, y: '100vh', x: D2f, opacity: 0 },
  };

  const handleCard1Click = () => {
    setCard1State({ moveToCenter: true, moveDown: false });
    setTimeout(() => {
      setCard1State({ moveToCenter: false, moveDown: true });
      setflamestate(true);
    }, 800);
    setTimeout(() => {
      navigate('/Index', { state: { dataSource: 'clubevents' } });
    }, 1600);
  };

  const handleCard2Click = () => {
    setCard2State({ moveToCenter: true, moveDown: false });
    setTimeout(() => {
      setCard2State({ moveToCenter: false, moveDown: true });
      setflamestate(true);
    }, 800);
    setTimeout(() => {
      navigate('/Index', { state: { dataSource: 'spotlight' } });
    }, 1600);
  };

  const handleCard3Click = () => {
    setCard3State({ moveToCenter: true, moveDown: false });
    setTimeout(() => {
      setCard3State({ moveToCenter: false, moveDown: true });
      setflamestate(true);
    }, 800);
    setTimeout(() => {
      navigate('/Index', { state: { dataSource: 'societies' } });
    }, 1600);
  };

  return (
    <>
      <div className='web-canvas'>
        <WebCanvas />
      </div>
      <div className="events-container">
        <div className="EventImg">
          <img src={Event} alt="Event" />
        </div>
        <div className="Portal">
          <img src={Portal} alt="Portal" className="portal-img" />
          <motion.img 
            src={Flame}
            alt="Flame"
            className="Flame-img" 
            initial={{ opacity: 0 }}
            animate={{ opacity: flamestate ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <motion.div className="Maincards-container"
          initial={{ y: "100vh", opacity: 0, scale: 0, x: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          onAnimationComplete={() => setflamestate(false)}
        >
          <motion.div
            className="Maincard" id='C1'
            variants={cardVariants}
            initial="initial"
            animate={
              card1State.moveDown
                ? 'moveDownCard1'
                : card1State.moveToCenter
                ? 'moveToCenterCard1'
                : 'floating'
            }
            transition={{ duration: (card1State.moveDown ? 0.8 : 0.5) }}
            onClick={handleCard1Click}
          />

          <motion.div
            className="Maincard" id='C2'
            variants={cardVariants}
            initial="initial"
            animate={
              card2State.moveDown
                ? 'moveDownCard2'
                : card2State.moveToCenter
                ? 'moveToCenterCard2'
                : 'floating'
            }
            transition={{ duration: (card1State.moveDown ? 0.8 : 0.5) }}
            onClick={handleCard2Click}
          />

          <motion.div
            className="Maincard" id='C3'
            variants={cardVariants}
            initial="initial"
            animate={
              card3State.moveDown
                ? 'moveDownCard3'
                : card3State.moveToCenter
                ? 'moveToCenterCard3'
                : 'floating'
            }
            transition={{ duration: (card1State.moveDown ? 0.8 : 0.5) }}
            onClick={handleCard3Click}
          />
        </motion.div>
      </div>
    </>
  );
};

export default Events;
