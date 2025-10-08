"use client"
import React, { useState, useEffect } from "react";
import TopNav from "@/components/top-nav/TopNav";
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


  return (
    <>
      <ComingSoon />
      {/* <header className="fixed top-0 z-50 w-full">
        <TopNav />
      </header>
      <Hero />
      <Legacy />
      <Service />
      <Work />
      <Stats />
      <Team />
      <ContactUs />
      <Footer /> */}
      {/* Image revealed with rolling animation after scrolling */}
      {/* <Modal /> */}
    </>
  );
}
