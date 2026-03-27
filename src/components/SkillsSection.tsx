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
      <h2 className="mb-12 text-3xl font-bold">Skills</h2>
      <div className="grid gap-8 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-neutral-500">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
