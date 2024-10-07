import React, { useRef, useEffect, useState } from "react";
import './about.css';

function AboutCard({ content, image, imgToRight, title }) {
  return (
    <div className="about-container mt-20">
      <div className={`flex flex-col mx-4 md:mx-10 mt-10 flex-wrap justify-center items-center`}>
        {/* <h1 className="main-container flex-[100%] text-center text-4xl font-bold uppercase bg-gradient-to-r from-[#020928] to-[#F7CA17] inline-block text-transparent bg-clip-text">
          {title}
        </h1> */}

        {/* about_us div - it will appear above the card div */}
        <div className="about_us w-full text-center">
        </div>

        {/* card div - it will appear below the about_us div */}
        <div className="card text-black p-10 rounded-md w-full">
          <div className="border z-10 flex justify-center items-center duration-700 flex-col sm:flex-row">
            {/* Uncomment this if you need to display an image */}
            {/* <div className="sm:w-[100%] md:w-[45%] flex justify-center items-center">
              <img className="sm:w-[330px] md:w-[590px] max-w-full rounded-md" src={image} alt="themelogo" />
            </div> */}
            <div className="theme-content sm:w-[100%] md:w-[45%] text-md space-x-9">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
