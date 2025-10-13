"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Form } from "@/components/ContactUs";
import SaButton from "./SaButton";

export default function Modal() {
  const overlayRef = useRef(null);
  const modalContentRef = useRef(null);
  const animationRef = useRef(null);

  function openAuthModal() {
    animationRef.current = gsap
      .timeline({ defaults: { ease: "power2.inOut" } })
      .to(overlayRef.current, {
        scaleY: 0.01,
        x: 1,
        opacity: 1,
        display: "flex",
        duration: 0.4,
      })
      .to(overlayRef.current, {
        scaleY: 1,
        background: "rgba(255,255,255,0.16)",
        duration: 0.6,
      })
      .to(
        "#authOverlay #second",
        { scaleY: 1, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .to(
        "#authOverlay #third",
        { scaleY: 1, opacity: 1, duration: 0.4 },
        "-=0.2"
      )
      .to(
        "#authOverlay #fourth",
        {
          background: "rgba(255,255,255,0.3)",
          border: "1px solid rgba(255,255,255,0.3)",
          duration: 0.8,
        },
        "-=0.4"
      );
  }

  function closeAuthModal() {
    if (animationRef.current) {
      animationRef.current.reverse().timeScale(-1.6);
    }
  }

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        overlayRef.current &&
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target)
      ) {
        closeAuthModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Make globally accessible
  useEffect(() => {
    window.openAuthModal = openAuthModal;
  }, []);

  return (
    <div
      ref={overlayRef}
      id="authOverlay"
      className="fixed z-50 inset-0 flex items-center justify-center py-6 px-4 overflow-y-auto bg-white/80 backdrop-blur-sm scale-y-0 -translate-x-full opacity-0 origin-center"
    >
      <div
        ref={modalContentRef}
        id="fourth"
        className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-white/0 border border-white/0 p-1 rounded-2xl shadow-sm"
      >
        {/* Close Button */}
        <div
          onClick={closeAuthModal}
          className="absolute top-4 right-4 rotate-45 z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <SaButton text="" />
        </div>

        <div
          id="second"
          className="bg-white p-4 sm:p-6 md:p-8 w-full rounded-xl shadow-sm scale-y-0 opacity-0"
        >
          <div
            id="third"
            className="relative scale-y-0 opacity-0 flex flex-col items-center"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-gray-900 leading-snug mb-6 sm:mb-8 text-center"
              style={{ fontFamily: "var(--font-minion)" }}
            >
              Get in touch with us.
            </h2>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
