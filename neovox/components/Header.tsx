// ============================================================
// HEADER / NAVIGATION
// ============================================================

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#divisions", label: "DIVISIONS" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#08080C]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Marca */}
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#10B981]">
            <span className="text-2xl font-black">N</span>
          </div>

          <div>
            <span className="text-xl font-black tracking-[0.2em]">NEOVOX</span>
            <span className="ml-2 text-[10px] font-semibold tracking-[0.3em] text-emerald-400">
              GROUP
            </span>
          </div>
        </a>

        {/* Menu desktop */}
        <div className="hidden items-center gap-8 text-[11px] font-bold tracking-widest text-zinc-400 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-emerald-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Botão de contato */}
        <a
          href="#contact"
          className="hidden rounded-md border border-emerald-500/60 px-5 py-3 text-[10px] font-bold tracking-widest transition hover:bg-emerald-600 md:block"
        >
          LET&apos;S TALK ↗
        </a>

        {/* Menu simplificado para mobile */}
        <a
          href="#divisions"
          className="rounded-md border border-white/20 px-4 py-2 text-xs font-bold lg:hidden"
        >
          EXPLORE
        </a>
      </nav>
    </header>
  );
}
