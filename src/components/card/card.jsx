import React, { useState, useEffect } from 'react';
import './card.css'; // Import the CSS file
import ResizeObserver from 'resize-observer-polyfill';

const Card = ({ title, description, rules, contact, imgSrc }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [activeTab, setActiveTab] = useState('description'); // Track the active tab

    // Toggles between clicked and unclicked states
    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    // Handles navigation back to the first view
    const handleBack = () => {
        setIsClicked(false);
    };

    // Renders the content of the active tab
    const renderContent = () => {
        switch (activeTab) {
            case 'description':
                return <p>{description}</p>;
            // case 'rules':
            //     return <p>{rules}</p>;
            case 'contact':
                return <p>{contact}</p>;
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
        <div className={`event_card wrap animate pop ${isClicked ? 'active' : ''}`}>
            <div className="overlay">
                <div
                    className="image-content animate slide delay-5"
                    style={{ backgroundImage: `url(${imgSrc})` }} // Use imgSrc for background image
                />
                <div className="dots animate">
                    <button onClick={handleClick}>Read!</button>
                </div>
            </div>
            {isClicked && (
                <div className="text">
                    <div className="logo-cardnav-container"> {/* Flex container */}
                        <div className="logo-container"> {/* Logo section */}
                            <img src={imgSrc} alt="Logo" className="cnt-logo" /> {/* Use imgSrc for the logo */}
                        </div>
                        <div className="content-container"> {/* Content section */}
                            <div className="cardnav">
                                {/* New Back Button */}
                                <button onClick={() => setActiveTab('description')}>Description</button>
                                {/* <button onClick={() => setActiveTab('rules')}>Rules</button> */}
                                <button onClick={() => setActiveTab('contact')}>Contact</button>
                                <button className="back-button" onClick={handleBack}>Back</button>
                            </div>
                            <div className="content">
                                {renderContent()}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
