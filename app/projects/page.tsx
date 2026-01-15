"use client"
import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    { id: 1, src: "/slider/kanaraj_residence.png", title: 'Mr.Kanagaraj Residence @ Mettupalayam', category: 'Residential Construction' },
    { id: 2, src: "/slider/geethalayam_residence.png", title: 'Geethalayam Residence @ Karamadai', category: 'Residential Construction' },
    { id: 3, src: "/slider/giri_brindha_residence.png", title: 'Mr.Giri Residence @ Mettupalayam', category: 'Residential Construction' },
    { id: 4, src: "/images/Mr.padabanaban_Residence.png", title: 'Mr.Padhabanaban Residence @ Karamadai', category: 'Residential Construction' },
    { id: 5, src: "/slider/krg_sampath.png", title: 'Mr.Sampath Residence @ Mettupalayam', category: 'Residential Construction' },
    { id: 6, src: "/slider/sakthi_hospital.png", title: 'Sakthi Hospital @ Mettupalayam', category: 'Planning Consulting' },
    { id: 7, src: "/slider/srm.png" , title: 'SRM Complex @ Mettupalayam', category: 'Commercial Construction' },
    { id: 8, src: "/slider/trg_ramesh.png" , title: 'Mr.Ramesh Residence @ Mettupalayam', category: 'Residential Construction' },
    { id: 9, src: "/slider/eye_foundation.png" , title: 'Eye Foundation Complex @ Mettupalayam', category: 'Commercial Construction' },
    { id: 10, src: "/images/RSR Srinvasan.png", title: 'Mr.RSR Residence @ Mettupalayam', category: 'Renovation' },
    { id: 11, src: "/images/image-1.png", title: 'Mr.Charles Residence @ Mettupalayam', category: 'Architectural Concept' },
    { id: 12, src: "/images/image-2.png", title: 'Mr.Mani Residence @ Mettupalayam', category: 'Architectural Concept' },
    { id: 13, src: "/images/image-3.png", title: 'Mr.Ramesh Residence @ Mettupalayam', category: 'Architectural Concept' },
    { id: 14, src: "/images/image-4.png", title: 'Mr.Natrayan villas @ Mettupalayam', category: 'Architectural Concept' },
    { id: 15, src: "/images/image-5.png", title: 'Mr.Mani Residence @ Mettupalayam', category: 'Architectural Concept' },
    { id: 16, src: "/images/image-6.png", title: 'Mahajana School new Block @ Mettupalayam', category: 'Architectural Concept' },
    { id: 17, src: "/images/image-7.png", title: 'Mr.Vijayaraghavan Residence @ Mettupalayam', category: 'Architectural Concept' },
    { id: 18, src: "/images/image-8.png", title: 'Mrs.Preethika Devaraj @ Mettupalayam', category: 'Architectural Concept' },
    { id: 19, src: "/images/image-9.png", title: 'SRM Complex @ Mettupalayam', category: 'Architectural Concept' },
    { id: 20, src: "/images/image-10.png", title: 'Mr.Sriram Residence @ Saravanampatti', category: 'Architectural Concept' },
    { id: 21, src: "/images/image-11.png", title: 'Commercial Complex @ Thalavadi', category: 'Architectural Concept' },
    { id: 22, src: "/images/image-12.png", title: 'Mr,Ramesh Residence @ Bujanganur', category: 'Architectural Concept' },
    { id: 23, src: "/images/image-13.png", title: 'Vivith School Archway @ Velliangadu', category: 'Architectural Concept' },
  ];

  useGSAP(() => {
    itemsRef.current.forEach((item, i) => {
      if (!item) return;

      // Entrance animation
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top bottom-=50',
          toggleActions: 'play none none reverse',
        },
        y: isMobile ? 30 : 60,
        opacity: 0,
        duration: isMobile ? 0.4 : 0.8,
        ease: 'power2.out',
        delay: isMobile ? 0 : (i % 3) * 0.1,
      });

      // Mobile color change
      if (isMobile) {
        ScrollTrigger.create({
          trigger: item,
          start: 'top center+=100',
          end: 'bottom center-=100',
          onToggle: (self) => {
            const img = item.querySelector('img');
            if (self.isActive) {
              img?.classList.remove('grayscale');
              img?.classList.add('grayscale-0');
            } else {
              img?.classList.add('grayscale');
              img?.classList.remove('grayscale-0');
            }
          },
        });
      }
    });
  }, { scope: containerRef, dependencies: [isMobile] });

  const handleMouseEnter = (e: any) => {
    if (isMobile) return;

    const img = e.currentTarget.querySelector('img');
    const overlay = e.currentTarget.querySelector('.overlay');
    const category = e.currentTarget.querySelector('span');
    const title = e.currentTarget.querySelector('h3');

    gsap.to(img, { filter: 'grayscale(0%)', scale: 1.05, duration: 0.6, ease: 'power2.out' });
    gsap.to(overlay, { opacity: 0.7, duration: 0.4 });
    
    // Staggered text animation
    gsap.to(category, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.7)' });
    gsap.to(title, { opacity: 1, y: 0, duration: 0.5, delay: 0.1, ease: 'power2.out' });
  };

  const handleMouseLeave = (e: any) => {
    if (isMobile) return;

    const img = e.currentTarget.querySelector('img');
    const overlay = e.currentTarget.querySelector('.overlay');
    const category = e.currentTarget.querySelector('span');
    const title = e.currentTarget.querySelector('h3');

    gsap.to(img, { filter: 'grayscale(100%)', scale: 1, duration: 0.6, ease: 'power2.out' });
    gsap.to(overlay, { opacity: 0, duration: 0.4 });
    
    gsap.to(category, { opacity: 0, scale: 0.9, duration: 0.3 });
    gsap.to(title, { opacity: 0, y: 2, duration: 0.4 });
  };

  return (
    <div ref={containerRef} className="min-h-screen py-20 px-6 mt-14">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-800 mb-4">
            Our Works
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            From Concepts to Construction explore some of our works across different Typologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((work, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="group relative overflow-hidden cursor-pointer rounded-sm aspect-[4/3]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={work.src}
                alt={work.title}
                className="w-full h-full object-cover transition-all duration-600 grayscale"
                loading="lazy"
              />

              <div className="overlay absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 pointer-events-none" />

              <div className={`info absolute bottom-0 left-0 right-0 p-6 pointer-events-none ${isMobile ? 'translate-y-0 opacity-100' : ''}`}>
                <span className={`inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-3 ${isMobile ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  {work.category}
                </span>
                <h3 className={`text-white text-base md:text-lg font-light leading-tight ${isMobile ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  {work.title}
                </h3>
              </div>
              
              {/* Mobile overlay - always visible */}
              {isMobile && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
