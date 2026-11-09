// ============================================================
// PROJECTS SECTION
// ============================================================

// Dados dos projetos
const projects = [
  {
    number: "PROJECT 001",
    title: "PROJECT ECLIPSE",
    category: "SURVIVAL HORROR",
    status: "IN DEVELOPMENT",
    description:
      "An original survival horror experience focused on atmosphere, exploration and narrative.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "PROJECT 002",
    title: "NEOVOX ENGINE",
    category: "GAME TECHNOLOGY",
    status: "RESEARCH & DEVELOPMENT",
    description:
      "Researching and developing technologies for the next generation of interactive experiences.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <span className="text-xs font-bold tracking-[0.4em] text-emerald-400">
            OUR WORK
          </span>

          <h2 className="mt-6 text-4xl font-black sm:text-6xl">
            PROJECTS &
            <span className="block text-emerald-500">INNOVATION.</span>
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-zinc-500">
            Discover the projects and technologies
            shaping the future of Neovox.
          </p>
        </div>

        {/* Lista de projetos */}
        <div className="space-y-10">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group grid overflow-hidden rounded-xl border border-white/10 bg-[#101016] lg:grid-cols-2"
            >
              <div className="relative min-h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="text-xs font-bold tracking-[0.3em] text-emerald-400">
                  {project.number}
                </span>

                <h3 className="mt-5 text-3xl font-black sm:text-4xl">
                  {project.title}
                </h3>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="text-[10px] font-bold tracking-widest text-zinc-400">
                    {project.category}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-emerald-500" />

                  <span className="text-[10px] font-bold tracking-widest text-emerald-400">
                    {project.status}
                  </span>
                </div>

                <p className="mt-7 leading-8 text-zinc-400">
                  {project.description}
                </p>

                <a
                  href="#contact"
                  className="mt-9 w-fit border-b border-emerald-500 pb-2 text-xs font-bold tracking-widest text-emerald-400"
                >
                  PROJECT DETAILS ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
