import { services } from "@/lib/services";
import { AccordionItem } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Services — Aishwarya",
  description:
    "UI/UX Design, Web Design, Mobile App Design, Frontend Development, and AI-Assisted Design services.",
};

export default function ServicesPage() {
  return (
    <section className="px-6 pt-32 pb-20 md:px-8 md:pt-40 md:pb-28 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-accent">
            Services
          </p>
          <h1 className="mt-2 text-4xl font-black tracking-[-0.04em] text-foreground md:text-5xl lg:text-6xl">
            What I{" "}
            <span className="font-[family-name:var(--font-serif)] italic">
              Do
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            From research to launch, I offer end-to-end design and development
            services to bring your vision to life.
          </p>
        </ScrollReveal>

        <div className="mt-16 border-t border-border">
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
