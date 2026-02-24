"use client";

import { services } from "@/lib/services";
import { AccordionItem } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ServicesOverview() {
  return (
    <section className="px-6 py-20 md:px-8 md:py-28 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-accent">
            Services
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-foreground md:text-4xl lg:text-5xl">
            What I{" "}
            <span className="font-[family-name:var(--font-serif)] italic">
              Do
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            From research to launch, I offer end-to-end design and development
            services to bring your vision to life.
          </p>
        </ScrollReveal>

        <div className="mt-12 border-t border-border">
          {services.map((service, index) => (
            <AccordionItem
              key={service.title}
              title={service.title}
              index={index}
            >
              <p>{service.description}</p>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}
