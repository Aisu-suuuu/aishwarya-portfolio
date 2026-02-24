import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Contact — Aishwarya",
  description: "Get in touch with Aishwarya for design and development projects.",
};

function BehanceIcon({ size = 24 }: { size?: number }) {
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

const contactMethods = [
  {
    label: "Email",
    value: "saishwarya.1008@gmail.com",
    href: "mailto:saishwarya.1008@gmail.com",
    description: "Drop me a line anytime",
    icon: <Mail size={24} />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/solletiaishwarya",
    href: "https://www.linkedin.com/in/solletiaishwarya/",
    description: "Let's connect professionally",
    icon: <Linkedin size={24} />,
  },
  {
    label: "Behance",
    value: "behance.net/solletiaishwar",
    href: "https://www.behance.net/solletiaishwar",
    description: "View my design portfolio",
    icon: <BehanceIcon size={24} />,
  },
];

export default function ContactPage() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-32 pb-20 md:px-8 md:pt-40 md:pb-28 lg:px-16">
      <div className="mx-auto w-full max-w-[1280px]">
        <ScrollReveal>
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h1 className="mt-2 text-4xl font-black tracking-[-0.04em] text-foreground md:text-5xl lg:text-7xl">
            Let&apos;s work{" "}
            <span className="font-[family-name:var(--font-serif)] italic text-accent">
              together
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Have a project in mind or just want to chat? I&apos;m always open to
            new opportunities and interesting conversations.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {contactMethods.map((method, index) => (
            <ScrollReveal key={method.label} delay={index * 0.1}>
              <a
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group block rounded-2xl border border-border bg-muted p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    {method.icon}
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-[-0.02em] text-foreground">
                  {method.label}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {method.description}
                </p>
                <p className="mt-4 text-sm font-medium text-accent break-all">
                  {method.value}
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
