import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: for styling if you want to add CSS
import Carousel from '../carousel/carousel';

 export function Displayevents() {
  return (
    <div className="coming-soon">
      {/* <h1>Coming soon...</h1> */}
      <Carousel/>
    </div>
  );
}