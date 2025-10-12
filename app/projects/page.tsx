"use client"
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  // Dynamic works data - easily expandable
  const projects = [
    { id: 1, title: 'Tropical Home', category: 'Residential' },
    { id: 2, title: 'Villa in Urban Context', category: 'Architecture' },
    { id: 3, title: 'Weekend Getaway', category: 'Residential' },
    { id: 4, title: 'Modern Interior', category: 'Interior Design' },
    { id: 5, title: 'Urban Monument', category: 'Public Space' },
    { id: 6, title: 'Waterfront Development', category: 'Urban Planning' },
    { id: 7, title: 'Contemporary Villa', category: 'Residential' },
    { id: 8, title: 'Minimalist Design', category: 'Architecture' },
    { id: 9, title: 'Coastal Retreat', category: 'Residential' },
    { id: 10, title: 'Urban Renewal', category: 'Commercial' },
    { id: 11, title: 'Sustainable Living', category: 'Eco Design' },
    { id: 12, title: 'Modern Aesthetics', category: 'Architecture' },
    { id: 13, title: 'Cultural Center', category: 'Public Space' },
    { id: 14, title: 'Luxury Estate', category: 'Residential' },
  ];

  // Setup scroll animations with useGSAP
  useGSAP(() => {
    itemsRef.current.forEach((item, i) => {
      if (!item) return;

      // Animate entrance as before
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: (i % 3) * 0.1,
      });

      // Mobile-specific color change
      ScrollTrigger.create({
        trigger: item,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          if (window.innerWidth <= 768) {
            const img = item.querySelector('img');
            gsap.to(img, {
              filter: 'grayscale(0%)',
              duration: 0.5,
              ease: 'power2.out',
            });
          }
        },
        onLeaveBack: () => {
          if (window.innerWidth <= 768) {
            const img = item.querySelector('img');
            gsap.to(img, {
              filter: 'grayscale(100%)',
              duration: 0.5,
              ease: 'power2.in',
            });
          }
        },
      });
    });
  }, { scope: containerRef });

  const handleMouseEnter = (e: any) => {
    const img = e.currentTarget.querySelector('img');
    const overlay = e.currentTarget.querySelector('.overlay');
    const info = e.currentTarget.querySelector('.info');

    gsap.to(img, {
      filter: 'grayscale(0%)',
      scale: 1.05,
      duration: 0.6,
      ease: 'power2.out',
    });

    gsap.to(overlay, {
      opacity: 0.7,
      duration: 0.4,
    });

    gsap.to(info, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (e: { currentTarget: { querySelector: (arg0: string) => any; }; }) => {
    const img = e.currentTarget.querySelector('img');
    const overlay = e.currentTarget.querySelector('.overlay');
    const info = e.currentTarget.querySelector('.info');

    gsap.to(img, {
      filter: 'grayscale(100%)',
      scale: 1,
      duration: 0.6,
      ease: 'power2.out',
    });

    gsap.to(overlay, {
      opacity: 0,
      duration: 0.4,
    });

    gsap.to(info, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in',
    });
  };

  return (
    <div ref={containerRef} className="min-h-screen  py-20 px-6 mt-14">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-800 mb-4">
            Our Works
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Explore our portfolio of architectural masterpieces and design excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((work, index) => (
            <div
              key={work.id}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="group relative overflow-hidden cursor-pointer rounded-sm aspect-[4/3]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={`/images/image-${work.id}.png`}
                alt={work.title}
                className="w-full h-full object-cover transition-all duration-600"
                style={{ filter: 'grayscale(100%)' }}
              />

              <div className="overlay absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0" />

              <div className="info absolute bottom-0 left-0 right-0 p-6 translate-y-5 opacity-0">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-3">
                  {work.category}
                </span>
                <h3 className="text-white text-2xl font-light">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}