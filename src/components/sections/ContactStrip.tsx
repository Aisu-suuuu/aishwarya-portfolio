"use client";

import { Linkedin, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function BehanceIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3h6c1.7 0 3 1.3 3 3s-1.3 3-3 3H3V3z" />
      <path d="M3 9h7c1.7 0 3 1.3 3 3s-1.3 3-3 3H3V9z" />
      <path d="M15 15c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z" />
      <path d="M15 9h8" />
    </svg>
  );
}

const contacts = [
  {
    label: "Email",
    value: "saishwarya.1008@gmail.com",
    href: "mailto:saishwarya.1008@gmail.com",
    icon: <Mail size={20} />,
  },
  {
    label: "LinkedIn",
    value: "solletiaishwarya",
    href: "https://www.linkedin.com/in/solletiaishwarya/",
    icon: <Linkedin size={20} />,
  },
  {
    label: "Behance",
    value: "solletiaishwar",
    href: "https://www.behance.net/solletiaishwar",
    icon: <BehanceIcon size={20} />,
  },
];

export function ContactStrip() {
  return (
    <section className="bg-muted px-6 py-20 md:px-8 md:py-28 lg:px-16">
      <div className="mx-auto max-w-[1280px] text-center">
        <ScrollReveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-accent">
            Get in Touch
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-foreground md:text-4xl lg:text-5xl">
            Let&apos;s work{" "}
            <span className="font-[family-name:var(--font-serif)] italic">
              together
            </span>
          </h2>
        </ScrollReveal>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
          {contacts.map((contact, index) => (
            <ScrollReveal key={contact.label} delay={index * 0.1}>
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all group-hover:border-accent group-hover:bg-accent/10">
                  {contact.icon}
                </span>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground/70">
                    {contact.label}
                  </p>
                  <p className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                    {contact.value}
                  </p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
