import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "AI Agent Orchestration Platform",
    description:
      "Full-stack platform on AWS enabling Amazon sellers to automate dynamic pricing, inventory restocking, and sales reporting via configurable schedule-driven agents. Awarded 1st place Amazon Sigma Award.",
    tech: ["Next.js", "React", "Python", "FastAPI", "AWS", "DynamoDB", "Docker"],
    link: undefined,
  },
  {
    title: "Guitar Transcription Tool",
    description:
      "Browser-based tool that transcribes guitar audio into chords and tablature using Spotify's Basic Pitch ML model for pitch detection and a custom FFT-based chroma analysis pipeline.",
    tech: ["TypeScript", "TensorFlow.js", "Next.js"],
    link: "https://github.com/ziad-bakki/AI-Guitar-Transcription-Tool",
  },
  {
    title: "Tetris",
    description:
      "Full-stack Tetris web app with classic gameplay mechanics including hold piece, hard/soft drop, next-piece preview, and shuffle-bag randomization. Google OAuth and persistent leaderboards.",
    tech: ["Go", "Next.js", "TypeScript", "Supabase", "Docker", "Google Cloud"],
    link: "https://tetris-vert.vercel.app/",
  },
  {
    title: "Solar Energy Planning Tool",
    description:
      "Interactive web-based solar energy planning tool for residential and commercial customers, integrating Google Maps API and NASA POWER API for location-specific solar irradiance data.",
    tech: ["Flask", "Node.js", "Google Maps API", "NASA POWER API"],
    link: undefined,
  },
];

export default function Portfolio() {
  return (
    <main className="mx-auto max-w-5xl px-6 pt-28 pb-20">
      <h1 className="mb-4 text-4xl font-bold">Portfolio</h1>
      <p className="mb-12 text-neutral-400">
        A selection of projects I&apos;ve built.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
}
