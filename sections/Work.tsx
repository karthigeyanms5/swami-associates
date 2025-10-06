"use client";
import React, { useEffect, useRef, useState } from "react";
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
  { id: 5, title: "Luxury Villa", location: "Ooty", image: "/work/trg.jpg" },
  { id: 6, title: "Modern Office", location: "Bangalore", image: "/work/kar.png" },
];

const Work: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!section || !scrollContainer) return;

    const ctx = gsap.context(() => {
      // Title & description fade-in
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true
        },
      });

      gsap.from(descRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true
        },
      });

      // Cards stagger fade in
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 100,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          once: true,
        },
      });

      // Horizontal scroll - with proper cleanup
      const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${scrollWidth + 500}`,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        scrub: 1,
        onUpdate: (self) => {
          gsap.to(scrollContainer, {
            x: -scrollWidth * self.progress,
            duration: 0,
            overwrite: true,
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, [isDesktop]);

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
        className="flex flex-col md:flex-row gap-6 px-6 md:px-16 lg:px-24 pb-12"
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="project-card flex-shrink-0 w-full md:w-[45vw] lg:w-[32vw] xl:w-[28vw] group cursor-pointer"
          >
            <div className="relative overflow-hidden h-[400px] md:h-[600px] bg-neutral-800">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-1000 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-1000"></div>

              {/* Text overlay - slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">
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
          <button className="bg-white text-neutral-900 px-10 py-4 font-medium text-base uppercase tracking-wider hover:bg-red-500 hover:text-white transition-all duration-500 transform hover:scale-105">
            View All Projects
          </button>
        </a>
      </div>
    </section>
  );
};

export default Work;