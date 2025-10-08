"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ComingSoon() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const lineRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
            containerRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.6 }
        )
            .fromTo(
                titleRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.2"
            )
            .fromTo(
                lineRef.current,
                { scaleX: 0, opacity: 0, transformOrigin: "left" },
                { scaleX: 1, opacity: 1, duration: 0.8 },
                "-=0.4"
            )
            .fromTo(
                subtitleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.3"
            )
            .fromTo(
                textRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1.2 },
                "-=0.5"
            );
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/work/sr.jpg')", // replace with your own image path
                }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 text-white">
                <h1
                    ref={titleRef}
                    className="text-5xl md:text-7xl font-semibold tracking-wide"
                >
                    Coming Soon
                </h1>

                <div
                    ref={lineRef}
                    className="mt-6 w-32 h-[3px] bg-red-500 rounded mx-auto"
                ></div>

                <p
                    ref={subtitleRef}
                    className="text-lg md:text-2xl mt-6 font-light text-gray-200"
                >
                    Your next big idea is under construction
                </p>
            </div>
        </section>
    );
}
