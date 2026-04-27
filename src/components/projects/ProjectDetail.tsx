"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";
import { fadeInUp } from "@/lib/animations";

interface ProjectDetails {
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: string;
}

interface ProjectDetailStrings {
  back: string;
  techStack: string;
  problem: string;
  solution: string;
  features: string;
  challenges: string;
  viewGithub: string;
  viewLive: string;
  wip: string;
  previous: string;
  next: string;
}

interface ProjectDetailProps {
  project: Project;
  details: ProjectDetails;
  locale: string;
  t: ProjectDetailStrings;
  prevProject: Project | null;
  nextProject: Project | null;
}

export function ProjectDetail({ project, details, locale, t, prevProject, nextProject }: ProjectDetailProps) {
  return (
    <div className="min-h-screen">
      {/* Back link */}
      <div className="mx-auto max-w-3xl px-6 pt-10">
        <Link
          href={`/${locale}#projects`}
          className="font-mono text-sm text-text-muted transition-colors hover:text-accent"
        >
          {t.back}
        </Link>
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl px-6 py-12"
      >
        <div className="mb-4 flex items-center gap-3">
          {project.status === "wip" && (
            <span className="rounded-full bg-accent-secondary/20 px-3 py-1 font-mono text-xs uppercase tracking-wider text-accent-secondary">
              {t.wip}
            </span>
          )}
        </div>

        <h1 className="mb-4 font-mono text-4xl font-bold text-heading sm:text-5xl">
          {project.title}
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-text-muted">{details.summary}</p>

        {/* Tech stack */}
        <div className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">
          {t.techStack}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/5 px-3 py-1 font-mono text-sm text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Content sections */}
      <div className="mx-auto max-w-3xl space-y-16 px-6 pb-24">
        {/* Problem */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="mb-4 font-mono text-xl font-semibold text-accent">{t.problem}</h2>
          <p className="leading-relaxed text-text">{details.problem}</p>
        </motion.section>

        {/* Solution */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="mb-4 font-mono text-xl font-semibold text-accent">{t.solution}</h2>
          <p className="leading-relaxed text-text">{details.solution}</p>
        </motion.section>

        {/* Features */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="mb-4 font-mono text-xl font-semibold text-accent">{t.features}</h2>
          <ul className="space-y-2">
            {details.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-text">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Challenges */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="mb-4 font-mono text-xl font-semibold text-accent">{t.challenges}</h2>
          <p className="leading-relaxed text-text">{details.challenges}</p>
        </motion.section>

        {/* Prev / Next navigation */}
        {(prevProject || nextProject) && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 border-t border-white/5 pt-12"
          >
            {prevProject ? (
              <Link
                href={`/${locale}/projects/${prevProject.slug}`}
                className={cn(
                  "flex flex-col gap-1 rounded-xl border border-white/5 bg-surface p-5",
                  "transition-all hover:-translate-y-0.5 hover:border-accent/20"
                )}
              >
                <span className="font-mono text-xs text-text-muted">{t.previous}</span>
                <span className="font-mono font-semibold text-heading">{prevProject.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                href={`/${locale}/projects/${nextProject.slug}`}
                className={cn(
                  "flex flex-col items-end gap-1 rounded-xl border border-white/5 bg-surface p-5",
                  "transition-all hover:-translate-y-0.5 hover:border-accent/20"
                )}
              >
                <span className="font-mono text-xs text-text-muted">{t.next}</span>
                <span className="font-mono font-semibold text-heading">{nextProject.title}</span>
              </Link>
            ) : (
              <div />
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
