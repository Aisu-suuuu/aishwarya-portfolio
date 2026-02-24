"use client";

import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function SelectedProjects() {
  return (
    <section className="px-6 py-20 md:px-8 md:py-28 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-accent">
                Portfolio
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-foreground md:text-4xl lg:text-5xl">
                Selected{" "}
                <span className="font-[family-name:var(--font-serif)] italic">
                  Projects
                </span>
              </h2>
            </div>
            <Button href="/work" variant="ghost" className="hidden md:flex">
              View All &rarr;
            </Button>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              tags={project.tags}
              slug={project.slug}
              thumbnail={project.thumbnail}
              inProgress={project.inProgress}
              index={index}
            />
          ))}
        </div>

        {/* Animation Showreel */}
        <ScrollReveal>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border">
            <div className="relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full"
              >
                <source src="/images/projects/automobile-animation.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 md:p-8">
                <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-white/70">
                  Motion Design
                </p>
                <h3 className="mt-1 text-xl font-bold tracking-[-0.02em] text-white md:text-2xl">
                  High-End Automobile Website Animation
                </h3>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-8 text-center md:hidden">
          <Button href="/work" variant="outline">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
