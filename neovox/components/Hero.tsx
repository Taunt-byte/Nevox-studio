// ============================================================
// HERO SECTION
// ============================================================

const pillars = [
  { number: "01", label: "GAMES" },
  { number: "02", label: "TECHNOLOGY" },
  { number: "03", label: "MEDIA" },
  { number: "04", label: "PUBLISHING" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[850px] items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2000&q=90"
          alt="Atmosfera cinematográfica"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080C] via-[#08080C]/85 to-[#08080C]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080C] via-transparent to-[#08080C]/50" />
      </div>

      {/* Elementos decorativos */}
      <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-emerald-700/20 blur-[150px]" />
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-teal-700/10 blur-[150px]" />

      {/* Conteúdo */}
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-36">
        <div className="max-w-4xl">
          <div className="mb-10 flex items-center gap-4">
            <span className="h-px w-12 bg-emerald-500" />
            <span className="text-xs font-bold tracking-[0.4em] text-emerald-400">
              INTERACTIVE ENTERTAINMENT GROUP
            </span>
          </div>

          <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
            WE CREATE
            <span className="block text-emerald-500">WORLDS.</span>
            WE SHAPE
            <span className="block">EXPERIENCES.</span>
          </h1>

          <p className="mt-9 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            Neovox is an independent entertainment group
            exploring the intersection of games, technology
            and storytelling.

            We create original intellectual properties and
            develop experiences that go beyond entertainment.
          </p>

          {/* Botões */}
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#divisions"
              className="rounded-md bg-emerald-600 px-8 py-4 text-xs font-bold tracking-widest transition hover:bg-emerald-500"
            >
              EXPLORE NEOVOX ↗
            </a>

            <a
              href="#about"
              className="rounded-md border border-white/20 px-8 py-4 text-xs font-bold tracking-widest transition hover:border-emerald-500"
            >
              DISCOVER OUR VISION
            </a>
          </div>
        </div>

        {/* Informações inferiores */}
        <div className="mt-28 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 md:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.number}>
              <span className="text-xs font-bold text-emerald-400">
                {pillar.number}
              </span>
              <p className="mt-2 text-xs tracking-widest text-zinc-400">
                {pillar.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
