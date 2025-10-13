"use client"
import React, { useState, useEffect } from "react";

import Hero from "@/sections/hero";
import HeroCarousel from "@/sections/HeroCarousel";
import Legacy from "@/sections/legacy";
import Work from "@/sections/Work";
import About from "@/sections/about";
import Team from "@/sections/team";
import Service from "@/sections/service";
import Footer from "@/sections/footer";
import Stats from "@/sections/Stats";
import ComingSoon from "@/sections/UnderConstruction";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHash(window.location.hash);

      // Optional: update if hash changes
      const handleHashChange = () => setHash(window.location.hash);
      window.addEventListener("hashchange", handleHashChange);

      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);


  return (
    <>
      {!hash ?
        <ComingSoon />
        :
        <>
          {/* <Hero /> */}
          <HeroCarousel />
          <Service />
          <Legacy />
          <Work />
          <Stats />
          <Team />
          <ContactUs />
          <Footer />
          {/* Image revealed with rolling animation after scrolling */}
        </>
      }
    </>
  );
}
