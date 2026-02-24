"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";

export function AboutPreview() {
  return (
    <section className="bg-muted px-6 py-20 md:px-8 md:py-28 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <ScrollReveal>
            <ProfilePhoto className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-border/50" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-accent">
                About Me
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-foreground md:text-4xl">
                Designer, developer,{" "}
                <span className="font-[family-name:var(--font-serif)] italic text-accent">
                  problem solver.
                </span>
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                I&apos;m a UI/UX Designer and Frontend Developer passionate
                about creating digital experiences that are both beautiful and
                functional. With over 3 years of experience working with
                companies like MasterCard, Costco, and Stanza Soft, I bring a
                unique blend of design thinking and technical expertise to every
                project.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                I believe great design is invisible — it guides users
                effortlessly toward their goals while creating moments of
                delight along the way.
              </p>
              <div className="mt-8">
                <Button href="/about" variant="outline">
                  Learn More About Me
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
