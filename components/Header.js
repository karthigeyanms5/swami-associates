import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoAnimation from "./logo";
import saLogo from "@/public/logo.svg";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className="header"
    >
      <div className="header-inner">
        <div className="logo">
          <Image src={saLogo} alt="construction" width={80} />
          {/* Swami Associates */}
        </div>
        {/* <LogoAnimation /> */}

        <nav className="nav">
          <li>
            <a href="/design">Design</a>
          </li>
          <li>
            <a href="/strategy">Strategy</a>
          </li>
          <li>
            <a href="/cases">Cases</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/why">Why work with us?</a>
          </li>
        </nav>
        <div className="contact">
          <a href="tel:+916381918916">Let's work together</a>
        </div>
        {/* <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div> */}
      </div>
    </motion.div>
  );
};

export default Header;
