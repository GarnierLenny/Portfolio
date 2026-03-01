"use client";
import Header from "@/components/Header.component";
import Hero from "@/components/sections/Hero.section";
import Competences from "@/components/sections/Competences.section";
import Experiences from "@/components/sections/Experiences.section";
import Projects from "@/components/sections/Projects.section";
import Contact from "@/components/sections/Contact.section";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  // La ref qui contient les éléments HTML de chaque section
  const itemEls = useRef<(HTMLElement | null)[]>([]);
  const [selected, setSelected] = useState(0);

  // Logique pour détecter la section active au scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let currentSection = 0;

      for (let i = 0; i < itemEls.current.length; i++) {
        const element = itemEls.current[i];
        if (!element) continue;

        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;

        // Active la section si elle occupe le milieu de l'écran
        if (
          scrollY >= elementTop - 150 &&
          scrollY < elementTop + elementHeight - 150
        ) {
          currentSection = i;
          break;
        }
      }

      setSelected(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-slate-900 min-h-screen text-white">
      {/* Le Header (Fixed à gauche sur desktop, bas sur mobile)
        On passe itemEls pour le scroll et le state pour l'UI
      */}
      <Header refs={itemEls} values={{ selected, setSelected }} />

      {/* Le contenu principal */}
      <main className="flex-1 w-full md:ml-64 transition-all duration-300">
        <div className="flex flex-col gap-0">
          {/* On attache les refs ici */}
          <section
            ref={(el) => (itemEls.current[0] = el)}
            className="min-h-screen"
          >
            <Hero />
          </section>
          <section
            ref={(el) => (itemEls.current[1] = el)}
            className="min-h-screen"
          >
            <Competences />
          </section>
          <section
            ref={(el) => (itemEls.current[2] = el)}
            className="min-h-screen"
          >
            <Experiences />
          </section>
          <section
            ref={(el) => (itemEls.current[3] = el)}
            className="min-h-screen"
          >
            <Projects />
          </section>
          <section
            ref={(el) => (itemEls.current[4] = el)}
            className="min-h-screen"
          >
            <Contact />
          </section>
        </div>
      </main>
    </div>
  );
}
