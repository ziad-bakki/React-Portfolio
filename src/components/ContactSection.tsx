export function ContactSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-10 text-center">
        <h2 className="mb-4 text-3xl font-bold">Get in Touch</h2>
        <p className="mb-6 text-neutral-400">
          I&apos;m always open to new opportunities and collaborations.
        </p>
        <a
          href="mailto:bakkizia@msu.edu"
          className="inline-block rounded-lg bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
        >
          bakkizia@msu.edu
        </a>
      </div>
    </section>
  );
}
