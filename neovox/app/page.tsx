/*
 * ============================================================
 * NEOVOX GROUP — INSTITUTIONAL HOMEPAGE
 * Arquivo: app/page.tsx
 *
 * Descrição:
 * Página institucional do grupo Neovox.
 * Cada seção fica em seu próprio arquivo em components/.
 *
 * Tecnologias:
 * - Next.js
 * - React
 * - TypeScript
 * - Tailwind CSS
 * ============================================================
 */

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Divisions from "@/components/Divisions";
import Projects from "@/components/Projects";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08080C] text-white">
      <Header />
      <Hero />
      <About />
      <Divisions />
      <Projects />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}
