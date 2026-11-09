// ============================================================
// DIVISIONS SECTION
// ============================================================

// Dados das divisões
const divisions = [
  {
    number: "01",
    name: "NEOVOX GAMES",
    category: "GAME DEVELOPMENT",
    description:
      "Creating original games, immersive worlds and unforgettable interactive experiences.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=85",
    link: "#projects",
  },
  {
    number: "02",
    name: "NEOVOX LABS",
    category: "TECHNOLOGY & R&D",
    description:
      "Exploring new technologies, developing tools and expanding the possibilities of interactive entertainment.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
    link: "#divisions",
  },
  {
    number: "03",
    name: "NEOVOX MEDIA",
    category: "DIGITAL MEDIA & PRODUCTION",
    description:
      "Producing audiovisual content, original soundtracks and stories beyond the screen.",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1000&q=85",
    link: "#divisions",
  },
  {
    number: "04",
    name: "NEOVOX PUBLISHING",
    category: "PUBLISHING & DISTRIBUTION",
    description:
      "Supporting independent creators and bringing original interactive experiences to the world.",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1000&q=85",
    link: "#divisions",
  },
];

export default function Divisions() {
  return (
    <section
      id="divisions"
      className="border-y border-white/10 bg-[#0D0D13] px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Título */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold tracking-[0.4em] text-emerald-400">
              OUR ECOSYSTEM
            </span>

            <h2 className="mt-6 text-4xl font-black sm:text-6xl">
              FOUR PILLARS.
              <span className="block text-emerald-500">ONE VISION.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-zinc-500">
            Different disciplines connected by a
            common purpose: creating the future
            of interactive entertainment.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {divisions.map((division) => (
            <article
              key={division.number}
              className="group overflow-hidden rounded-xl border border-white/10 bg-[#121219] transition duration-300 hover:border-emerald-500/50"
            >
              {/* Imagem */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={division.image}
                  alt={division.name}
                  className="h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-110 group-hover:opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#121219] to-transparent" />

                <span className="absolute left-7 top-7 text-sm font-bold text-emerald-400">
                  {division.number}
                </span>

                <span className="absolute bottom-7 left-7 text-xs font-bold tracking-[0.3em] text-emerald-300">
                  {division.category}
                </span>
              </div>

              {/* Informações */}
              <div className="p-8">
                <h3 className="text-2xl font-black tracking-wide">
                  {division.name}
                </h3>

                <p className="mt-5 min-h-20 text-sm leading-7 text-zinc-400">
                  {division.description}
                </p>

                <a
                  href={division.link}
                  className="mt-7 inline-block text-xs font-bold tracking-widest text-emerald-400 transition hover:text-white"
                >
                  EXPLORE DIVISION ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
