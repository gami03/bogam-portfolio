"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Check, Copy, Download } from "lucide-react";
import { heroContent, siteMeta } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(siteMeta.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable; no-op.
    }
  }

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
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {heroContent.availabilityBadge}
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl break-keep text-4xl font-semibold leading-tight text-zinc-100 sm:text-5xl"
        >
          {heroContent.headlinePrefix}
          <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            {heroContent.headlineHighlight}
          </span>
          {heroContent.headlineSuffix}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl break-keep text-lg text-zinc-400"
        >
          {heroContent.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Button href="#projects" variant="primary">
            프로젝트 둘러보기
            <ArrowDown size={16} />
          </Button>
          <Button href={siteMeta.resumeUrl} download variant="secondary">
            <Download size={16} />
            이력서 다운로드
          </Button>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-800 bg-transparent px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors duration-200 hover:border-zinc-600 hover:bg-zinc-900"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "이메일 복사됨" : "이메일 복사"}
          </button>
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
