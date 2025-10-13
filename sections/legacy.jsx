import { useRef, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "../sass/module/legacy.module.css";

export default function Legacy() {
  const sectionRef = useRef(null);
  const rafIdRef = useRef(null);
  const orientationListenerRef = useRef(null);

  const UPDATE = useCallback(({ x, y }) => {
    // Cancel any pending animation frame
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }

    // Use RAF for smooth updates
    rafIdRef.current = requestAnimationFrame(() => {
      gsap.set(document.documentElement, {
        "--x": gsap.utils.mapRange(0, window.innerWidth, -1, 1, x),
        "--y": gsap.utils.mapRange(0, window.innerHeight, -1, 1, y),
      });
    });
  }, []);

  const handleOrientation = useCallback((event) => {
    const { beta = 0, gamma = 0 } = event;
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;

    // Cancel any pending animation frame
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }

    rafIdRef.current = requestAnimationFrame(() => {
      gsap.set(document.documentElement, {
        "--x": gsap.utils.clamp(
          -1,
          1,
          isLandscape
            ? gsap.utils.mapRange(-45, 45, -1, 1, beta)
            : gsap.utils.mapRange(-45, 45, -1, 1, gamma)
        ),
        "--y": gsap.utils.clamp(
          -1,
          1,
          isLandscape
            ? gsap.utils.mapRange(20, 70, 1, -1, Math.abs(gamma))
            : gsap.utils.mapRange(20, 70, 1, -1, beta)
        ),
      });
    });
  }, []);

  useGSAP(
    () => {
      // Store the orientation listener reference
      orientationListenerRef.current = handleOrientation;

      const START = async () => {
        if (
          typeof window.DeviceOrientationEvent !== "undefined" &&
          "requestPermission" in window.DeviceOrientationEvent
        ) {
          try {
            const result =
              await window.DeviceOrientationEvent.requestPermission();
            if (result === "granted") {
              window.addEventListener("deviceorientation", handleOrientation, {
                passive: true,
              });
            }
          } catch (error) {
            console.warn("Device orientation permission denied:", error);
          }
        } else if (window.DeviceOrientationEvent) {
          window.addEventListener("deviceorientation", handleOrientation, {
            passive: true,
          });
        }
      };

      const isMobile =
        typeof window !== "undefined" &&
        /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

        console.log("::::::::::::", isMobile);
        
      // Add mouse move listener with passive flag
      if (!isMobile) {
        window.addEventListener("mousemove", UPDATE, { passive: true });
      } else {
        START();
      }

      // Start orientation tracking on load
      if (document.readyState === "complete") {
        START();
      } else {
        window.addEventListener("load", START, { once: true });
      }

      // Cleanup function
      return () => {
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
        }
        window.removeEventListener("mousemove", UPDATE);
        if (orientationListenerRef.current) {
          window.removeEventListener(
            "deviceorientation",
            orientationListenerRef.current
          );
        }
      };
    },
    { scope: sectionRef, dependencies: [UPDATE, handleOrientation] }
  );

  return (
    <section
      ref={sectionRef}
      className="flex items-center md:items-stretch md:justify-start justify-center h-screen m-0 p-2"
    >
      <div className={styles.build}>
        <div className={styles.assets}>
          <img
            className="sm:w-full w-screen h-full"
            src="https://images.unsplash.com/photo-1706858710254-dcec967b3d8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            // src="https://images.unsplash.com/photo-1558605331-5c7a86519aff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
            alt="Swami Associates"
            loading="lazy"
            decoding="async"
          />
          <h3 className="hidden md:block">3D-WIZ</h3>
          <img
            className="w-screen h-screen md:h-auto"
            // src="https://assets.codepen.io/605876/do-not-copy-osaka-tower.png"
            src="/buildings/transparent-1.png"
            alt="Swami Associates Building"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className={styles.blur}>
          <div>
            <div className="layer z-1"></div>
            <div className="layer z-2"></div>
            <div className="layer z-3"></div>
            <div className="layer z-4"></div>
            <div className="layer z-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
