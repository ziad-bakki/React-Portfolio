interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export function ProjectCard({ title, description, tech, link }: ProjectCardProps) {
  const Wrapper = link ? "a" : "div";
  const wrapperProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-colors hover:border-neutral-700"
    >
      <h3 className="mb-2 text-lg font-semibold group-hover:text-white">
        {title}
        {link && (
          <span className="ml-2 text-neutral-600 transition-colors group-hover:text-neutral-400">
            {'\u2197'}
          </span>
        )}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-400">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-neutral-800 px-2 py-1 font-mono text-xs text-neutral-400"
          >
            {t}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}
