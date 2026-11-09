// ============================================================
// ABOUT SECTION
// ============================================================

export default function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <span className="text-xs font-bold tracking-[0.4em] text-emerald-400">
            ABOUT NEOVOX
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight sm:text-6xl">
            BEYOND
            <span className="block text-emerald-500">ENTERTAINMENT.</span>
          </h2>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-lg leading-9 text-zinc-300">
            We believe entertainment is more than
            something people consume. It is something
            they experience, explore and remember.
          </p>

          <p className="mt-6 leading-8 text-zinc-500">
            Through game development, technological
            research, audiovisual production and publishing,
            Neovox aims to create a connected ecosystem
            of original ideas and interactive experiences.
          </p>

          <a
            href="#contact"
            className="mt-9 w-fit border-b border-emerald-500 pb-2 text-xs font-bold tracking-widest text-emerald-400 transition hover:text-white"
          >
            LEARN MORE ABOUT US ↗
          </a>
        </div>
      </div>
    </section>
  );
}
