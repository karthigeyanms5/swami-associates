"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  id: number;
  title: string;
  location: string;
  image: string;
};

const projects: Project[] = [
  { id: 1, title: "Saravanampatti", location: "Coimbatore", image: "/work/sr.jpg" },
  { id: 2, title: "Marudur", location: "Coimbatore", image: "/work/trg.jpg" },
  { id: 3, title: "Teachers Colony", location: "Mettupalaiyam", image: "/work/kar.png" },
  { id: 4, title: "Downtown Complex", location: "Chennai", image: "/work/sr.jpg" },
];

const Work: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Only run GSAP animations for desktop (md and above)
    if (window.innerWidth < 768) return;

    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;
    const cards = cardsRef.current;

    if (!section || !scrollContainer) return;

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Title & description fade-in
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: section, start: "top 80%", once: true },
    });

    gsap.from(descRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
      scrollTrigger: { trigger: section, start: "top 80%", once: true },
    });

    // Horizontal scroll
    const timeout = setTimeout(() => {
      const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;

      gsap.to(scrollContainer, {
        x: () => -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollWidth + 500}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Cards fade in
      cards.forEach((card) => {
        if (!card) return;
        const textOverlay = card.querySelector(".text-overlay");
        gsap.from(card, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 80%", once: true },
        });
        if (textOverlay) {
          gsap.from(textOverlay, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 80%", once: true },
          });
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Reset refs array before mapping to avoid stale refs
  cardsRef.current = [];

  return (
    <section
      ref={sectionRef}
      id="work"
      className="bg-neutral-900 py-24 overflow-hidden min-h-screen"
    >
      {/* Header */}
      <div className="px-6 md:px-16 lg:px-24 mb-20 max-w-7xl mx-auto">
        <div ref={titleRef}>
          <p className="text-red-500 text-sm md:text-base font-medium tracking-widest uppercase mb-4">
            ARCHITECTURE SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight max-w-3xl">
            Create functional and stylish modern buildings for you.
          </h2>
        </div>
        <p
          ref={descRef}
          className="text-gray-400 text-base md:text-lg mt-8 max-w-xl leading-relaxed"
        >
          Our buildings combine minimalism and elegance of lines and shapes.
          We want them to be an integral part of the surrounding landscape.
        </p>
      </div>

      {/* Projects */}
      <div
        ref={scrollContainerRef}
        className="flex flex-col md:flex-row gap-6 px-6 md:px-16 lg:px-24 pb-12 will-change-transform"
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="project-card flex-shrink-0 w-full md:w-[45vw] lg:w-[32vw] xl:w-[28vw] group cursor-pointer"
          >
            <div className="relative overflow-hidden h-[400px] md:h-[600px] bg-neutral-800 rounded-2xl shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-1000 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-700"></div>

              {/* Text overlay */}
              <div className="text-overlay absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {project.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-20 px-6">
        <a href="/works" target="_blank" rel="noopener noreferrer">
          <button className="bg-white text-neutral-900 px-10 py-4 font-medium text-base uppercase tracking-wider hover:bg-yellow-400 transition-all duration-500 transform hover:scale-105">
            View All Projects
          </button>
        </a>
      </div>
    </section>
  );
};

export default Work;