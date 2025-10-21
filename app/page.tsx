"use client"
import React, { useState, useEffect } from "react";

import Hero from "@/sections/hero";
import HeroCarousel from "@/sections/HeroCarousel";
import Legacy from "@/sections/legacy";
import Work from "@/sections/Work";
import About from "@/sections/about";
import Team from "@/sections/team";
import Service from "@/sections/service";
import Stats from "@/sections/Stats";
import ComingSoon from "@/sections/UnderConstruction";
import ContactUs from "@/components/ContactUs";

import Lenis from 'lenis';

export default function Home() {
  const [hash, setHash] = useState("");

  useEffect( () => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setHash(window.location.hash);

  //     // Optional: update if hash changes
  //     const handleHashChange = () => setHash(window.location.hash);
  //     window.addEventListener("hashchange", handleHashChange);

  //     return () => window.removeEventListener("hashchange", handleHashChange);
  //   }
  // }, []);


  return (
    <>
      {/* {!hash ?
        <ComingSoon />
        : */}
      <>
        {/* <Hero /> */}
        <div
          className='relative h-screen'
          style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <div className='fixed top-0 h-screen w-full'>
            <Legacy />
          </div>
        </div>
        <HeroCarousel />
        <Service />
        <Work />
        <Stats />
        <Team />
        <ContactUs />
        {/* Image revealed with rolling animation after scrolling */}
      </>
      {/* } */}
    </>
  );
}
