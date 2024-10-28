// import React from 'react';
import './about.css';
import logo1 from './logo1.png';
import AboutCard from './AboutCard';
import { WebCanvas } from '../bg_animation/bg_animate.js';
import youtubeLogo from './youtube-logo.png';
export const About = () => {
  return (
    <div className="relative">
      {/* Add WebCanvas here with specific class */}
      <div className="about-canvas">
        <WebCanvas /> {/* Position the canvas behind the content */}
      </div>

      <div className="about-container w-full z-2 relative p-4 text-white">
        <AboutCard
          image={logo1}
          imgToRight={true}
          title="About"
          content="Technozion, NIT Warangal's annual technical festival, started as a platform for students to showcase their technical skills and innovations. Now, after many successful editions, it has become one of the most anticipated technical fests in the country, attracting participants from various institutions. Throughout its history, Technozion has hosted renowned speakers and experts, providing valuable insights and inspiration to attendees. The festival features various competitions, workshops, and exhibitions, creating a vibrant atmosphere of learning and collaboration."
        />
        <div className="youtube-links">
          <a href="https://www.youtube.com/watch?v=LJLtHr0kcrA&t=1s" target="_blank" rel="noopener noreferrer" className="youtube-link">
            <img src={youtubeLogo} alt="YouTube" className="youtube-icon" /> &nbsp;What is Technozion ?
          </a>
          <a href="https://www.youtube.com/watch?v=1T_d1YoCWuA" target="_blank" rel="noopener noreferrer" className="youtube-link">
            <img src={youtubeLogo} alt="YouTube" className="youtube-icon" /> &nbsp;Events Technozion'24
          </a>
        </div>
      </div>
    </div>
  );
}; 
