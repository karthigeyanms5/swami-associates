"use client"
import React, { useState, useEffect } from "react";
import Modal from "@/components/Modal";

import Hero from "@/sections/hero";
import Legacy from "@/sections/legacy";
import Work from "@/sections/Work";
import About from "@/sections/about";
import Team from "@/sections/team";
import Service from "@/sections/service";
import Footer from "@/sections/footer";
import ContactUs from "@/components/ContactUs";
import Stats from "@/sections/Stats";
import ComingSoon from "@/sections/UnderConstruction";

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
          <Hero />
          <Legacy />
          <Service />
          <Work />
          <Stats />
          <Team />
          <ContactUs />
          <Footer />
          {/* Image revealed with rolling animation after scrolling */}
          {/* <Modal /> */}
        </>
      }
    </>
  );
}
