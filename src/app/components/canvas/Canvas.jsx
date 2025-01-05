'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import canvasImages from '../../../../public/images/canvasImages'

gsap.registerPlugin(ScrollTrigger);

const Canvas = () => {
    const [index, setIndex] = useState({ value: 0 });
    const canvasRef = useRef(null);
    const canvasDiv = useRef(null);

    useGSAP(() => {
        gsap.to(index, {
            value: 1146,
            duration: 10, // Reduced duration for faster animation
            ease: "linear",
            scrollTrigger: {
                trigger: canvasDiv.current,
                markers: true,
                start: "top top",
                end: `+=${canvasImages.length}%`,
                scrub: true,
                pin: true,
            },
            onUpdate: () => {
                setIndex({ value: Math.round(index.value) });
            },
        });
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const resizeCanvas = () => {
            const aspectRatio = image.width / image.height;
            if (window.innerWidth > 768) { // Assuming 768px as the breakpoint for larger screens
            canvas.width = window.innerWidth / 2; // Smaller size for larger screens
            canvas.height = (window.innerWidth / 2) / aspectRatio;
            } else {
            canvas.width = window.innerWidth; // Full width for smaller screens
            canvas.height = window.innerWidth / aspectRatio;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        };
        const image = new Image();
       
        image.onload = () => {
            resizeCanvas();
        };
        image.src = `/newImages/frame_${String(index.value + 1).padStart(4, '0')}.jpeg`;

        window.addEventListener('resize', resizeCanvas);
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [index]);

    return (
        <div ref={canvasDiv} className='bg-slate-700 h-screen text-cyan-50 p-2 flex items-center justify-center'>
            <canvas ref={canvasRef} className='block mx-auto fixed h-screen w-screen'></canvas>
        </div>
    );
}

export default Canvas;