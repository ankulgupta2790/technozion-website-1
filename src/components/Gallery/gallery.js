import React from 'react';
import './gallery.css'; // Import the CSS for styling
import { WebCanvas } from "../bg_animation/bg_animate";
import img_logo from './tzcomingsoon.png';

export const Gallery = () => {
    return (
        <div className="centered-container">
            <div className="gallery-canvas">
                <WebCanvas /> {/* Position the canvas behind the content */}
            </div>
            <div className="image-container"> {/* New div wrapping the image */}
                <img src={img_logo} alt="Coming Soon" /> {/* Added alt for accessibility */}
            </div>
        </div>
    );
};
