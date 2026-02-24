"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function ViewMoreCTA() {
  return (
    <ScrollReveal>
      <div className="px-6 py-20 text-center md:px-8 md:py-28 lg:px-16">
        <p className="text-sm text-muted-foreground">
          Want to see more of my work?
        </p>
        <div className="mt-4">
          <Button href="/work" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </ScrollReveal>
  );
}
