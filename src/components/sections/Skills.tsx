"use client";

import { motion } from "framer-motion";
import { Award, Database, Layout, Wrench, type LucideIcon } from "lucide-react";
import { skillCategories, type SkillIconKey } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

const iconMap: Record<SkillIconKey, LucideIcon> = {
  database: Database,
  layout: Layout,
  tool: Wrench,
  award: Award,
};

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <SectionHeading eyebrow="Skills" title="기술 스택" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="flex h-full flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-sm font-medium uppercase tracking-widest text-zinc-300">
                    {category.category}
                  </h3>
                </div>

                <p className="break-keep text-sm text-zinc-400">
                  {category.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {category.items.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
