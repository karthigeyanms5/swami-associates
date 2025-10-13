import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { Form } from "@/components/ContactUs";

export default function Modal(openAuthModal) {
  var authAnimation;

  function openAuthModal() {
    authAnimation = gsap
      .timeline({ defaults: { ease: "power2.inOut" } })
      .to("#authOverlay", {
        scaleY: 0.01,
        x: 1,
        opacity: 1,
        display: "flex",
        duration: 0.4,
      })
      .to("#authOverlay", {
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
    authAnimation.reverse().timeScale(-1.6);
  }

  return (
    <>
      <div
        id="authOverlay"
        className="fixed z-10 left-0 top-0 h-full w-full flex items-center justify-center py-3 px-2 overflow-y-auto bg-white/80 backdrop-blur-sm scale-y-0 -translate-x-full opacity-0 origin-center"
      >
        <div
          id="fourth"
          className="bg-white/0 w-9/12 m-auto mb-0 sm:mb-auto p-1 border border-white/0 rounded-2xl shadow-sm "
        >
          <div
            id="second"
            className="bg-white p-4 sm:p-8 w-full rounded-xl shadow-sm scale-y-0 opacity-0"
          >
            <div
              id="third"
              className="relative scale-y-0 opacity-0 mx-auto flex justify-center"
            >
              <Form />

              <div className="text-center">
                <button
                  onClick={closeAuthModal}
                  className="bg-neutral-100 text-neutral-400 font-semibold text-xl rounded-md border-b-[3px] px-3 py-1"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={openAuthModal}
        className="bg-white text-cyan-400 font-semibold text-2xl rounded-md border-b-[3px] px-6 py-3 mt-16"
      >
        Open
      </button>
    </>
  );
}
