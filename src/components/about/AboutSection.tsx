"use client";

import { motion } from "framer-motion";
import { Counter } from "./Counter";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";

interface AboutSectionProps {
  title: string;
  bio: string;
  stats: {
    projects: string;
    languages: string;
    yearsExp: string;
  };
}

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Python",
  "Git",
  "Linux",
  "Windows Server",
];

export function AboutSection({ title, bio, stats }: AboutSectionProps) {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-32">
      <AnimatedHeading
        text={title}
        className="mb-16 font-mono text-3xl font-bold text-heading sm:text-4xl"
      />

      <div className="grid gap-16 lg:grid-cols-2">
        {/* Text side */}
        <motion.div
          className="flex flex-col gap-8"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-lg leading-relaxed text-text">{bio}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-white/10 bg-surface px-3 py-1.5 font-mono text-xs text-text-muted transition-colors hover:border-accent/30 hover:text-accent"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stats side */}
        <motion.div
          className="flex items-center justify-center"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-3 gap-12">
            <Counter target={3} label={stats.projects} />
            <Counter target={2} label={stats.languages} />
            <Counter target={4} label={stats.yearsExp} suffix="+" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
