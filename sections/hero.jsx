"use client";
// import React from "react";
// import { motion } from "framer-motion";

// // Function to check for overlapping
// const isOverlapping = (newBox, existingBoxes) => {
//     return existingBoxes.some((box) => {
//         return !(
//             newBox.left + newBox.size < box.left || // New box is to the left
//             newBox.left > box.left + box.size || // New box is to the right
//             newBox.top + newBox.size < box.top || // New box is above
//             newBox.top > box.top + box.size // New box is below
//         );
//     });
// };

// // Function to generate non-overlapping boxes
// const generateNonOverlappingBoxes = (count, containerWidth, containerHeight) => {
//     const boxes = [];
//     let attempts = 0;

//     while (boxes.length < count && attempts < 1000) {
//         const size = Math.floor(Math.random() * 80) + 90; // Box size between 50px and 130px
//         const top = Math.random() * (containerHeight - size);
//         const left = Math.random() * (containerWidth - size);

//         const newBox = { size, top, left };

//         if (!isOverlapping(newBox, boxes)) {
//             boxes.push(newBox);
//         }
//         attempts++;
//     }

//     return boxes;
// };

// // Updated function name: Hero
// const Hero = () => {
//     const containerWidth = 800; // Width of the hero section container
//     const containerHeight = 600; // Height of the hero section container
//     const boxes = generateNonOverlappingBoxes(6, containerWidth, containerHeight);

//     return (
//         <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
//             {/* Animated Squares */}
//             {boxes.map((box, index) => (
//                 <motion.div
//                     key={index}
//                     className="absolute bg-red-200 rounded-lg"
//                     initial={{ opacity: 0, scale: 0 }}
//                     animate={{ opacity: 0.8, scale: 1 }}
//                     transition={{
//                         duration: 1.5,
//                         delay: index * 0.2, // Staggered delay
//                         ease: "easeOut",
//                     }}
//                     style={{
//                         width: `${box.size}px`,
//                         height: `${box.size}px`,
//                         top: `${box.top}px`,
//                         left: `${box.left}px`,
//                     }}
//                 ></motion.div>
//             ))}

//             {/* Centered Text Content */}
//             <div className="relative text-center">
//                 <div className="relative inline-block">
//                     <h1 className="text-3xl md:text-6xl font-medium text-black inline-block">
//                         We build you Dream
//                     </h1>
//                     {/* Image Tag Positioned Top-Right */}
//                     <img
//                         src="/logo.svg" // Replace with your image URL
//                         alt="Top Right Logo"
//                         className="absolute -top-8 -right-10 w-14 h-14 "
//                     />
//                 </div>
//                 <h1 className="mt-2 text-3xl md:text-6xl text-black font-medium">
//                     House
//                 </h1>
//                 <p className="mt-4 text-red-600 text-sm md:text-3xl font-regular">
//                     Since 1988
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Hero; // Renamed export function
"use client";
import Image from "next/image";
import saLogo from "@/public//logo.svg";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../sass/main.scss";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Loader from "../components/Loader";

export default function Hero() {
  const [loading, setLoading] = useState(true);

  // Carousel slides data
  const slides = [
    {
      image: "/images/image-3.png",
      title: "Swami Associates",
      subtitle: "Since 1988",
    },
    {
      image: "/images/image-1.png",
      title: "Excellence in Service",
      subtitle: "Trusted Partner",
    },
    {
      image: "/images/image-2.png",
      title: "Quality & Dedication",
      subtitle: "Your Success",
    },
  ];

  useEffect(() => {
    if (loading) {
      document.querySelector("body")?.classList.add("loading");
    } else {
      document.querySelector("body")?.classList.remove("loading");
    }
  }, [loading]);

  return (
    <div className="items-center justify-items-center min-h-screen gap-16 top-0">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <motion.div layout type="crossfade">
          <AnimatePresence>
            {loading ? (
              <motion.div key="loader">
                <Loader setLoading={setLoading} />
              </motion.div>
            ) : (
              <>
                {!loading && (
                  <div className="relative transition-image final w-full h-screen">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay, EffectFade]}
                      spaceBetween={0}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      effect="fade"
                      fadeEffect={{ crossFade: true }}
                      speed={1000}
                      loop={true}
                      className="w-full h-full"
                    >
                      {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                          <div className="relative w-full h-full">
                            <motion.img
                              initial={{ scale: 1.1 }}
                              animate={{ scale: 1 }}
                              transition={{
                                ease: [0.6, 0.01, -0.05, 0.9],
                                duration: 1.6,
                              }}
                              src={slide.image}
                              alt={slide.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                              <div className="relative inline-block">
                                <h1
                                  className="text-4xl md:text-6xl font-bold inline-block"
                                  style={{ fontFamily: "var(--font-minion)" }}
                                >
                                  {slide.title}
                                </h1>
                              </div>
                              <p className="mt-4 text-red-600 text-2xl md:text-5xl font-medium">
                                {slide.subtitle}
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
}