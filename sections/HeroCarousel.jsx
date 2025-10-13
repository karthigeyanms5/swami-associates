"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// Array of images
const images = [
  "/images/image-1.png",
  "/images/image-2.png",
  "/images/image-3.png",
  "/images/image-4.png",
];

export default function HeroCarousel() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        slidesPerView={1}
        className="w-full h-full"
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

      {/* Optional: Overlay text or content */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <h1 className="text-white text-5xl md:text-7xl font-bold uppercase font-sans tracking-wide">
          Swami Associates
        </h1>
      </div>
    </section>
  );
}
