"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

export function CaseStudyHero({ project }: { project: Project }) {
  return (
    <section className="px-6 pt-32 pb-16 md:px-8 md:pt-40 md:pb-20 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
            {project.inProgress && (
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                In Progress
              </span>
            )}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-4xl font-black tracking-[-0.04em] text-foreground md:text-5xl lg:text-6xl"
        >
          {project.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-2xl text-lg text-muted-foreground"
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4"
        >
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground/70">
              Role
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">
              {project.role}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground/70">
              Timeline
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">
              {project.timeline}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground/70">
              Client
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">
              {project.client}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground/70">
              Category
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">
              {project.category}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
