"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);

  const iconVariants = {
    opened: {
      rotate: 135,
    },
    closed: {
      rotate: 0,
    },
  };

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      top: "-80vh",
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 50,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };

  useEffect(() => {
    const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17 12'>
      <rect width='100%' height='100%' rx='2' ry='2' fill='black'/>
      <path fill='white' d='M15.4654 2.93463C15.4763 4.03914 14.5848 4.44338 13.4803 4.45428C12.3758 4.46517 10.9765 4.08351 10.9656 2.979C10.9548 1.87448 12.3413 0.965337 13.4458 0.954446C14.5503 0.943555 15.4545 1.83011 15.4654 2.93463Z'/>
      <path fill='white' d='M14.8779 4.9883C15.7377 4.99287 15.8339 5.55934 15.4507 6.32904C14.2087 8.82405 11.844 10.9713 8.08253 11.0084C4.58265 11.0429 3.07284 10.0577 2.06303 9.06763C1.05328 8.07754 -0.392745 5.17951 4.02358 5.0481C6.82622 4.96471 12.3728 4.97497 14.8779 4.9883Z'/>
    </svg>`;

    const encodedSvg = encodeURIComponent(svg.trim());

    console.log(
      "%c    Design + Developed By Akilesh • https://www.akilesh.in",
      `
      background: url("data:image/svg+xml,${encodedSvg}") no-repeat left;
      background-size: contain;
      background-color: black;
      border-radius: 2px 2px 2px 17px ;
      font-weight: bold;
      font-size: 16px;
      color: #00b894;
      padding: 8px 12px 8px 40px;
      display: inline-block;
    `
    );
  }, []);

  return (
    <div className=" d-flex justify-end">
      {(isScrolled || isOpen) && (
        <a href="/" className="fixed top-2 left-4 z-50 flex items-center gap-2">
          {/* Animated Logo Circle */}
          <motion.img
            src="/logo.svg"
            alt="Logo"
            className="w-12 h-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.5,
            }}
          />

          {/* Text Next to Logo */}
          <div className="flex flex-col leading-tight">
            <span className="uppercase text-sm sm:text-base font-medium text-black border-b-2 border-red-600 font-serif ">
              Swami Associates
            </span>
            <span className="text-xs text-gray-600 pt-0.5 ml-auto">
              Since 1988
            </span>
          </div>
        </a>
      )}
      <header className="bg-transparent relative flex justify-end z-2 p-5 sm:p-0">
        {/* <div className="hidden md:flex space-x-4 p-4 sm:p-5 bg-white rounded-bl-lg slanted-header"> */}
        <div className="md:flex hidden space-x-4 p-4 ">
          {/* <style jsx>{`
            .slanted-header {
              top: -10;
              transform: perspective(1000px) rotateX(-65deg);
            }
          `}</style> */}{" "}
          <a href="/projects" className="text-black hover:text-gray-700">
            Projects
          </a>
          <div className="bg-red-300 w-0.5 h-4 rounded-full mt-1"></div>
          <a href="#blog" className="text-black   hover:text-gray-700">
            Services
          </a>
          <div className="bg-red-300 w-0.5 h-4 rounded-full mt-1"></div>
          <a href="#about" className="text-black hover:text-gray-700">
            Why work with us
          </a>
          <div className="bg-red-300 w-0.5 h-4 rounded-full mt-1"></div>
          <a
            href="#form"
            onClick={() => window.openAuthModal()}
            className="text-black hover:text-gray-700 pointer-events-auto"
          >
            Contact Us
          </a>
        </div>
        <motion.div
          variants={iconVariants}
          animate={isOpen ? "opened" : "closed"}
          onClick={() => setIsOpen(!isOpen)}
          className="z-10 md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
              fill="#000"
            />
          </svg>
        </motion.div>
      </header>
      <motion.nav
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
        exit="closed"
        className={`bg-gray-200 ${
          isOpen ? "min-h-screen" : "h-0"
        } w-full fixed top-0 flex flex-col justify-start pt-3 items-center z-1 text-xl text-black list-none overflow-hidden`}
      >
        <motion.li
          className="border-b border-slate-50 py-6 p-6 w-full text-left"
          style={{ borderBottomWidth: "1px" }}
          variants={linkVariants}
        >
          <a
            href="#work"
            className="block w-full h-full"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
        </motion.li>
        <motion.li
          className="border-b border-slate-50 py-6 p-6 w-full text-left"
          style={{ borderBottomWidth: "2px" }}
          variants={linkVariants}
        >
          <a
            href="#work"
            className="block w-full h-full"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
        </motion.li>
        <motion.li
          className="border-b border-slate-50 py-6 p-6 w-full text-left"
          style={{ borderBottomWidth: "4px" }}
          variants={linkVariants}
        >
          <a
            href="#work"
            className="block w-full h-full"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </a>
        </motion.li>
        <motion.li
          className="border-b border-slate-50 py-6 p-6 w-full text-left"
          style={{ borderBottomWidth: "3px" }}
          variants={linkVariants}
        >
          <a
            href="#work"
            className="block w-full h-full"
            onClick={() => setIsOpen(false)}
          >
            Why work with us
          </a>
        </motion.li>
        <motion.li
          className="border-b border-red-500 py-6 p-6 w-full text-left bg-black text-white"
          style={{ borderBottomWidth: "2px" }}
          variants={linkVariants}
        >
          <a
            href="mailto:swamiassociatesmtp@gmail.com"
            className="block w-full h-full"
            onClick={() => setIsOpen(false)}
          >
            Start Your Project
          </a>
        </motion.li>
      </motion.nav>
    </div>
  );
}
