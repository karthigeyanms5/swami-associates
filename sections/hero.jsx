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
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../sass/main.scss";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Loader from "../components/Loader";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="https://swami-associates.in/logo.jpg"
//           alt="Mettupalayam"
//           width={180}
//           height={38}
//           priority
//         />
//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               src={saLogo}
//               alt="construction"
//               width={20}
//               height={20}
//             />
//             Swami
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Associates
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

export default function Hero() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.querySelector("body")?.classList.add("loading");
    } else {
      document.querySelector("body")?.classList.remove("loading");
    }
  }, [loading]);

  return (
    <div className=" items-center justify-items-center min-h-screen gap-16 top-0">
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
                  <div className="relative transition-image final">
                    <motion.img
                      transition={{
                        ease: [0.6, 0.01, -0.05, 0.9],
                        duration: 1.6,
                      }}
                      src={`/images/image-1.png`}
                      layoutId="main-image-1"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <div className="relative inline-block">
                        <h1
                          className="text-4xl md:text-6xl font-bold text-white inline-block "
                          style={{ fontFamily: "var(--font-minion)" }}
                        >
                          Swami Associates
                        </h1>
                      </div>
                      <p className="mt-4 text-red-600 text-2xl md:text-5xl font-medium">
                        Since 1988
                      </p>
                    </div>
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
