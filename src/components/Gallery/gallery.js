import React, { useEffect, useRef } from 'react';
import { WebCanvas } from "../bg_animation/bg_animate";
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/webpack';
import gallery from "./gallery.pdf";
import './gallery.css';

const pdfjsVersion = "2.12.313"; // Replace with your installed version if necessary
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsVersion}/pdf.worker.min.js`;

export const Gallery = () => {
    const pdfRef = useRef(null);
    const scaleRef = useRef(1); // To keep track of the current scale
    const lastDistanceRef = useRef(0); // To track the last distance between fingers

    useEffect(() => {
        const loadingTask = getDocument(gallery);
        loadingTask.promise.then((pdf) => {
            const totalPages = pdf.numPages;
            const pdfContainer = pdfRef.current;

            for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
                pdf.getPage(pageNum).then((page) => {
                    const scale = window.innerWidth / page.getViewport({ scale: 1 }).width; // Initial scale
                    const viewport = page.getViewport({ scale });
                    
                    // Create a canvas for each page
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    canvas.width = viewport.width;
                    canvas.height = viewport.height;

                    // Render the PDF page into the canvas context
                    const renderContext = {
                        canvasContext: context,
                        viewport: viewport,
                    };
                    page.render(renderContext);

                    // Append the canvas to the pdfContainer
                    pdfContainer.appendChild(canvas);
                });
            }
        }).catch((error) => {
            console.error("Error loading PDF: ", error);
        });
    }, []);

    // Function to handle pinch to zoom
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
            
            // Calculate scale factor
            if (lastDistanceRef.current > 0) {
                const scaleFactor = distance / lastDistanceRef.current;
                scaleRef.current *= scaleFactor;
                lastDistanceRef.current = distance;
                updateCanvasScale(); // Update the canvas scale
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

            // Set new dimensions
            canvas.width = originalWidth * scaleRef.current;
            canvas.height = originalHeight * scaleRef.current;

            // Re-render the PDF page with the new scale
            const renderContext = {
                canvasContext: context,
                viewport: {
                    width: originalWidth * scaleRef.current,
                    height: originalHeight * scaleRef.current,
                    scale: scaleRef.current,
                },
            };
            // You may need to re-render the pages here if you save the page data
        }
    };

    return (
        <div className="centered-container">
            <div className="gallery-canvas">
                <WebCanvas />
            </div>
            <div 
                className="pdf-container" 
                ref={pdfRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                {/* Canvas elements will be appended here */}
            </div>
        </div>
    );
};
