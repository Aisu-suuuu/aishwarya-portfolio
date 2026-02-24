import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { ViewMoreCTA } from "@/components/case-study/ViewMoreCTA";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // We need to handle the async params for metadata
  return params.then(({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };
    return {
      title: `${project.title} — Aishwarya`,
      description: project.description,
    };
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <CaseStudyHero project={project} />

      <CaseStudySection label="01" title="The Challenge" index={0}>
        <p>{project.challenge}</p>
      </CaseStudySection>

      <CaseStudySection label="02" title="Research & Discovery" index={1}>
        <p>{project.research}</p>
      </CaseStudySection>

      <CaseStudySection label="03" title="Design Process" index={2}>
        <p>{project.process}</p>

        {project.screens ? (
          <div className="mt-10">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {project.screens.map((screen) => (
                <div key={screen.label}>
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-accent">
                    {screen.label}
                  </p>
                  <div className="relative max-h-[500px] overflow-hidden rounded-xl border border-border bg-muted">
                    <img
                      src={screen.src}
                      alt={`${project.title} — ${screen.label}`}
                      className="w-full object-cover object-top"
                    />
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-muted to-transparent" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : project.screenshots ? (
          <div className="mt-10 space-y-6">
            {/* Desktop */}
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-accent">
                Desktop
              </p>
              <div className="overflow-hidden rounded-xl border border-border">
                <img
                  src={project.screenshots.desktop}
                  alt={`${project.title} — Desktop View`}
                  className="w-full"
                />
              </div>
            </div>

            {/* Tablet + Mobile side by side */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-accent">
                  Tablet
                </p>
                <div className="overflow-hidden rounded-xl border border-border">
                  <img
                    src={project.screenshots.tablet}
                    alt={`${project.title} — Tablet View`}
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-accent">
                  Mobile
                </p>
                <div className="mx-auto max-w-[240px] overflow-hidden rounded-xl border border-border">
                  <img
                    src={project.screenshots.mobile}
                    alt={`${project.title} — Mobile View`}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="aspect-video rounded-xl bg-border/50 flex items-center justify-center">
              <span className="text-sm text-muted-foreground/50">
                Design Screenshot
              </span>
            </div>
            <div className="aspect-video rounded-xl bg-border/50 flex items-center justify-center">
              <span className="text-sm text-muted-foreground/50">
                Design Screenshot
              </span>
            </div>
          </div>
        )}
      </CaseStudySection>

      <CaseStudySection label="04" title="Final Design" index={3}>
        <p>{project.outcome}</p>

        {project.thumbnail && (
          <div className="mt-8">
            <div className="overflow-hidden rounded-xl border border-border">
              <img
                src={project.thumbnail}
                alt={`${project.title} — Live Design`}
                className="w-full"
              />
            </div>
          </div>
        )}

        {!project.thumbnail && (
          <div className="mt-8">
            <div className="aspect-video rounded-xl bg-border/50 flex items-center justify-center">
              <span className="text-sm text-muted-foreground/50">
                Final Design Mockup
              </span>
            </div>
          </div>
        )}

        {project.liveUrl && (
          <div className="mt-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              View Live Site
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        )}
      </CaseStudySection>

      <ViewMoreCTA />
    </>
  );
}
