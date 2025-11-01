"use client"
import React, { useState, useEffect, useRef } from "react";

import Hero from "@/sections/hero";
import HeroCarousel from "@/sections/HeroCarousel";
import Legacy from "@/sections/legacy";
import Work from "@/sections/Work";
import About from "@/sections/about";
import Team from "@/sections/team";
import Service from "@/sections/service";
import Stats from "@/sections/Stats";
import ContactUs from "@/components/ContactUs";
import Preloader from "@/components/Preloader";

import Lenis from 'lenis';
import Snap from 'lenis/snap'

export default function Home() {
  const legacyRef = useRef<HTMLDivElement>(null);
  const heroCarouselRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({})
    const snap = new Snap(lenis, {
      type: "proximity",
      distanceThreshold: "25%",
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Add snap points for each section after they mount
    setTimeout(() => {
      if (legacyRef.current) snap.add(legacyRef.current.offsetTop);
      if (heroCarouselRef.current) snap.add(heroCarouselRef.current.offsetTop);
      if (serviceRef.current) snap.add(serviceRef.current.offsetTop);
      if (workRef.current) snap.add(workRef.current.offsetTop);
      if (teamRef.current) snap.add(teamRef.current.offsetTop);
    }, 100);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, [])

  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      {/* {!hash ?
        <ComingSoon />
        : */}
      <>
        {/* <Hero /> */}

        {showPreloader && (
          <Preloader onComplete={() => setShowPreloader(false)} />
        )}
        <div
          ref={legacyRef}
          className='relative h-screen'
          style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <div className='fixed top-0 h-screen w-full'>
            <Legacy />
          </div>
        </div>
        <div ref={heroCarouselRef}>
          <HeroCarousel />
        </div>
        <div ref={serviceRef}>
          <Service />
        </div>
        <div ref={workRef}>
          <Work />
        </div>
        <Stats />
        <div ref={teamRef}>
          <Team />
        </div>
        <ContactUs />
        {/* Image revealed with rolling animation after scrolling */}
      </>
      {/* } */}
    </>
  );
}