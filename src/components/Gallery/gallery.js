import React, { useEffect, useRef, useState } from 'react';
import { WebCanvas } from "../bg_animation/bg_animate";
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/webpack';
import gallery from "./gallery.pdf";
import { Loader } from '../Loader/index.js'; // Update with the path to your loader component
import './gallery.css';

const pdfjsVersion = "2.12.313"; // Replace with your installed version if necessary
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsVersion}/pdf.worker.min.js`;

export const Gallery = () => {
    const pdfRef = useRef(null);
    const scaleRef = useRef(1); // Track the current scale
    const lastDistanceRef = useRef(0); // Track the last distance between fingers
    const [loading, setLoading] = useState(true); // Loading state
    const [loadedPages, setLoadedPages] = useState(0); // Track number of loaded pages

    useEffect(() => {
        const loadPDF = async () => {
            try {
                const pdf = await getDocument(gallery).promise;
                const totalPages = pdf.numPages;
                const pdfContainer = pdfRef.current;
                pdfContainer.innerHTML = ''; // Clear the container

                for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
                    const page = await pdf.getPage(pageNum);
                    const scale = window.innerWidth / page.getViewport({ scale: 1 }).width;
                    const viewport = page.getViewport({ scale });

                    // Create and configure canvas
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    canvas.width = viewport.width;
                    canvas.height = viewport.height;

                    // Render PDF page into canvas
                    await page.render({
                        canvasContext: context,
                        viewport,
                    }).promise;

                    // Append the canvas to the container in order
                    pdfContainer.appendChild(canvas);

                    // Track page loading progress
                    setLoadedPages((prev) => prev + 1);
                }
            } catch (error) {
                console.error("Error loading PDF:", error);
            }
        };

        loadPDF();
    }, []);

    useEffect(() => {
        if (loadedPages > 0 && loadedPages === pdfRef.current?.childElementCount) {
            setLoading(false); // Hide loader once all pages are loaded
        }
    }, [loadedPages]);

    const handleTouchStart = (e) => {
        if (e.touches.length === 2) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            lastDistanceRef.current = Math.sqrt(dx * dx + dy * dy);
        }
    };

    const handleTouchMove = (e) => {
        if (e.touches.length === 2) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (lastDistanceRef.current > 0) {
                const scaleFactor = distance / lastDistanceRef.current;
                scaleRef.current *= scaleFactor;
                lastDistanceRef.current = distance;
                updateCanvasScale();
            }
        }
    };

    const updateCanvasScale = () => {
        const pdfContainer = pdfRef.current;
        const canvases = pdfContainer.getElementsByTagName('canvas');

        for (let canvas of canvases) {
            const context = canvas.getContext('2d');
            const originalWidth = canvas.width;
            const originalHeight = canvas.height;

            // Set new dimensions for zoom
            canvas.width = originalWidth * scaleRef.current;
            canvas.height = originalHeight * scaleRef.current;
        }
    };

    return (
        <div className="centered-container">
            <div className="gallery-canvas">
                <WebCanvas />
            </div>
            {loading && <Loader />} {/* Show loader until all PDF pages are loaded */}
            <div 
                className={`pdf-container ${loading ? 'hidden' : ''}`} 
                ref={pdfRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                {/* Canvas elements will be appended here */}
            </div>
        </div>
    );
};
