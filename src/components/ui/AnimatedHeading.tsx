"use client";

import { motion } from "framer-motion";
import { letterContainer, letterReveal } from "@/lib/animations";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function AnimatedHeading({ text, className, as: Tag = "h2" }: AnimatedHeadingProps) {
  const words = text.split(" ");

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.3em]"
        variants={letterContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {words.map((word, wi) => (
          <span key={wi} className="inline-flex">
            {word.split("").map((char, ci) => (
              <span key={ci} className="overflow-hidden inline-block">
                <motion.span className="inline-block" variants={letterReveal}>
                  {char}
                </motion.span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
