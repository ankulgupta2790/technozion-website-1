import React, { useRef, useEffect, useState } from "react";
import './index.css';
import Loader from "../Loader";
import main_logo_removebg from "./main_logo-removebg.png";
import tz_logo from "./finalDraft.png";
import ring1 from "./finalDraft_2.png";
import ring2 from "./finalDraft_3.png";
import main_logo from "./utd.png";
import { WebCanvas } from "../bg_animation/bg_animate";
import tzlogo_with_date from "./tzlogo_with_date.png";

// Countdown Component
const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = targetDate - now;
            if (diff < 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
    const [loading, setLoading] = useState(true);
    const targetDate = new Date("2024-11-08T12:00:00Z"); // Target date

    useEffect(() => {
        Promise.allSettled(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => {
            img.onload = img.onerror = resolve;
        })))
            .then(() => {
                console.log('Images finished loading');
                setLoading(false);
            });
    }, []);

    <WebCanvas/>

    const eventDateStyle = {
        color: '#16f6f3', // Changed text color to #16f6f3
        textShadow: `
            0 0 5px #16f6f3,    /* Inner glow */
            0 0 10px #16f6f3,   /* Outer glow */
            0 0 15px #16f6f3,   /* Light outer glow */
            0 0 20px #16f6f3,   /* Strong outer glow */
            0 0 25px #16f6f3;   /* Very strong outer glow */
        `,
    };

    return (
        <div>
            {loading && <Loader />}
            <div className="relative flex overflow-hidden mx-auto w-full">
                <WebCanvas />
                <div className="absolute h-full w-full top-0 left-0 spotlight opacity-95"></div>

                <div className='heading1 flex flex-col justify-center items-center' style={{ 'background': 'transparent' }}>
                    {/* Add the rotating logo here */}
                    {/* <div className="rotating-logo-container">
                        <div className="static-part">
                            <img src={tz_logo} alt="Static Logo Part" />
                        </div>
                        <div className="rotate-clockwise">
                            <img src={ring1} alt="Clockwise Rotating Part" />
                        </div>
                        <div className="rotate-counterclockwise">
                            <img src={ring2} alt="Counterclockwise Rotating Part" />
                        </div>
                    </div> */}

                    {/* New date display */}
                    {/* <div className="event-date" style={eventDateStyle}>
                        <span>Technozion'24</span>
                        <br />
                        <span>8th - 10th Nov</span>
                    </div> */}
                    <div className="main-logo"> 
                        <img src={tzlogo_with_date}></img>
                    </div>
                    {/* Countdown Clock */}
                    <CountdownTimer targetDate={targetDate} />
                </div>
            </div>
        </div>
    );
};

export default Hero;
