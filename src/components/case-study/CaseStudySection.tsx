"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface CaseStudySectionProps {
  label: string;
  title: string;
  children: React.ReactNode;
  index?: number;
}

export function CaseStudySection({
  label,
  title,
  children,
  index = 0,
}: CaseStudySectionProps) {
  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-t border-border py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-16">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
            <div>
              <p className="text-xs uppercase tracking-wider text-accent">
                {label}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-foreground md:text-3xl">
                {title}
              </h2>
            </div>
            <div className="leading-relaxed text-muted-foreground">
              {children}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
