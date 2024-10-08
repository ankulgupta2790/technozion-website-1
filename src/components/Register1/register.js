import React from 'react';
import './register.css'; // Import the CSS for styling
import { WebCanvas } from "../bg_animation/bg_animate";
import img_logo from './tzcomingsoon.png';

export const Register = () => {
    return (
        <div className="centered-container">
            <div className="register-canvas">
                  <WebCanvas /> 
            </div>
            <div className="image-container"> {/* New div wrapping the image */}
                <img src={img_logo} alt="Coming Soon" /> {/* Added alt for accessibility */}
            </div>
        </div>
    );
};

