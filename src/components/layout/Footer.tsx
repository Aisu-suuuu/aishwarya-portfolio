"use client";

import Link from "next/link";
import { ArrowUp, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

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

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border">
      {/* CTA Section */}
      <ScrollReveal>
        <div className="mx-auto max-w-[1280px] px-6 py-20 text-center md:px-8 md:py-28 lg:px-16">
          <h2 className="text-3xl font-black tracking-[-0.04em] text-foreground md:text-5xl lg:text-6xl">
            Have a great idea?
            <br />
            <span className="font-[family-name:var(--font-serif)] italic text-accent">
              Let&apos;s make it real.
            </span>
          </h2>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Let&apos;s Work Together
            </Button>
          </div>
        </div>
      </ScrollReveal>

      {/* Footer Body */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between md:px-8 lg:px-16">
          {/* Left */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-lg font-black tracking-[-0.03em] text-foreground"
            >
              Aishwarya
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              UI/UX Designer & Frontend Developer crafting bold, meaningful
              digital experiences.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/solletiaishwarya/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-accent"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.behance.net/solletiaishwar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-accent"
                aria-label="Behance"
              >
                <BehanceIcon size={20} />
              </a>
              <a
                href="mailto:saishwarya.1008@gmail.com"
                className="text-muted-foreground transition-colors hover:text-accent"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-6 md:px-8 lg:px-16">
            <p className="text-xs text-muted-foreground">
              &copy; 2026 Aishwarya. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-accent"
            >
              Back to top
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
