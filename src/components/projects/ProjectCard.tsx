"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  description: string;
  locale: string;
}

export function ProjectCard({
  project,
  description,
  locale,
}: ProjectCardProps) {
  return (
    <motion.div variants={fadeInUp} className="h-full">
      <Link
        href={`/${locale}/projects/${project.slug}`}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/5 bg-surface",
          "transition-all duration-300",
          "hover:-translate-y-1 hover:border-accent/20 hover:shadow-[0_0_30px_-10px_var(--color-accent)]"
        )}
      >
        {/* Thumbnail area */}
        <div className="relative aspect-video overflow-hidden bg-background">
          {/* Grain overlay */}
          <div
            className={cn(
              "absolute inset-0 z-10 opacity-40 mix-blend-overlay transition-opacity duration-500",
              "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')]",
              "group-hover:opacity-0"
            )}
          />
          {/* Placeholder gradient for now (replace with actual thumbnails later) */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-surface to-accent-secondary/10 transition-transform duration-500 group-hover:scale-105" />

          {/* WIP badge */}
          {project.status === "wip" && (
            <span className="absolute right-3 top-3 z-20 rounded-full bg-accent-secondary/20 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-secondary">
              WIP
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="font-mono text-lg font-semibold text-heading">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-text-muted">{description}</p>

          {/* Tags */}
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[11px] text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
