// ============================================================
// FOOTER
// ============================================================

const exploreLinks = [
  { href: "#about", label: "About Neovox" },
  { href: "#divisions", label: "Our Divisions" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const corporateItems = [
  "Interactive Entertainment",
  "Independent Development",
  "Technology & Innovation",
  "Publishing & Distribution",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08080C] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Marca */}
          <div>
            <a href="#home" className="text-2xl font-black tracking-[0.2em]">
              NEOVOX
            </a>

            <p className="mt-4 max-w-xs text-xs leading-6 text-zinc-600">
              An independent interactive entertainment group.
              Games, technology and stories.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white">
              EXPLORE
            </h4>

            <div className="mt-6 flex flex-col gap-4 text-xs text-zinc-500">
              {exploreLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-emerald-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Informações */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-white">
              CORPORATE
            </h4>

            <div className="mt-6 flex flex-col gap-4 text-xs text-zinc-500">
              {corporateItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-[10px] tracking-widest text-zinc-600 sm:flex-row">
          <span>© 2026 NEOVOX GROUP. ALL RIGHTS RESERVED.</span>
          <span>WE CREATE WORLDS. WE SHAPE EXPERIENCES.</span>
        </div>
      </div>
    </footer>
  );
}
