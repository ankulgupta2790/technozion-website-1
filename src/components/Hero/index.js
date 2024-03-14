import React, { useRef, useState } from "react";
import kaladhvani from './kaladhvani.png';
import spreedate from './spreedates.png';
import SlideTrack from "../SlideTrack";
import './index.css';
import { useAuth } from "../../Context/AuthManager";
import Loader from "../Loader";
import { useEffect } from "react";

// add images here column wise
var images = [
    ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png",], // column 1
    ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png",], // column 2
    ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png",], // column 3
    ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png",], // column 4
    ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png",], // column 5
]

var mar = 10;
var imsz = 264;
const COLSZ = mar + imsz;
let traceback = 0;

var ref;
const Hero = () => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.time("im");
        Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
            console.log('images finished loading');
            setLoading(false);
        });
    }, []);

    const [size, setSize] = useState('transparent 5%, rgba(0, 0, 0) 30vh');
    const {user} = useAuth();

    let width = window.innerWidth - mar;
    let numCols = Math.max(3, Math.ceil(width / COLSZ));
    let colsz = width / numCols;
    document.querySelector(":root").style.setProperty('--imsz', colsz - mar + 'px');


    const updateSpotlight = (e) => {
        let x = ((e.pageX / window.innerWidth) * 100).toFixed(0);
        let y = ((e.pageY / window.innerHeight) * 100).toFixed(0);

        if (ref) ref.style.background = `radial-gradient(circle at ${x}% ${y}%, ${size}`
    };
    function play(e) {
        let myAudio = document.querySelector("audio");
        myAudio.paused ? myAudio.play() : myAudio.pause();
        e.classList.toggle('pressed')
        let mystyle1=document.getElementsByClassName("myid1")[0];
        let mystyle2=document.getElementsByClassName("myid2")[0];
        console.log(mystyle1.classList);
        console.log(mystyle2.classList);
        mystyle1.classList.toggle('mystyle1');
        mystyle2.classList.toggle('mystyle2');
      }
    const setRef = childref => {
        ref = childref;
    }

    const mouseMove = (e) => {
        if(traceback) clearInterval(traceback);
        traceback = 0;
        updateSpotlight(e);
    }
    const mouseLeave = (e) => {
        if (!ref) return;
        let s = ref.style.background;
        let x = parseInt(s.substring(26));
        let y = parseInt(s.substring(30));
        if(traceback) mouseMove(e);
        traceback = setInterval(() => {
            if(!ref) {
                clearInterval(traceback);
                return;
            }
            ref.style.background = `radial-gradient(circle at ${x}% ${y}%, ${size}`;
            x = x + (50 - x) / 100;
            y = y + (50 - y) / 100;
        }, 10)
    }

    
    
    return (
        <>
        {loading ? <Loader /> : ""}
        <div className="relative flex overflow-hidden mx-auto w-full"
            onMouseMove={(e) => {
                mouseMove(e);
            }}
            onMouseLeave={(e) => {
                mouseLeave(e);
            }}
        >
            {[...Array(numCols).keys()].map((k) => {
                return <SlideTrack key={k} forward={k % 2} images={images[k % images.length]} />
            })}

            <div
                ref={setRef}
                className="absolute h-full w-full top-0 left-0 spotlight opacity-95"
            >
            </div>

            <div className='heading1 flex flex-col justify-center items-center' style={{ 'background': 'transparent' }}>
                <div className="spree-title" style={{'padding' : '0 25px'}}>
                    <img src={spreedate} />
                </div>
                <div><img src={kaladhvani}></img></div>
                <h3>where the culture resonates</h3>
                <div className="main flex justify-center">
                <button className="btn35">

                    <span><a href={user ? "/register" : "/auth"}>Register</a></span>

                </button>
                </div>
             
            </div>

            <div className="eat"></div>    
        </div>
        </>
    )
}

export default Hero;