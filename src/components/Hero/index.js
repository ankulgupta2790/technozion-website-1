import React, { useRef, useEffect, useState } from "react";
import './index.css';
import Loader from "../Loader";
import main_logo_removebg from "./main_logo-removebg.png";
import tz_logo from "./tz_logo.png";
import ring1 from "./ring1.png";
import ring2 from "./ring2.png";

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
            {/* <p className="stay-tuned">Coming Soon...</p> */}
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

    const WebCanvas = () => {
        const canvasRef = useRef(null);
        const mousePos = useRef({ x: 0, y: 0 });
        const [ctx, setCtx] = useState(null);
        const [points, setPoints] = useState([]);

        useEffect(() => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const context = canvas.getContext('2d');
            setCtx(context);

            // Set canvas dimensions
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const handleResize = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                setPoints([]); // Clear points
                initPoints(); // Reinitialize points
            };

            const initPoints = () => {
                const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const screenArea = screenWidth * screenHeight;
    
    // Set the number of points based on screen area
    const baseArea = 1000000;  // Set a base area, e.g., 1000000 pixels (1000x1000)
               const numPoints = Math.floor((screenArea / baseArea) * 500);
                const newPoints = [];
                for (let i = 0; i < numPoints; i++) {
                    newPoints.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        vx: (Math.random() - 0.5) * 1.5, // Random speed
                        vy: (Math.random() - 0.5) * 1.5,
                        isFollowing: false, // Flag to track if the point is following the cursor
                    });
                }
                setPoints(newPoints);
            };

            window.addEventListener('resize', handleResize);
            initPoints();

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

        const drawLines = (pointA, pointB) => {
            const dist = Math.sqrt(
                Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2)
            );
            if (dist < 100) {  // Distance threshold for drawing lines
                ctx.beginPath();
                ctx.moveTo(pointA.x, pointA.y);
                ctx.lineTo(pointB.x, pointB.y);
                ctx.strokeStyle = `rgba(173, 216, 230, ${1 - dist / 100})`; // Light blue color
                ctx.lineWidth = 0.5; // Thinner lines
                ctx.stroke();
            }
        };

        const movePoints = () => {
            points.forEach(point => {
                if (point.isFollowing) {
                    // Move point towards the cursor with increased speed
                    point.x += (mousePos.current.x - point.x) * 0.15;
                    point.y += (mousePos.current.y - point.y) * 0.15;
                } else {
                    point.x += point.vx;
                    point.y += point.vy;

                    // Bounce off edges
                    if (point.x > canvasRef.current.width || point.x < 0) point.vx *= -1;
                    if (point.y > canvasRef.current.height || point.y < 0) point.vy *= -1;
                }
            });
        };

        useEffect(() => {
            const animate = () => {
                const canvas = canvasRef.current;
                if (ctx && points.length > 0 && canvas) { // Check for null
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    movePoints();

                    // Draw lines between nearby points
                    points.forEach((pointA, index) => {
                        points.forEach((pointB, i) => {
                            if (i > index) {
                                drawLines(pointA, pointB);
                            }
                        });
                    });
                    window.requestAnimationFrame(animate);
                }
            };
            window.requestAnimationFrame(animate);
        }, [ctx, points]);

        // Track mouse movement
        const handleMouseMove = (e) => {
            mousePos.current.x = e.clientX;
            mousePos.current.y = e.clientY;
             // console.log("inside mouse function");
            points.forEach(point => {
                const dist = Math.sqrt(
                    Math.pow(point.x - mousePos.current.x, 2) + Math.pow(point.y - mousePos.current.y, 2)
                );
                point.isFollowing = dist < 50; // Set isFollowing to true if cursor is close
            });
        };
   
        return <canvas ref={canvasRef} onMouseMove={handleMouseMove}></canvas>;
    };

    return (
        <div>
            {loading && <Loader />}
            <div className="relative flex overflow-hidden mx-auto w-full">
                <WebCanvas />
                <div className="absolute h-full w-full top-0 left-0 spotlight opacity-95"></div>

                <div className='heading1 flex flex-col justify-center items-center' style={{ 'background': 'transparent' }}>
                    {/* <div className="spree-title" style={{ 'padding': '0 25px' }}>
                        <img src={main_logo_removebg} alt="Spree dates" />
                    </div> */}

                    {/* Add the rotating logo here */}
                    <div className="rotating-logo-container">
                        <div className="static-part">
                            <img src={tz_logo} alt="Static Logo Part" />
                        </div>
                        <div className="rotate-clockwise">
                            <img src={ring1} alt="Clockwise Rotating Part" />
                        </div>
                        <div className="rotate-counterclockwise">
                            <img src={ring2} alt="Counterclockwise Rotating Part" />
                        </div>
                    </div>

                    {/* New date display */}
                    <div className="event-date">
                        <span>Technozion'24</span>
                        <br></br>
                        <span>8th - 10th Nov</span>
                    </div>

                    {/* Countdown Clock */}
                    <CountdownTimer targetDate={targetDate} />
                </div>

                <div className="eat"></div>
            </div>
        </div>
    );
};

export default Hero;
