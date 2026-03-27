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
      <h2 className="mb-12 text-3xl font-bold">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp) => (
          <div key={exp.company} className="border-l-2 border-neutral-800 pl-6">
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">
                {exp.role}{" "}
                <span className="text-neutral-400">@ {exp.company}</span>
              </h3>
              <span className="font-mono text-sm text-neutral-500">
                {exp.period}
              </span>
            </div>
            <p className="mb-3 text-sm text-neutral-500">{exp.location}</p>
            <ul className="space-y-2">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="text-sm leading-relaxed text-neutral-300">
                  <span className="mr-2 text-neutral-600">&bull;</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
