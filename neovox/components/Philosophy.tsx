// ============================================================
// PHILOSOPHY SECTION
// ============================================================

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden bg-[#0B1F17] px-6 py-32"
    >
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-emerald-400/10" />
      <div className="absolute -left-40 -bottom-40 h-[500px] w-[500px] rounded-full border border-emerald-400/10" />

      <div className="relative mx-auto max-w-5xl text-center">
        <span className="text-xs font-bold tracking-[0.4em] text-emerald-300">
          OUR PHILOSOPHY
        </span>

        <h2 className="mt-10 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
          IDEAS HAVE NO
          <span className="block text-emerald-400">BOUNDARIES.</span>
        </h2>

        <p className="mx-auto mt-9 max-w-2xl text-base leading-9 text-emerald-100/70">
          We believe the future of entertainment
          belongs to those willing to imagine,
          experiment and create something different.
        </p>
      </div>
    </section>
  );
}
