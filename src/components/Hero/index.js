import React, { useRef, useEffect, useState } from "react";
import './index.css';
import Loader from "../Loader";
import main_logo_removebg from "./main_logo-removebg.png";

// Countdown Component
const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = targetDate - now;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });

            if (diff < 0) {
                clearInterval(interval);
                setTimeLeft({});
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="countdown-container">
            <p className="stay-tuned">Coming Soon...</p>
            <div className="countdown-clock">
                <div className="time-box">
                    <span>{timeLeft.days !== undefined ? timeLeft.days : 0}</span>
                    <span className="time-label">Days</span>
                </div>
                <div className="time-box">
                    <span>{timeLeft.hours !== undefined ? timeLeft.hours : 0}</span>
                    <span className="time-label">Hours</span>
                </div>
                <div className="time-box">
                    <span>{timeLeft.minutes !== undefined ? timeLeft.minutes : 0}</span>
                    <span className="time-label">Minutes</span>
                </div>
                <div className="time-box">
                    <span>{timeLeft.seconds !== undefined ? timeLeft.seconds : 0}</span>
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
        Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => {
            img.onload = img.onerror = resolve;
        })))
            .then(() => {
                console.log('Images finished loading');
                setLoading(false);
            }).catch(() => {
                console.log('Some images failed to load');
            });
    }, []);

    const WebCanvas = () => {
        const canvasRef = useRef(null);
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
                initPoints();
            };

            const initPoints = () => {
                const screenWidth = window.innerWidth;
                const numPoints = screenWidth < 768 ? 300 : 700; // 300 points for small screens, 700 for larger screens

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

        const movePoints = (mouseX, mouseY) => {
            points.forEach(point => {
                if (point.isFollowing) {
                    // Move point towards the cursor with increased speed
                    point.x += (mouseX - point.x) * 0.15; // Follow cursor position faster
                    point.y += (mouseY - point.y) * 0.15;
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
                const canvas = canvasRef.current; // Get the current canvas reference
                if (ctx && points.length > 0 && canvas) { // Check for null
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    const mouseX = canvas.mouseX;
                    const mouseY = canvas.mouseY;
                    movePoints(mouseX, mouseY);

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
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            canvasRef.current.mouseX = mouseX; // Store mouse position
            canvasRef.current.mouseY = mouseY;

            points.forEach(point => {
                const dist = Math.sqrt(
                    Math.pow(point.x - mouseX, 2) + Math.pow(point.y - mouseY, 2)
                );
                point.isFollowing = dist < 30; // Set isFollowing to true if cursor is close
            });
        };

        return <canvas ref={canvasRef} onMouseMove={handleMouseMove}></canvas>;
    };

    return (
        <div>
            {loading ? <Loader /> : ""}
            <div className="relative flex overflow-hidden mx-auto w-full">
                <WebCanvas />
                <div className="absolute h-full w-full top-0 left-0 spotlight opacity-95"></div>

                <div className='heading1 flex flex-col justify-center items-center' style={{ 'background': 'transparent' }}>
                    <div className="spree-title" style={{ 'padding': '0 25px' }}>
                        <img src={main_logo_removebg} alt="Spree dates" />
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
