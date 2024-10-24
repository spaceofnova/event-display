// This displays where the user touches the screen
"use client";
import { use, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PointDisplay() {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      setPoint({ x: event.touches[0].clientX, y: event.touches[0].clientY });
      setIsVisible(true);
    };

    const handleTouchEnd = () => {
      setIsVisible(false);
    };
    window.addEventListener("touchstart", handleTouchMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
    return () => {
      window.removeEventListener("contextmenu", (e) => {
        e.preventDefault();
      });
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.4 }}
          transition={{ duration: 0.1 }}
          style={{
            position: "fixed",
            top: point.y - 25,
            left: point.x - 25,
            width: 50,
            height: 50,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
          }}
        />
      )}
    </AnimatePresence>
  );
}
