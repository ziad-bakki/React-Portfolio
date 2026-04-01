"use client";

import { motion } from "motion/react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Amazon Capstone Project",
    location: "East Lansing, MI",
    period: "Sep - Dec 2025",
    bullets: [
      "Architected a full-stack AI agent orchestration platform on AWS enabling Amazon sellers to automate dynamic pricing, inventory restocking, and sales reporting via configurable schedule-driven agents; awarded 1st place Amazon Sigma Award.",
      "Built Python/FastAPI backend integrating AWS Bedrock AgentCore and Claude LLMs with Amazon SP-API, processing 16 event types via EventBridge and SQS.",
      "Designed multi-tenant DynamoDB architecture across 7 tables with GSIs for agent state, audit trails, and TTL-based session management.",
      "Delivered Next.js 15/React 19 dashboard with agent creation wizards, real-time status polling, and three-column action approval views; containerized with Docker and deployed on AWS ECS with Cognito JWT auth.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Rocket Mortgage",
    location: "Detroit, MI",
    period: "May - Aug 2025",
    bullets: [
      "Built an interactive node-edge workflow diagram editor using Angular and ngx-vflow with drag-and-drop canvas interactions, improving workflow creation productivity by 75%.",
      "Designed TypeScript data models to match existing C#/.NET backend contracts, ensuring type-safe serialization across the stack.",
      "Wrote unit and integration tests to validate diagram serialization and edge case workflow configurations.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Tanweer Energy Solutions",
    location: "Baghdad, Iraq",
    period: "Jun 2024 - Jan 2025",
    bullets: [
      "Developed an interactive web-based solar energy planning tool for residential and commercial customers.",
      "Integrated Google Maps API for interactive location selection and NASA POWER API for location-specific solar irradiance data.",
      "Built a Flask/Node.js backend serving solar panel and battery product catalogs from Excel-based inventory.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <motion.h2
        className="mb-16 text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-neutral-800 sm:left-1/2 sm:-translate-x-px" />

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={exp.company}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 z-10 sm:left-1/2 sm:-translate-x-1/2">
                <motion.div
                  className="h-[15px] w-[15px] rounded-full border-2 border-neutral-600 bg-neutral-950"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.15 + 0.2,
                    type: "spring",
                    stiffness: 300,
                  }}
                />
              </div>

              {/* Content card */}
              <div
                className={`ml-8 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                  isLeft ? "sm:mr-auto sm:pr-0" : "sm:ml-auto sm:pl-0"
                }`}
              >
                <motion.div
                  className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-5"
                  whileHover={{ borderColor: "rgb(82 82 82)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">
                      {exp.role}{" "}
                      <span className="text-neutral-400">@ {exp.company}</span>
                    </h3>
                  </div>
                  <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-mono text-sm text-neutral-500">
                      {exp.period}
                    </span>
                    <span className="text-neutral-700">&middot;</span>
                    <span className="text-sm text-neutral-500">
                      {exp.location}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-sm leading-relaxed text-neutral-300"
                      >
                        <span className="mr-2 text-neutral-600">&bull;</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
