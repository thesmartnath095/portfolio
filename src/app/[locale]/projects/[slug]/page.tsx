import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { getDictionary, locales, type Locale } from "@/lib/i18n";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { Header } from "@/components/ui/Header";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug }))
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!locales.includes(locale as Locale)) notFound();

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const dict = await getDictionary(locale as Locale);

  // Get project-specific detail content from locales
  const slugKey =
    slug === "equipment-tracker" ? "equipmentTracker"
    : slug === "goal-tracker" ? "goalTracker"
    : slug;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const projectLocale = (dict.projects as any)[slugKey] as {
    description: string;
    summary: string;
    problem: string;
    solution: string;
    features: string[];
    challenges: string;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pd = dict.projectDetails as any;

  const t = {
    back: pd.back ?? "← Back",
    techStack: pd.techStack ?? "Tech Stack",
    problem: pd.problem ?? "The Problem",
    solution: pd.solution ?? "The Solution",
    features: pd.features ?? "Key Features",
    challenges: pd.challenges ?? "Challenges",
    viewGithub: pd.viewGithub ?? "View on GitHub",
    viewLive: pd.viewLive ?? "View Live",
    wip: pd.wip ?? "Work in Progress",
    previous: pd.previous ?? "← Previous",
    next: pd.next ?? "Next →",
  };

  const details = {
    summary: projectLocale.summary,
    problem: projectLocale.problem,
    solution: projectLocale.solution,
    features: projectLocale.features,
    challenges: projectLocale.challenges,
  };

  return (
    <>
      <Header locale={locale as Locale} nav={dict.nav} />
      <main>
        <ProjectDetail
          project={project}
          details={details}
          locale={locale}
          t={t}
          prevProject={prevProject}
          nextProject={nextProject}
        />
      </main>
    </>
  );
}
