import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WebCanvas } from '../bg_animation/bg_animate';
import { useNavigate } from 'react-router-dom';
import Event from './Event.png';
import Portal from './Portal.png';
import Flame from './Flame.png';
import Club from './4.png';
import Dept from './2.png';
import Spotlight from './3.png'
import './index.css'; // Assuming you have this file for styling

const Events = () => {
  const navigate = useNavigate();
  
  // Updated states
  const [card1State, setCard1State] = useState({ moveToCenter: false, moveDown: false });
  const [card2State, setCard2State] = useState({ moveToCenter: false, moveDown: false });
  const [card3State, setCard3State] = useState({ moveToCenter: false, moveDown: false });
  const [flamestate, setflamestate] = useState(false);

  // New state for initial animation (from bottom to initial position)
  const [initialLoad, setInitialLoad] = useState(true);

  // States to hold data fetched from JSON files
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  // UseEffect to disable initial load state after the animation is done
  useEffect(() => {
    fetch('/dataJSON/societies.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData1(data);
      })
      .catch(error => console.error('Error loading data1:', error));
  
    fetch('/dataJSON/spotlight.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData2(data);
      })
      .catch(error => console.error('Error loading data2:', error));
  
    fetch('/dataJSON/clubevents.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData3(data);
      })
      .catch(error => console.error('Error loading data3:', error));
  
    const timer = setTimeout(() => setInitialLoad(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  
  

  // Variants for card animations
  const screenWidth = window.innerWidth;

// Calculate X1f and X2f in vw (viewport width)
const X1f = (screenWidth < 768) ? '0vw' : '25vw'; // Set as '0vw' or '25vw' based on the condition
const X2f = (screenWidth < 768) ? '0vw' : '-25vw'; // Set as '0vw' or '-25vw' based on the condition
const x1f=(screenWidth < 768) ? 0 : 500; 
const x2f=(screenWidth < 768) ? 0 : -500; 
const cardVariants = {
  initial: { scale: 1, opacity: 1 },
  cardAppear1: { scale: 1, x: '0', y: '0', opacity: 1, rotateY: 0 },
  cardAppear2: { scale: 1, x: '0', y: '0', opacity: 1, rotateY: 0 },
  cardAppear3: { scale: 1, x: '0', y: '0', opacity: 1, rotateY: 0 },
  // Click animations
  moveToCenterCard1: { scale: 1.5, x: X1f, y: '-20vh', opacity: 1, rotateY: 360 },
  moveDownCard1: { scale: 0, y: '100vh', x: '40vh', opacity: 0 },
  moveToCenterCard2: { scale: 1.5, x: '0', y: '-20vh', opacity: 1, rotateY: 360 },
  moveDownCard2: { scale: 0, y: '100vh', opacity: 0 },
  moveToCenterCard3: { scale: 1.5, x: X2f, y: '-20vh', opacity: 1, rotateY: 360 },
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
      navigate('/displayevents', {state : {data: data1}});
    }, 1600);
  };

  const handleCard2Click = () => {
    setCard2State({ moveToCenter: true, moveDown: false });
    setTimeout(() => {
      setCard2State({ moveToCenter: false, moveDown: true });
      setflamestate(true);
    }, 800);
    setTimeout(() => {
      navigate('/displayevents', {state : {data: data2}});
    }, 1600);
  };

  const handleCard3Click = () => {
    setCard3State({ moveToCenter: true, moveDown: false });
    setTimeout(() => {
      setCard3State({ moveToCenter: false, moveDown: true });
      setflamestate(true);
    }, 800);
    setTimeout(() => {
      navigate('/displayevents', {state : {data: data3}});
    }, 1600);
  };

  return (
    <>
      <div className="web-canvas">
        <WebCanvas />
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
          animate={{ opacity: flamestate||initialLoad ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
        <div className="Maincards-container">
          <motion.div
            className="Maincard" id='C1'
            variants={cardVariants}
            initial={initialLoad ? { scale: 0, opacity: 0, x:x1f,y:400 } : { scale: 1, opacity: 0 }} // Conditional initial state
            animate={
              initialLoad
                ? 'cardAppear1'
                : card1State.moveDown
                ? 'moveDownCard1'
                : card1State.moveToCenter
                ? 'moveToCenterCard1'
                : 'initial'
            }
            transition={{ duration: initialLoad ? 1 : (card1State.moveDown ? 0.8 : 0.5) }} // Set a longer duration for the first animation
            onClick={handleCard1Click}
          >
          </motion.div>

          <motion.div
            className="Maincard" id='C2'
            variants={cardVariants}
            initial={initialLoad ? { scale: 0, opacity: 0,y:400 } : { scale: 1, opacity: 0 }} // Conditional initial state
            animate={
              initialLoad
                ? 'cardAppear2'
                : card2State.moveDown
                ? 'moveDownCard2'
                : card2State.moveToCenter
                ? 'moveToCenterCard2'
                : 'initial'
            }
            transition={{ duration: initialLoad ? 1 : (card1State.moveDown ? 0.8 : 0.5) }}// Keep other cards as is
            onClick={handleCard2Click}
          >
          </motion.div>

          <motion.div
            className="Maincard" id='C3'
            variants={cardVariants}
            initial={initialLoad ? { scale: 0, opacity: 0 ,x:x2f,y:400} : { scale: 1, opacity: 0 }} // Conditional initial state
            animate={
              initialLoad
                ? 'cardAppear3'
                : card3State.moveDown
                ? 'moveDownCard3'
                : card3State.moveToCenter
                ? 'moveToCenterCard3'
                : 'initial'
            }
            transition={{ duration: initialLoad ? 1 : (card1State.moveDown ? 0.8 : 0.5) }}// Keep other cards as is
            onClick={handleCard3Click}
                  
                  >
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Events;
