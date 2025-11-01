"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const firstSlideRef = useRef(null);
  const firstSlideInnerRef = useRef(null);
  const decoRef = useRef(null);

  // Split text only once, cache spans
  const splitText = (element) => {
    if (!element) return [];
    const text = element.textContent.trim();
    element.textContent = "";
    const fragments = text.split("").map((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.willChange = "transform, opacity"; // GPU optimization
      element.appendChild(span);
      return span;
    });
    return fragments;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mainText = firstSlideInnerRef.current.querySelector(".main-text");
      const subText = firstSlideInnerRef.current.querySelector(".sub-text");

      const mainChars = splitText(mainText);
      const subChars = splitText(subText);

      // Set initial state
      gsap.set(firstSlideRef.current, { autoAlpha: 1 });
      gsap.set(decoRef.current, { yPercent: 100, autoAlpha: 0 });
      gsap.set(mainChars, { opacity: 0, y: 40 });
      gsap.set(subChars, { opacity: 0, y: 20, scale: 0.9 });

      const tl = gsap.timeline({ defaults: { ease: "power2.out" }, onComplete });

      // Animate main and sub text simultaneously
      tl.to(mainChars, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: "back.out(1.7)",
      })
        .to(
          subChars,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.015,
            ease: "back.out(1.7)",
          },
          "-=0.35"
        )
        // Decorative slide animation
        .fromTo(
          decoRef.current,
          { yPercent: 100, autoAlpha: 1 },
          { yPercent: 0, duration: 0.25, ease: "power3.out" },
          "<"
        )
        .to(decoRef.current, { yPercent: -100, duration: 0.2, ease: "power3.inOut" })
        // Preloader exit
        .to(containerRef.current, { yPercent: -100, duration: 0.35, ease: "power3.inOut" });
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] overflow-hidden bg-gray-200 text-center">
      {/* First Slide */}
      <div ref={firstSlideRef} className="absolute inset-0 flex items-center justify-center">
        <div
          ref={firstSlideInnerRef}
          className="absolute inset-0 bg-gradient-to-b from-white to-gray-200 flex flex-col items-center justify-center"
        >
          <h1
            className="main-text text-[8vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] font-bold text-black tracking-tight mb-3"
            style={{ fontFamily: "var(--font-minion, serif)" }}
          >
            Swami Associates
          </h1>
          <h2 className="sub-text text-[3.5vw] sm:text-[2.8vw] md:text-[2.2vw] lg:text-[1.8vw] text-red-600 font-semibold tracking-wide">
            Since 1988
          </h2>
        </div>
      </div>

      {/* Decorative Layer */}
      <div
        ref={decoRef}
        className="absolute inset-0 bg-gradient-to-b from-gray-400 to-gray-300"
        style={{ opacity: 0, willChange: "transform, opacity" }} // GPU optimized
      />
    </div>
  );
};

export default Preloader;
