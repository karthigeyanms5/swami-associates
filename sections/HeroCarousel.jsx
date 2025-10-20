"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const images = [
  "/images/image-1.png",
  "/images/image-2.png",
  "/images/image-3.png",
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleDotClick = (index) => {
    if (swiperInstance) swiperInstance.slideToLoop(index);
  };

  const circleRadius = 14;
  const strokeWidth = 3;
  const circumference = 2 * Math.PI * circleRadius;

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        slidesPerView={1}
        className="w-full h-full"
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Building ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 pointer-events-none">
        <h1 className="text-white text-5xl md:text-7xl font-bold uppercase font-sans tracking-wide">
          Swami Associates
        </h1>
      </div>

      {/* Circle Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10">
        {images.map((_, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`relative ${
                activeIndex === index ? "w-5 h-5" : "w-1.5 h-1.5"
              } cursor-pointer group`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`absolute inset-0 rounded-full ${
                  activeIndex === index ? "" : "bg-white"
                }`}
              ></div>
              <svg className="w-full h-full -rotate-90" viewBox="0 0 34 34">
                {/* Background Circle */}
                <circle
                  cx="16"
                  cy="16"
                  r={circleRadius}
                  fill="none"
                  stroke="#f3f3f3"
                  strokeWidth={strokeWidth}
                />
                {/* Progress Circle */}
                <circle
                  cx="16"
                  cy="16"
                  r={circleRadius}
                  fill="none"
                  stroke="red"
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={isActive ? 0 : circumference}
                  className={`transition-all duration-300 ${
                    isActive ? "animate-progress" : ""
                  }`}
                  style={{
                    transformOrigin: "50% 50%",
                  }}
                />
              </svg>
            </button>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            stroke-dashoffset: ${circumference};
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .animate-progress {
          animation: progress 4s linear forwards;
        }
      `}</style>
    </section>
  );
}
