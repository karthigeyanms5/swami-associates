"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SaButton, CircularButton } from "@/components/SaButton";

gsap.registerPlugin(ScrollTrigger);


type Project = {
  title: string;
  location: string;
  image: string;
};


const projects: Project[] = [
  { title: "Teachers Colony", location: "Mettupalaiyam", image: "https://images.unsplash.com/photo-1682502524896-6d78b9e8413a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1183" },
  { title: "Saravanampatti", location: "Coimbatore", image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000" },
  { title: "Marudur", location: "Coimbatore", image: "https://images.unsplash.com/photo-1745761320791-5ae142edee8c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
  { title: "Downtown Complex", location: "Chennai", image: "https://images.unsplash.com/photo-1709147617968-709368900af1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764" },
  { title: "Modern Office", location: "Bangalore", image: "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=736" },
  { title: "Luxury Villa", location: "Ooty", image: "https://images.unsplash.com/photo-1738920460703-58305d9e0c12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331" },
];


const Work: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);
  const displayedProjects = isDesktop ? projects : projects.slice(0, 3);


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
      // Horizontal scroll - with proper cleanup
      const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${scrollWidth + 300}`,
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
      className="bg-neutral-100 py-12 overflow-hidden min-h-screen"
    >
      {/* Header */}
      <div className="px-6 md:px-16 lg:px-24 mb-10 max-w-7xl mx-auto">
        <div ref={titleRef}>
          <p className="text-red-500 text-sm md:text-base font-medium tracking-widest uppercase mb-4">
            ARCHITECTURE SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight max-w-3xl">
            Create functional and stylish modern buildings for you.
          </h2>
        </div>
        <p
          ref={descRef}
          className="text-gray-400 text-base md:text-lg mt-4 max-w-xl leading-relaxed"
        >
          Our buildings combine minimalism and elegance of lines and shapes.
        </p>
      </div>

      {/* Projects */}
      <a href="/projects">
        <div
          ref={scrollContainerRef}
          className="flex flex-col md:flex-row gap-6 px-6 md:px-16 lg:px-24"
        >
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="project-card flex-shrink-0 w-full md:w-[45vw] lg:w-[32vw] xl:w-[28vw] group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-square bg-neutral-800">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-1000 ease-out   group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 duration-1000"></div>

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
      </a>
      <div className="flex justify-center pt-7">
        <a href="/projects" className="inline-block">
          <SaButton text="View All Projects" />
        </a>
      </div>

      {/* Button */}
      {/* <CircularButton /> */}
    </section>
  );
};

export default Work;