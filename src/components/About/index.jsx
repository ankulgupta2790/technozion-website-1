import React from 'react';
import './about.css';
import logo1 from './logo1.png';
import AboutCard from './AboutCard';

export const About = () => {
  return (
    <div className="">
      <div className="w-full p-4 bg-gradient-to-t to-black text-white">
        <AboutCard 
          image={logo1} 
          imgToRight={true} 
          title="About Technozion" 
          content="Technozion, NIT Warangal's annual technical festival, started as a platform for students to showcase their technical skills and innovations. Now, after many successful editions, it has become one of the most anticipated technical fests in the country, attracting participants from various institutions. Throughout its history, Technozion has hosted renowned speakers and experts, providing valuable insights and inspiration to attendees. The festival features various competitions, workshops, and exhibitions, creating a vibrant atmosphere of learning and collaboration."
        />
      </div>
    </div>
  );
};
