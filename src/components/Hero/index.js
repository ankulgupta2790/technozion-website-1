import React, { useEffect, useState } from "react";
import './index.css';
import { WebCanvas } from "../bg_animation/bg_animate";
import tzlogo_with_date from "./tzlogo_with_date.png";

// Countdown Component
const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isTimeUp, setIsTimeUp] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = targetDate - now;
            if (diff < 0) {
                clearInterval(interval);
                setIsTimeUp(true);  // Mark timer as finished
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    if (isTimeUp) {
        return null; // Hide the countdown clock when the time is up
    }

    return (
        <div className="countdown-container">
            <div className="countdown-clock">
                <div className="time-box">
                    <span>{timeLeft.days}</span>
                    <span className="time-label">Days</span>
                </div>
                <div className="time-box">
                    <span>{timeLeft.hours}</span>
                    <span className="time-label">Hours</span>
                </div>
                <div className="time-box">
                    <span>{timeLeft.minutes}</span>
                    <span className="time-label">Minutes</span>
                </div>
                <div className="time-box">
                    <span>{timeLeft.seconds}</span>
                    <span className="time-label">Seconds</span>
                </div>
            </div>
        </div>
    );
};

const Hero = () => {
    // Set the target date and time for IST (Indian Standard Time)
    const targetDate = new Date("2024-11-08T10:30:00Z"); // This is 00:00:00 IST on November 8, 2024

    return (
        <div>
            <div className="relative flex overflow-hidden mx-auto w-full">
                <WebCanvas />
                <div className="absolute h-full w-full top-0 left-0 spotlight opacity-95"></div>

                <div className='heading1 flex flex-col justify-center items-center' style={{ 'background': 'transparent' }}>
                    <div className="main-logo"> 
                        <img src={tzlogo_with_date} alt="TZ Logo" />
                    </div>
                    {/* Countdown Clock */}
                    <CountdownTimer targetDate={targetDate} />
                </div>
            </div>
        </div>
    );
};

export default Hero;
