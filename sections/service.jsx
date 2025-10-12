"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";

export const services = [
  {
    id: 1,
    title: "Design and Planning",
    color: "#000000",
    src: "/images/image-1.png",
  },
  {
    id: 2,
    title: "Construction",
    color: "#8C8C8C",
    src: "/images/image-2.png",
  },
  { id: 3, title: "Structural Design", src: "/images/image-3.png" },
  {
    id: 4,
    title: "3D Elevations",
    color: "#D1D3D4",
    src: "/images/image-4.png",
  },
  {
    id: 5,
    title: "Interior Design",
    color: "#8C8C8C",
    src: "/images/image-5.png",
  },
  {
    id: 6,
    title: "Approval Drawings",
    color: "#DCDCDC",
    src: "/images/image-6.png",
  },
  { id: 7, title: "Estimation", color: "#706D63", src: "/images/image-7.png" },
  // { id: 8, title: "Valuations"asdf, src: "https://via.placeholder.com/200x100/FF0000/FFFFFF" },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Service() {
  const [hoveredService, setHoveredService] = useState(null); // Track which service is hovered
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <div
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className="flex flex-col items-center bg-gray-200 py-12 px-4"
      id="work"
    >
      <div className="max-w-5xl w-full flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-8">Our Service's</h2>
        {services.map((service, index) => (
          <Link
            href="/projects"
            className="block w-full h-full"
            key={service.id}
          >
            <motion.div
              className={`relative flex items-center justify-between px-6 py-7 cursor-pointer border-b-2
               ${
                 hoveredService === service.id
                   ? "bg-slate-50 text-red-500 border-red-500"
                   : "bg-transparent text-gray-600 border-gray-300"
               }`}
              onMouseEnter={(e) => {
                manageModal(true, index, e.clientX, e.clientY);
                setHoveredService(service.id);
              }}
              onMouseLeave={(e) => {
                manageModal(false, index, e.clientX, e.clientY);
                setHoveredService(null);
              }}
              key={service.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Service Title */}
              <h3 className="text-xl font-semibold">{service.title}</h3>
              {/* Arrow Icon */}
              <motion.div
                animate={{
                  rotate: hoveredService === service.id ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`${
                    hoveredService === service.id
                      ? "text-red-600"
                      : "text-red-400"
                  }`}
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </motion.div>{" "}
            </motion.div>
          </Link>
        ))}
        <>
          <motion.div
            ref={modalContainer}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
            className="h-[350px] w-[400px] fixed top-1/2 left-1/2 bg-white pointer-events-none overflow-hidden z-[3]"
          >
            <div
              style={{ top: index * -100 + "%" }}
              className="h-full w-full relative transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
            >
              {services.map((services, index) => {
                const { src, color } = services;
                return (
                  <div
                    className="h-full w-full flex items-center justify-center"
                    style={{ backgroundColor: color }}
                    key={`modal_${index}`}
                  >
                    <Image
                      src={`${src}`}
                      width={300}
                      height={0}
                      alt="image"
                      className="h-auto"
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            ref={cursor}
            className="w-20 h-20 rounded-full bg-red-300 text-black fixed z-[3] flex items-center justify-center text-sm font-light pointer-events-none"
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
          ></motion.div>
          <motion.div
            ref={cursorLabel}
            className="w-20 h-20 rounded-full bg-transparent text-black fixed z-[3] flex items-center justify-center text-sm font-light pointer-events-none"
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
          >
            View
          </motion.div>
        </>
      </div>
    </div>
  );
}
