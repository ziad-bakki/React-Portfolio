"use client";

import { motion } from "motion/react";

const skillGroups = [
  {
    category: "Languages",
    items: ["TypeScript", "Python", "Go", "C++", "PostgreSQL", "NoSQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Next.js", "Angular", "FastAPI", "Gin", "Flask", "Pandas", "NumPy"],
  },
  {
    category: "Cloud & Tools",
    items: ["AWS", "Docker", "Vercel", "Git", "Google Cloud"],
  },
];

export function SkillsSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <motion.h2
        className="mb-12 text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <div className="grid gap-8 sm:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
          >
            <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-500">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, itemIndex) => (
                <motion.span
                  key={item}
                  className="rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm text-neutral-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: groupIndex * 0.1 + itemIndex * 0.05,
                  }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgb(115 115 115)",
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
