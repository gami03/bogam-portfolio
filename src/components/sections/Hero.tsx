"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { heroContent, siteMeta } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(161,161,170,0.12),_transparent_55%)]"
      />

      <Container className="relative flex flex-col gap-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="accent">
            <Sparkles size={12} />
            {heroContent.availabilityBadge}
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl"
        >
          {heroContent.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg text-zinc-400"
        >
          {heroContent.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Button href={heroContent.primaryCta.href} variant="primary">
            {heroContent.primaryCta.label}
            <ArrowRight size={16} />
          </Button>
          <Button href={heroContent.secondaryCta.href} variant="secondary">
            {heroContent.secondaryCta.label}
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm text-zinc-500"
        >
          {siteMeta.role} · {siteMeta.location}
        </motion.p>
      </Container>
    </section>
  );
}
