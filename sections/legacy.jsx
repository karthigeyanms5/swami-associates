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

    document.body.addEventListener("click", START, { once: true });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", UPDATE);
      window.removeEventListener("deviceorientation", handleOrientation);
      document.body.removeEventListener("click", START);
    };
  }, []);

  return (
    <section className="flex items-center md:items-stretch md:justify-start justify-center min-h-[100svh] m-0 p-2">
      <div className={styles.build}>
        <div className={styles.assets}>
          <img
            src="https://assets.codepen.io/605876/do-not-copy-osaka-sky.jpeg"
            alt=""
          />
          <h3 class="hidden md:block">Legacy</h3>{" "}
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
        {/* <div className={styles.content}>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path
                                d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                            <path fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                                clipRule="evenodd" />
                        </svg>
                        <span>Osaka Castle</span>
                    </p>
                    <p>Osaka, Japan</p>
                </div> */}
      </div>
    </section>
  );
}
