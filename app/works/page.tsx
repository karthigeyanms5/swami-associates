"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

export default function WorksPage() {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const imagesRef = useRef([]);
  const textsRef = useRef([]);

  const projects = [
    {
      title: "Modern Villa Construction",
      client: "Mr. Rajesh",
      location: "Coimbatore, Tamil Nadu",
      coordinates: "11.0168° N, 76.9558° E",
      image: "/work/sr.jpg",
    },
    {
      title: "Skyline Apartment Tower",
      client: "BlueRise Builders",
      location: "Chennai, Tamil Nadu",
      coordinates: "13.0827° N, 80.2707° E",
      image: "/work/trg.jpg",
    },
    {
      title: "Luxury Beachfront House",
      client: "Ms. Priya",
      location: "Pondicherry",
      coordinates: "11.9416° N, 79.8083° E",
      image: "/work/kar.png",
    },
    {
      title: "Corporate Office Complex",
      client: "NextEra Developers",
      location: "Bangalore, Karnataka",
      coordinates: "12.9716° N, 77.5946° E",
      image: "/work/b4.jpg",
    },
  ];

  useEffect(() => {
    if (window.innerWidth < 768) return; // Skip animations on mobile

    slidesRef.current.forEach((_, i) => {
      const image = imagesRef.current[i];
      const text = textsRef.current[i];

      if (!image || !text) return;

      gsap.fromTo(
        image,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: slidesRef.current[i],
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        text,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: slidesRef.current[i],
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-[#FAFAFF] text-gray-900 overflow-hidden">
      {/* Intro Section */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-serif text-[#00008B]">Our Works</h1>
      </section>

      {/* Swiper Carousel */}
      <section className="relative py-20 bg-white flex flex-col items-center">
        <div className="w-full md:w-[90%] lg:w-[80%]">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={60}
            slidesPerView={1}
            speed={1000}
            loop={true}
            grabCursor={true}
            className="rounded-2xl shadow-lg"
          >
            {projects.map((proj, i) => (
              <SwiperSlide
                key={i}
                // ref={(el) => (slidesRef.current[i] = el)}
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-10 py-10">
                  <div
                    className="project-image w-full md:w-1/2"
                    // ref={(el) => (imagesRef.current[i] = el)}
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="rounded-2xl shadow-xl object-cover w-full h-[70vh]"
                    />
                  </div>
                  <div
                    className="project-text w-full md:w-1/2"
                    // ref={(el) => (textsRef.current[i] = el)}
                  >
                    <h2 className="text-4xl font-serif mb-4 text-[#00008B]">{proj.title}</h2>
                    <p className="text-lg mb-2">
                      <strong>Client:</strong> {proj.client}
                    </p>
                    <p className="text-lg mb-2">
                      <strong>Location:</strong> {proj.location}
                    </p>
                    <p className="text-lg mb-2">
                      <strong>Coordinates:</strong> {proj.coordinates}
                    </p>
                    <div className="mt-6 w-16 h-[3px] bg-[#0A64BC] rounded"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
