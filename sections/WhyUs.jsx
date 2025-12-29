"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Award, Layout, Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  const cardsRef = useRef([]);

  const points = [
    { desc: "Vastu compliant Buildings", icon: ShieldCheck },
    { desc: "High Quality Materials as IS standards", icon: Award },
    { desc: "Efficient Space Planning and Elegant Designs", icon: Layout },
    { desc: "35+ years of Experiences in Execution", icon: Briefcase },
  ];

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#why-us",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="why-us"
      className="bg-gray-50 py-16 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-800">
                Why Us
            </h2>
        </div>
        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center"
              >
                {/* Icon */}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-gray-700">
                  <Icon size={22} />
                </div>

                {/* Text */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
