"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="실무 경험"
          description="맡았던 역할과 책임, 그리고 그 안에서 만든 변화를 시간 순으로 정리했습니다."
        />

        <ol className="relative flex flex-col gap-10 border-l border-zinc-800 pl-8">
          {experience.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full border-2 border-zinc-950 bg-zinc-500" />

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {item.role}
                  </h3>
                  <span className="text-sm text-zinc-500">{item.period}</span>
                </div>
                <p className="mt-1 break-keep text-sm text-zinc-500">
                  {item.domain}
                </p>

                <ul className="mt-4 flex flex-col gap-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2 break-keep text-sm text-zinc-400"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-zinc-800 pt-5">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-zinc-800/70 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
