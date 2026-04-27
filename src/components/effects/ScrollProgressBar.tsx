"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "left",
        background: "var(--color-accent)",
        boxShadow: "0 0 8px var(--color-accent)",
      }}
      className="fixed left-0 top-0 z-50 h-0.5 w-full"
    />
  );
}
