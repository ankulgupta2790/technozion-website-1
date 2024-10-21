// src/Card.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation and useNavigate
import './card.css';
import ResizeObserver from 'resize-observer-polyfill';
import { WebCanvas } from '../bg_animation/bg_animate'; // Import WebCanvas
import imgsrc from './tzcomingsoon.png';

const Card = () => {
    const location = useLocation(); // Extract data from navigation
    const navigate = useNavigate(); // For navigating back
    const { title, overview, rules, judging_criteria, imgsrc } = location.state || {}; // Update to overview, rules, judgingCriteria

    const [activeTab, setActiveTab] = useState('overview'); // Track the active tab

    // Handles navigation back to the previous view
    const handleBack = () => {
        navigate(-1); // Navigate back in browser history
    };

    // Renders the content of the active tab
    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div 
                    dangerouslySetInnerHTML={{ __html: overview }} 
                    />
                );
            case 'rules':
                return (
                    <div dangerouslySetInnerHTML={{ __html: rules }} />
                );
            case 'judging_criteria':
                return (
                    <div dangerouslySetInnerHTML={{ __html: judging_criteria }} />
                );
            default:
                return null;
        }
    };

    // Effect to set the logo height CSS variable
    useEffect(() => {
        const logoContainer = document.querySelector('.logo-container');

        const setLogoHeight = (entries) => {
            for (let entry of entries) {
                const logoHeight = entry.contentRect.height; // Get the new height of the logo container
                document.documentElement.style.setProperty('--logo-height', `${logoHeight}px`); // Set the variable
            }
        };

        const resizeObserver = new ResizeObserver(setLogoHeight); // Initialize ResizeObserver

        if (logoContainer) {
            resizeObserver.observe(logoContainer); // Start observing the logo container
        }

        // Clean up on unmount
        return () => {
            resizeObserver.disconnect(); // Stop observing when component unmounts
        };
    }, []);

    return (
        <div className="card-container">
            <div className='web-canvas'>
                <WebCanvas />
            </div>
            <div className={`event_card wrap animate pop active`}> {/* Always active */} 
                <div className="text">
                    <div className="logo-cardnav-container"> {/* Flex container */} 
                        <div className="logo-container">
                            <img src={imgsrc || imgsrc} alt="Logo" className="cnt-logo" />
                        </div>
                        <div className="content-container"> {/* Content section */}
                            <div className="cardnav">
                                <button onClick={() => setActiveTab('overview')}>Overview</button>
                                {rules && (
                                    <button onClick={() => setActiveTab('rules')}>Rules</button>
                                )}
                                {judging_criteria && (
                                    <button onClick={() => setActiveTab('judging_criteria')}>Judging Criteria</button>
                                )}
                                <button className="back-button" onClick={handleBack}>Back</button> {/* Navigate back */}
                            </div>
                            <div className="content">
                                {renderContent()}
                            </div>
                            <div className="register"><button className="register-button">Register</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
