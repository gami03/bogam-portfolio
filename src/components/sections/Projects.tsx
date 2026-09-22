"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, X } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (id: string) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex h-full flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition-all hover:-translate-y-1 hover:border-zinc-700 sm:gap-6 sm:p-8"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <Badge variant="accent">{project.category}</Badge>
          {project.links && project.links.length > 0 && (
            <div className="flex gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  {link.label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          )}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-zinc-100">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-500">{project.period}</p>
        </div>
      </div>

      <p className="break-keep text-zinc-400">{project.summary}</p>

      <div className="mt-auto flex flex-col gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-zinc-800/70 px-3 py-1 text-xs text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onOpen(project.id)}
          className="inline-flex w-fit items-center gap-1 text-sm font-medium text-zinc-300 transition-colors hover:text-zinc-100"
        >
          자세히 보기
          <ChevronRight size={16} />
        </button>
      </div>
    </motion.article>
  );
}

function ProjectDemoVideo({ videoUrl }: { videoUrl: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/50">
        <p className="text-sm text-zinc-600">시연 영상 준비 중</p>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/50">
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        onError={() => setHasError(true)}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            aria-hidden
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative flex max-h-[85vh] w-full max-w-xl flex-col gap-6 overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="닫기"
              className="absolute right-5 top-5 text-zinc-500 transition-colors hover:text-zinc-200"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col gap-3 pr-8">
              <Badge variant="accent" className="w-fit">
                {project.category}
              </Badge>
              <h3
                id="project-modal-title"
                className="break-keep text-2xl font-semibold text-zinc-100"
              >
                {project.title}
              </h3>
              <p className="text-sm text-zinc-500">{project.period}</p>
            </div>

            <p className="break-keep text-zinc-400">{project.summary}</p>

            {project.videoUrl && (
              <ProjectDemoVideo key={project.id} videoUrl={project.videoUrl} />
            )}

            <div className="flex flex-col gap-3 border-t border-zinc-800 pt-6">
              <h4 className="text-sm font-semibold text-zinc-200">
                문제 해결 및 성과
              </h4>
              <ul className="flex flex-col gap-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2 break-keep text-sm text-zinc-300"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {project.features && project.features.length > 0 && (
              <div className="flex flex-col gap-3 border-t border-zinc-800 pt-6">
                <h4 className="text-sm font-semibold text-zinc-200">
                  핵심 구현 기능
                </h4>
                <ul className="flex flex-col gap-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 break-keep text-sm text-zinc-300"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 border-t border-zinc-800 pt-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-zinc-800/70 px-3 py-1 text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-4 border-t border-zinc-800 pt-6">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-sm text-zinc-300 transition-colors hover:text-zinc-100"
                  >
                    {link.label}
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const activeProject = projects.find((project) => project.id === openId) ?? null;

  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="문제를 정의하고 해결한 프로젝트"
          description="각 프로젝트는 어떤 문제를 발견했고, 어떤 기술적 선택으로 해결했으며, 어떤 성과로 이어졌는지를 기준으로 정리했습니다."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setOpenId}
            />
          ))}
        </div>
      </Container>

      <ProjectModal project={activeProject} onClose={() => setOpenId(null)} />
    </section>
  );
}
