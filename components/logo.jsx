import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import saLogo from "@/public/logo.svg";

const LogoAnimation = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // After a delay, switch from text to the logo image
    const timer = setTimeout(() => {
      setShowText(false);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <AnimatePresence>
        {showText ? (
          <motion.div
            className="logo-text"
            key="text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Swami Associates
          </motion.div>
        ) : (
          <motion.div
            className="logo-image"
            key="image"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8,
            }}
          >
            <Image src={saLogo} alt="construction" width={80} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LogoAnimation;
