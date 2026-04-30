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
  skills: {
    frontend: { label: string };
    backend: { label: string };
    systems: { label: string };
  };
}

const skillCategories = [
  {
    key: "frontend" as const,
    color: "var(--color-accent)",
    bg: "oklch(from var(--color-accent) l c h / 0.08)",
    border: "oklch(from var(--color-accent) l c h / 0.25)",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    key: "backend" as const,
    color: "var(--color-accent-secondary)",
    bg: "oklch(from var(--color-accent-secondary) l c h / 0.08)",
    border: "oklch(from var(--color-accent-secondary) l c h / 0.25)",
    items: ["Node.js", "PostgreSQL", "Python"],
  },
  {
    key: "systems" as const,
    color: "#4ade80",
    bg: "oklch(from #4ade80 l c h / 0.08)",
    border: "oklch(from #4ade80 l c h / 0.25)",
    items: ["Git", "Linux", "Windows Server"],
  },
];

export function AboutSection({ title, bio, stats, skills }: AboutSectionProps) {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-32">
      <AnimatedHeading
        text={title}
        className="mb-16 font-mono text-3xl font-bold text-heading sm:text-4xl"
      />

      <div className="grid gap-16 lg:grid-cols-2">
        {/* Text side */}
        <motion.div
          className="flex flex-col gap-10"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-lg leading-relaxed text-text">{bio}</p>

          {/* Categorized skills */}
          <div className="flex flex-col gap-6">
            {skillCategories.map((cat) => (
              <div key={cat.key} className="flex flex-col gap-2.5">
                <span
                  className="font-mono text-[11px] uppercase tracking-widest"
                  style={{ color: cat.color }}
                >
                  {skills[cat.key].label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg px-3 py-1.5 font-mono text-xs text-heading transition-opacity hover:opacity-80"
                      style={{
                        background: cat.bg,
                        border: `1px solid ${cat.border}`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
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
