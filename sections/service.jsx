"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const services = [
  { id: 1, title: "Design and Planning", color: "#000000", src: "/images/image-1.png" },
  { id: 2, title: "Construction", color: "#8C8C8C", src: "/images/image-2.png" },
  { id: 3, title: "Structural Design", color: "#B0B0B0", src: "/images/image-3.png" },
  { id: 4, title: "3D Elevations", color: "#D1D3D4", src: "/images/image-4.png" },
  { id: 5, title: "Interior Design", color: "#8C8C8C", src: "/images/image-5.png" },
  { id: 6, title: "Approval Drawings", color: "#DCDCDC", src: "/images/image-6.png" },
  { id: 7, title: "Estimation", color: "#706D63", src: "/images/image-7.png" },
];

const scaleAnimation = {
  initial: { scale: 0, opacity: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    opacity: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    opacity: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.35, ease: [0.32, 0, 0.67, 0] },
  },
};

const fadeInOut = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.4, ease: "easeIn" } },
};

export default function Service() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const modalContainer = useRef(null);

  // GSAP quick setters
  const xMoveContainer = useRef(null);
  const yMoveContainer = useRef(null);

  useEffect(() => {
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.6,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.6,
      ease: "power3",
    });
  }, []);

  const moveModal = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
  };

  const handleHover = (active, index, e) => {
    moveModal(e.clientX, e.clientY);
    setModal({ active, index });
  };

  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center bg-white py-12 px-8 gap-8"
      onMouseMove={(e) => moveModal(e.clientX, e.clientY)}
    >
      {/* Left Section */}
      <div className="max-w-5xl w-full flex flex-col items-center text-center relative">
        <div className="mb-6 relative h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!modal.active ? (
              <motion.div
                key="lottie"
                variants={fadeInOut}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col items-center justify-center"
              >
                <DotLottieReact src="/lottie/Abst.lottie" loop autoplay />
                <p className="italic text-lg leading-relaxed mt-4">
                  <span className="font-bold text-red-600">“QUALITY</span> is remembered
                  long after the{" "}
                  <span className="text-red-600 font-bold">price is forgotten”</span>
                </p>
                <p className="mt-2 font-semibold">– Aldo Gucci</p>
              </motion.div>
            ) : (
              <motion.div
                key="modal"
                ref={modalContainer}
                variants={scaleAnimation}
                initial="initial"
                animate="enter"
                exit="closed"
                className="h-[350px] w-[400px] bg-white overflow-hidden pointer-events-none absolute top-1/2 left-1/2 z-[3]"
                style={{ transform: "translate(-50%, -50%)" }}
              >
                <div
                  style={{ top: modal.index * -100 + "%" }}
                  className="h-full w-full relative transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
                >
                  {services.map(({ src, color }, i) => (
                    <div
                      key={`modal_${i}`}
                      className="h-full w-full flex items-center justify-center"
                      style={{ backgroundColor: color }}
                    >
                      <Image
                        src={src}
                        width={300}
                        height={0}
                        alt="service"
                        className="h-auto"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full max-w-2xl mx-auto md:mx-0">
        <h2 className="text-gray-900 mb-8 text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-light leading-tight max-w-3xl">
          OUR SERVICES
        </h2>

        <ul>
          {services.map((service, index) => (
            <li
              key={index}
              onMouseEnter={(e) => handleHover(true, index, e)}
              onMouseLeave={(e) => handleHover(false, index, e)}
              className="flex items-center justify-between py-4 ps-2 border-y border-gray-200 hover:border-gray-900 hover:shadow-sm transition-all duration-300 cursor-pointer bg-white hover:text-gray-950 text-gray-500"
            >
              <span className="text-lg">{service.title}</span>
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-900 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
