"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function SaButton({ text = "" }) {
  const buttonRef = useRef(null);
  const plusRef = useRef(null);

  useGSAP(() => {
    gsap.from(buttonRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  const handleEnter = () => {
    gsap.to(plusRef.current, {
      rotation: 90,
      scale: 1.2,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(plusRef.current, {
      rotation: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="flex items-center gap-2 font-medium tracking-wide text-black bg-transparent border-none outline-none"
    >
      {text}
      <span ref={plusRef} className="w-5 text-red-500 leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          fill="none"
          stroke="currentColor"
          strokeWidth="80"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="320" y1="120" x2="320" y2="520" />
          <line x1="120" y1="320" x2="520" y2="320" />
        </svg>
      </span>
    </button>
  );
}

function CircularButton({ text = "Click", href = "#" }) {
  return (
    <div className="flex items-center justify-center min-h-screen from-gray-100 via-gray-300 to-gray-500 bg-gradient-to-br">
      <div className="relative w-full h-screen">
        <div className="absolute-center">
          <svg className="circle-svg" viewBox="0 0 500 500">
            <defs>
              <path
                id="textcircle_top"
                d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
              >
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="20s"
                  type="rotate"
                  from="0 250 250"
                  to="360 250 250"
                  repeatCount="indefinite"
                />
              </path>
            </defs>
            <text className="circle-text" dy="70" textLength="1220">
              <textPath href="#textcircle_top">
                View Our Showreels View Our Showreels
              </textPath>
            </text>
          </svg>
        </div>
        <div className="absolute-center">
          <div className="showreels-div">
            <video className="showreels-video" loop autoPlay muted>
              <source
                src="https://github.com/ahampriyanshu/gfg/raw/main/media/showreel.mp4"
                type="video/mp4"
              />
              <p>Please Update Your Browser</p>
            </video>
            <img
              alt="play"
              className="showreels-btn"
              src="https://github.com/ahampriyanshu/gfg/raw/main/media/play.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { SaButton, CircularButton };
