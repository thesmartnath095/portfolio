import { getDictionary, type Locale } from "@/lib/i18n";
import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/hero/Hero";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/ui/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getDictionary(locale as Locale);

  return (
    <>
      <Header locale={locale as Locale} nav={t.nav} />
      <main>
        <Hero name={t.hero.name} tagline={t.hero.tagline} />
        <ProjectsSection
          locale={locale as Locale}
          title={t.projects.title}
          descriptions={t.projects}
        />
        <AboutSection
          title={t.about.title}
          bio={t.about.bio}
          stats={t.about.stats}
          skills={t.about.skills}
        />
        <ContactSection contact={t.contact} />
      </main>
      <Footer builtWith={t.footer.builtWith} rights={t.footer.rights} />
    </>
  );
}
