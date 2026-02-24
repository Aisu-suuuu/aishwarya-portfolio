"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20 md:px-8 lg:px-16">
      <div className="mx-auto max-w-[1280px] w-full">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[13px] font-medium uppercase tracking-[0.2em] text-accent"
          >
            UI/UX Designer &middot; Frontend Developer &middot; AI Design
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[1.05] tracking-[-0.04em] text-foreground"
          >
            On-Demand Design
            <br />
            <span className="font-[family-name:var(--font-serif)] italic font-normal text-accent">
              for Scaling Brands.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 max-w-lg text-[17px] leading-[1.7] tracking-[-0.01em] text-muted-foreground"
          >
            I&apos;m Aishwarya — a designer and developer with 3+ years of
            experience crafting bold, user-centered digital products for brands
            like MasterCard, Costco, and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex items-center gap-4"
          >
            <Button href="/contact" size="lg">
              Get in Touch
            </Button>
            <Button href="/work" variant="outline" size="lg">
              View Work
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
