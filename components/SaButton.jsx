"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function SaButton({ text, link }) {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(container.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <div ref={container} className="inline-block">
      <a href={link}>
        <button className="sa-button px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
          {text}
        </button>
      </a>
    </div>
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
