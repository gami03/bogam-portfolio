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
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-center pt-8"
      >
        <div className="h-[350px] w-[600px] rounded-full bg-gradient-to-tr from-blue-600/30 to-indigo-500/20 blur-[130px]" />
      </div>

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

        <div className="flex flex-col gap-3">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-xs font-medium uppercase tracking-widest text-sky-400/80 sm:text-sm"
          >
            {heroContent.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl break-keep text-3xl font-semibold leading-tight text-zinc-100 sm:text-4xl lg:text-5xl"
          >
            <span className="block">{heroContent.headlineLine1}</span>
            <span className="block">
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                {heroContent.headlineHighlight}
              </span>
              {heroContent.headlineSuffix}
            </span>
          </motion.h1>
        </div>

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
          className="flex flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
        >
          <Button href="#projects" variant="primary" className="w-full sm:w-auto">
            프로젝트 둘러보기
            <ArrowDown size={16} />
          </Button>
          <Button
            href={siteMeta.resumeUrl}
            download
            variant="secondary"
            className="w-full sm:w-auto"
          >
            <Download size={16} />
            이력서 다운로드
          </Button>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-800 bg-transparent px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors duration-200 hover:border-zinc-600 hover:bg-zinc-900 sm:w-auto"
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
