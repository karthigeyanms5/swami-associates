import { useEffect } from "react";
import gsap from "gsap";
import styles from "../sass/module/legacy.module.css";

export default function Legacy() {
  useEffect(() => {
    const UPDATE = ({ x, y }) => {
      gsap.set(document.documentElement, {
        "--x": gsap.utils.mapRange(0, window.innerWidth, -1, 1, x),
        "--y": gsap.utils.mapRange(0, window.innerHeight, -1, 1, y),
      });
    };

    const handleOrientation = (event) => {
      const { beta = 0, gamma = 0 } = event;
      const isLandscape = window.matchMedia("(orientation: landscape)").matches;
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
    };

    window.addEventListener("mousemove", UPDATE);

    // Device orientation permission logic
    const START = () => {
      if (window.DeviceOrientationEvent?.requestPermission) {
        window.DeviceOrientationEvent.requestPermission().then((result) => {
          if (result === "granted") {
            window.addEventListener("deviceorientation", handleOrientation);
          }
        });
      } else {
        window.addEventListener("deviceorientation", handleOrientation);
      }
    };

    //document.body.addEventListener("click", START, { once: true });
    window.addEventListener("load", START, { once: true });
    // Cleanup
    return () => {
      window.removeEventListener("mousemove", UPDATE);
      window.removeEventListener("deviceorientation", handleOrientation);
      // document.body.removeEventListener("click", START);
      window.removeEventListener("load", START);
    };
  }, []);

  return (
    <section className="flex items-center md:items-stretch md:justify-start justify-center h-screen m-0 p-2">
      <div className={styles.build}>
        <div className={styles.assets}>
          <img
            src="https://images.unsplash.com/photo-1558605331-5c7a86519aff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
            alt=""
          />
          <h3 className="hidden md:block">Legacy</h3>{" "}
          <img
            src="https://assets.codepen.io/605876/do-not-copy-osaka-tower.png"
            alt=""
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
