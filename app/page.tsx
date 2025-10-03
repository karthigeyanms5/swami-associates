"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import Hero from "@/sections/hero";
import Legacy from "@/sections/legacy";
import Work from "@/sections/Work";
import About from "@/sections/about";
import Team from "@/sections/team";
import Service from "@/sections/service";
import Footer from "@/sections/footer";
import TopNav from "@/components/top-nav/TopNav";
import ContactUs from "@/components/ContactUs";

export default function Home() {


  return (
    <>
      <header className="sticky top-0 z-50">
        <TopNav />
      </header>
      <Hero />
      <Legacy />
      <Service />
      <Work />
      <Team />
      <ContactUs />
      <Footer />  
      {/* Image revealed with rolling animation after scrolling */}
     
    </>
  );
}
