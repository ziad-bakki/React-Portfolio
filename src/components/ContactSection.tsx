"use client";

import { motion } from "motion/react";

export function ContactSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <motion.div
        className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-4 text-3xl font-bold">Get in Touch</h2>
        <p className="mb-6 text-neutral-400">
          I&apos;m always open to new opportunities and collaborations.
        </p>
        <motion.a
          href="mailto:bakkizia@msu.edu"
          className="inline-block rounded-lg bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          bakkizia@msu.edu
        </motion.a>
      </motion.div>
    </section>
  );
}
