"use client"
import React from "react";
import { motion } from "framer-motion";

// Function to check for overlapping
const isOverlapping = (newBox, existingBoxes) => {
    return existingBoxes.some((box) => {
        return !(
            newBox.left + newBox.size < box.left || // New box is to the left
            newBox.left > box.left + box.size || // New box is to the right
            newBox.top + newBox.size < box.top || // New box is above
            newBox.top > box.top + box.size // New box is below
        );
    });
};

// Function to generate non-overlapping boxes
const generateNonOverlappingBoxes = (count, containerWidth, containerHeight) => {
    const boxes = [];
    let attempts = 0;

    while (boxes.length < count && attempts < 1000) {
        const size = Math.floor(Math.random() * 80) + 90; // Box size between 50px and 130px
        const top = Math.random() * (containerHeight - size);
        const left = Math.random() * (containerWidth - size);

        const newBox = { size, top, left };

        if (!isOverlapping(newBox, boxes)) {
            boxes.push(newBox);
        }
        attempts++;
    }

    return boxes;
};

// Updated function name: Hero
const Hero = () => {
    const containerWidth = 800; // Width of the hero section container
    const containerHeight = 600; // Height of the hero section container
    const boxes = generateNonOverlappingBoxes(6, containerWidth, containerHeight);

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
            {/* Animated Squares */}
            {boxes.map((box, index) => (
                <motion.div
                    key={index}
                    className="absolute bg-red-200 rounded-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.8, scale: 1 }}
                    transition={{
                        duration: 1.5,
                        delay: index * 0.2, // Staggered delay
                        ease: "easeOut",
                    }}
                    style={{
                        width: `${box.size}px`,
                        height: `${box.size}px`,
                        top: `${box.top}px`,
                        left: `${box.left}px`,
                    }}
                ></motion.div>
            ))}

            {/* Centered Text Content */}
            <div className="relative text-center">
                <div className="relative inline-block">
                    <h1 className="text-3xl md:text-6xl font-medium text-black inline-block">
                        We build you Dream
                    </h1>
                    {/* Image Tag Positioned Top-Right */}
                    <img
                        src="/logo.svg" // Replace with your image URL
                        alt="Top Right Logo"
                        className="absolute -top-8 -right-10 w-14 h-14 "
                    />
                </div>
                <h1 className="mt-2 text-3xl md:text-6xl text-black font-medium">
                    House
                </h1>
                <p className="mt-4 text-red-600 text-sm md:text-3xl font-regular">
                    Since 1988
                </p>
            </div>
        </div>
    );
};

export default Hero; // Renamed export function
