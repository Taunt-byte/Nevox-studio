// ============================================================
// PARTNERSHIPS / CONTACT
// ============================================================

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold tracking-[0.4em] text-emerald-400">
              LET&apos;S BUILD SOMETHING
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight sm:text-6xl">
              CREATE THE
              <span className="block text-emerald-500">UNEXPECTED.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="leading-8 text-zinc-400">
              We are open to creative collaborations,
              business opportunities and partnerships
              with people who share our vision.
            </p>

            {/* Substituir pelo endereço oficial antes do lançamento */}
            <a
              href="mailto:contact@neovox.games"
              className="mt-9 w-fit rounded-md bg-emerald-600 px-8 py-4 text-xs font-bold tracking-widest transition hover:bg-emerald-500"
            >
              CONTACT NEOVOX ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
