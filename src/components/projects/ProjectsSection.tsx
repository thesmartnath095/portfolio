"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { staggerContainer } from "@/lib/animations";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import type { Locale } from "@/lib/i18n";

interface ProjectsSectionProps {
  locale: Locale;
  title: string;
  descriptions: Record<string, string | { description: string }>;
}

export function ProjectsSection({
  locale,
  title,
  descriptions,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-32">
      <AnimatedHeading
        text={title}
        className="mb-16 font-mono text-3xl font-bold text-heading sm:text-4xl"
      />

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => {
          const key = project.slug === "equipment-tracker"
            ? "equipmentTracker"
            : project.slug === "goal-tracker"
              ? "goalTracker"
              : project.slug;
          const entry = descriptions[key];
          const desc = typeof entry === "object" ? entry.description : "";

          return (
            <ProjectCard
              key={project.slug}
              project={project}
              description={desc}
              locale={locale}
            />
          );
        })}
      </motion.div>
    </section>
  );
}
