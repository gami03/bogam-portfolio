"use client";

import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { navLinks, siteMeta } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { GithubIcon } from "@/components/ui/icons";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-900 bg-zinc-950/70 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-tight text-zinc-100"
        >
          {siteMeta.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={siteMeta.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-zinc-400 transition-colors hover:text-zinc-100"
            aria-label="GitHub"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={siteMeta.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-1.5 text-sm text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-900"
          >
            <FileText size={14} />
            이력서
          </a>
        </div>

        <button
          type="button"
          className="text-zinc-300 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="메뉴 열기"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {isOpen && (
        <nav className="border-t border-zinc-900 bg-zinc-950 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={siteMeta.github}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-zinc-300"
              >
                GitHub
              </a>
              <a
                href={siteMeta.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-zinc-300"
              >
                이력서
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
