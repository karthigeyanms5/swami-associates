"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function BurstGrid() {
  const container = useRef(null);
  const total = 36;
  const gridSize = 6;

  // GSAP hook
  useGSAP(() => {
    if (!container.current) return;

    const lines = container.current.querySelectorAll(".line");

    gsap.to(lines, {
      rotate: 360,
      repeat: -1,
      duration: 4,
      ease: "none",
      transformOrigin: "center center",
      stagger: {
        each: 0.05,
        from: "center",
      },
    });
  });

  return (
    <div className="flex items-center justify-center w-full ">
      <div
        ref={container}
        className="grid aspect-square"
        style={{  
          width: "300px",
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          gap: "20px",
        }}
      >
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            <div className="line w-[2px] h-[20px] bg-gray-950 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
