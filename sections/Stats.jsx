import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Stats() {
  const statsRef = useRef([]);
  const sectionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    statsRef.current.forEach((stat) => {
      const targetValue = +stat.getAttribute("data-target");

      gsap.fromTo(
        stat,
        { innerText: 0 },
        {
          innerText: targetValue,
          duration: 2.5,
          ease: "power2.out",
          snap: { innerText: 1 },
          onUpdate: function () {
            stat.innerText = Math.floor(stat.innerText) + "+";
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-200 py-16">
      <div className="max-w-5xl mx-auto text-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="transform transition-transform duration-300 ">
            <span
              ref={(el) => (statsRef.current[0] = el)}
              data-target="150"
              className="text-5xl md:text-6xl font-bold text-gray-800 inline-block"
            >
              0+
            </span>
            <p className="mt-3 text-lg text-red-500 font-medium">
              Total projects
            </p>
          </div>

          <div className="transform transition-transform duration-300 ">
            <span
              ref={(el) => (statsRef.current[1] = el)}
              data-target="100"
              className="text-5xl md:text-6xl font-bold text-gray-800 inline-block"
            >
              0+
            </span>
            <p className="mt-3 text-lg text-red-500 font-medium">Residence</p>
          </div>

          {/* <div className="transform transition-transform duration-300 ">
            <span
              ref={(el) => (statsRef.current[2] = el)}
              data-target="30"
              className="text-5xl md:text-6xl font-bold text-gray-800 inline-block"
            >
              0+
            </span>
            <p className="mt-3 text-lg text-red-500 font-medium">Commercial</p>
          </div> */}

          {/* <div className="transform transition-transform duration-300 ">
            <span
              ref={(el) => (statsRef.current[3] = el)}
              data-target="20"
              className="text-5xl md:text-6xl font-bold text-gray-800 inline-block"
            >
              0+
            </span>
            <p className="mt-3 text-lg text-red-500 font-medium">other</p>
          </div> */}

          <div className="transform transition-transform duration-300 ">
            <span
              ref={(el) => (statsRef.current[4] = el)}
              data-target={new Date().getFullYear() - 1988}
              className="text-5xl md:text-6xl font-bold text-gray-800 inline-block"
            >
              0+
            </span>
            <p className="mt-3 text-lg text-red-500 font-medium">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
