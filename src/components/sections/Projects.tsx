"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700 sm:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-zinc-100">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-500">{project.period}</p>
        </div>
        {project.links && project.links.length > 0 && (
          <div className="flex gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {link.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        )}
      </div>

      <p className="text-zinc-400">{project.summary}</p>

      <dl className="grid gap-5 border-t border-zinc-800 pt-6 sm:grid-cols-3">
        <div>
          <dt className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            문제 정의
          </dt>
          <dd className="mt-2 text-sm text-zinc-300">{project.problem}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            기술적 해결
          </dt>
          <dd className="mt-2 text-sm text-zinc-300">{project.solution}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            성과
          </dt>
          <dd className="mt-2 text-sm text-zinc-300">{project.result}</dd>
        </div>
      </dl>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-zinc-800/70 px-3 py-1 text-xs text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="문제를 정의하고 해결한 프로젝트"
          description="각 프로젝트는 어떤 문제를 발견했고, 어떤 기술적 선택으로 해결했으며, 어떤 성과로 이어졌는지를 기준으로 정리했습니다."
        />
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
