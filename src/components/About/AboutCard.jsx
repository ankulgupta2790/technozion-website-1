import React from 'react';
import './about.css';

function AboutCard({ content, image, imgToRight, title }) {
  return (
    <div className="about-container">
      <div className={`flex flex-row-reverse mx-10 mt-10 min-h-screen flex-wrap justify-center items-center`}>
        <h1 className="flex-[100%] text-center text-4xl font-bold uppercase bg-gradient-to-r from-[#FFFFFF] to-[#F7CA17] inline-block text-transparent bg-clip-text">
          {title}
        </h1>
        <div className="card text-black hover:text-white p-10 rounded-md flex flex-wrap">
          <div className="z-10 flex justify-center items-center duration-700">
            <div className="sm:w-[100%] md:w-[45%] flex justify-center items-center">
              <img className="sm:w-[330px] rounded-md lg:w-[590px] max-w-[300px]" src={image} alt="themelogo" />
            </div>
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
