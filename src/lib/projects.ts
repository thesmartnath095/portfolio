export interface Project {
  slug: string;
  title: string;
  descriptionKey: string;
  tags: string[];
  thumbnail: string;
  status: "complete" | "wip" | "light";
}

export const projects: Project[] = [
  {
    slug: "resapp",
    title: "ResApp",
    descriptionKey: "resapp.description",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    thumbnail: "/projects/resapp.png",
    status: "complete",
  },
  {
    slug: "equipment-tracker",
    title: "Equipment Tracker",
    descriptionKey: "equipmentTracker.description",
    tags: ["React", "Node.js", "SQLite", "Express"],
    thumbnail: "/projects/equipment-tracker.png",
    status: "wip",
  },
  {
    slug: "goal-tracker",
    title: "Goal Tracker",
    descriptionKey: "goalTracker.description",
    tags: ["React", "Firebase", "Tailwind"],
    thumbnail: "/projects/goal-tracker.png",
    status: "light",
  },
];
