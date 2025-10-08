"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function SaButton({ text, link }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    // Smooth entrance animation
    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.05,
      backgroundColor: "#00008B", // Royal blue
      color: "#FAFAFF", // winter white
      boxShadow: "0 8px 20px rgba(10, 100, 188, 0.25)", // soft blue glow
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      backgroundColor: "#0A64BC", // Sea blue (secondary)
      color: "#FAFAFF", // white text
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div className="text-center mt-16">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button
          ref={buttonRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="bg-[#0A64BC] text-white px-8 py-3 font-medium text-sm tracking-wide rounded-full shadow-md border border-[#0A64BC]/40 transition-all duration-300"
        >
          {text}
        </button>
      </a>
    </div>
  );
}
