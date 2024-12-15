"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import Hero from "@/sections/hero";
import Work from "@/sections/Work";
import About from "@/sections/about";
import Team from "@/sections/team";
import Service from "@/sections/service";
import Footer from "@/sections/footer";
import TopNav from "@/components/top-nav/TopNav";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to show/hide the image
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100); // Image will show after scrolling 100px
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 flex">
        <TopNav />
      </header>
      <Hero />
      {/* Other sections */}
      <Service />
      <Work />
      <Team />
      <Footer />

      {/* Image revealed with rolling animation after scrolling */}
      {isScrolled && (
        <motion.img
          src="/logo.svg" // Replace with your image URL
          alt="Top Right Logo"
          className="fixed top-4 right-4 w-14 h-14 z-50"
          initial={{ opacity: 0, rotate: 45 }} // Start with opacity 0 and rotated
          animate={{
            opacity: 1,
            rotate: 0, // Rotate to 0 when fully revealed
          }}
          transition={{
            type: "spring", // Add spring animation
            stiffness: 100, // Control the spring stiffness (higher = snappier)
            damping: 25, // Control the damping (higher = slower decay)
            duration: 1, // You can also adjust the duration, but spring will control the timing
          }}
        />
      )}
    </>
  );
}
