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

  return (
    <div className="uppercase d-flex justify-end">
      {(isScrolled || isOpen) && (
        <motion.img
          src="/logo.svg" // Replace with your image URL
          alt="Logo"
          className="fixed top-2 left-4 w-12 h-12 z-50"
          initial={{ opacity: 0, y: -50 }} // Start with opacity 0 and positioned above
          animate={{
            opacity: 1,
            y: 0, // Move to original position when fully revealed
          }}
          transition={{
            type: "spring", // Add spring animation
            stiffness: 300, // Increase stiffness for a snappier motion
            damping: 20, // Adjust damping for faster decay
            duration: 0.5, // Reduce duration for faster reveal
          }}
        />
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
          <a href="#work" className="text-black hover:text-gray-700">
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
            className="text-black hover:text-gray-700"
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
