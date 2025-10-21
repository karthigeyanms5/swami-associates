"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { HoverProgressCircle } from "@/components/SaButton";

export const services = [
  {
    id: 1,
    title: "Design and Planning",
    color: "#000000",
    src: "https://images.unsplash.com/photo-1712806375405-c666c772ea75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1946",
  },
  {
    id: 2,
    title: "Construction",
    color: "#8C8C8C",
    src: "https://images.unsplash.com/photo-1590990536464-3324e285ae54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: 3,
    title: "Structural Design",
    color: "#B0B0B0",
    src: "https://images.unsplash.com/photo-1749984739767-afd0cb96c3cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
  },
  {
    id: 4,
    title: "3D Elevations",
    color: "#D1D3D4",
    src: "https://images.unsplash.com/photo-1613152161890-52aa17add7c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
  },
  {
    id: 5,
    title: "Interior Design",
    color: "#8C8C8C",
    src: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
  },
  {
    id: 6,
    title: "Approval Drawings",
    color: "#DCDCDC",
    src: "https://images.unsplash.com/photo-1721244654210-a505a99661e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1152",
  },
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
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.4, ease: "easeIn" },
  },
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
                  <span className="text-red-600">“QUALITY</span> is remembered
                  long after the{" "}
                  <span className="text-red-600">price is forgotten”</span>
                </p>
                <p className="mt-2 font-light ">– Aldo Gucci</p>
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
          Our Services
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
              <HoverProgressCircle
                isActive={modal.active && modal.index === index}
              />{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
