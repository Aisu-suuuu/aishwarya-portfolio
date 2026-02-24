"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  thumbnail?: string;
  inProgress?: boolean;
  index?: number;
}

export function ProjectCard({
  title,
  description,
  tags,
  slug,
  thumbnail,
  inProgress,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/work/${slug}`} className="group block">
        <div className="overflow-hidden rounded-2xl border border-border bg-muted transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-lg group-hover:shadow-accent/5">
          {/* Thumbnail */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-border/50">
            {thumbnail ? (
              <img
                src={thumbnail}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-lg text-muted-foreground/50">
                  {title}
                </span>
              </div>
            )}
            {inProgress && (
              <div className="absolute top-4 right-4 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                In Progress
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold tracking-[-0.02em] text-foreground">
                {title}
              </h3>
              <ArrowUpRight
                size={20}
                className="mt-1 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
              />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
