"use client";

import { motion } from "framer-motion";
import { certifications, skillCategories } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <SectionHeading eyebrow="Skills" title="기술 스택" />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
            >
              <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-500">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: skillCategories.length * 0.06 }}
          className="mt-10 flex flex-wrap items-center gap-2"
        >
          <span className="mr-1 text-xs font-medium uppercase tracking-widest text-zinc-500">
            Certifications
          </span>
          {certifications.map((cert) => (
            <Badge key={cert} className="px-2.5 py-0.5 text-[11px]">
              {cert}
            </Badge>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
