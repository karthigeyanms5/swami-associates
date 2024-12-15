"use client";
import React, { useState, useEffect } from "react";
import { Header, Nav, Link, SvgBox } from "./Styles";

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

//   // logo scrolling animation
//   const [scrolled, setScrolled] = useState(false);

//   // Scroll handler to toggle the scrolled state
//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     setScrolled(scrollPosition > 100); // Adjust threshold as needed
//   };

//   useEffect(() => {
//     setIsClient(true);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

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
        staggerChildren: 0.3,
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
    <div className="App">
      <Header className="p-4 sm:p-5 ">
        <SvgBox
          variants={iconVariants}
          animate={isOpen ? "opened" : "closed"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
              fill="#000"
            />
          </svg>
        </SvgBox>
      </Header>

      <Nav
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
        className="text-xl text-black list-none"
      >
        <Link className="mb-2" variants={linkVariants}>
          Work
        </Link>
        <Link className="mb-2" variants={linkVariants}>
          Blog
        </Link>
        <Link className="mb-2" variants={linkVariants}>
          About
        </Link>
        <Link className="mb-2" variants={linkVariants}>
          Gallery
        </Link>
        <Link
          variants={linkVariants}
          href="mailto:swamiassociatesmtp@gmail.com"
        >
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 font-medium text-white backdrop-blur-3xl">
              Start Your Project
            </span>
          </button>
        </Link>
      </Nav>
    </div>
  );
}
