"use client";

import { motion } from "framer-motion";
import { GlitchText } from "./GlitchText";

interface HeroProps {
  name: string;
  tagline: string;
}

export function Hero({ name, tagline }: HeroProps) {
  return (
    <section className="gradient-mesh relative flex min-h-screen flex-col items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-mono text-5xl font-bold leading-tight text-heading sm:text-7xl md:text-8xl">
          <GlitchText text={name} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="mt-6 font-mono text-lg text-text-muted sm:text-xl"
        >
          {tagline}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-text-muted">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-text-muted to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
