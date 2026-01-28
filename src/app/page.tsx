/* eslint-disable react/jsx-key */
"use client"
import Header from "@/components/Header.component";
import Hero from "@/components/sections/Hero.section";
import Competences from "@/components/sections/Competences.section";
import Experiences from "@/components/sections/Experiences.section";
import Projects from "@/components/sections/Projects.section";
import Contact from "@/components/sections/Contact.section";
import { ReactNode, useRef, useState, useEffect } from "react";

export default function Home() {
  const itemEls = useRef<(HTMLDivElement | null)[]>([]);
  const sections: ReactNode[] = [
    <Hero itemEls={itemEls} />,
    <Competences />,
    <Experiences />,
    <Projects />,
    <Contact />,
  ];
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let currentSection = 0;

      for (let i = 0; i < itemEls.current.length; i++) {
        const element = itemEls.current[i];
        if (!element) continue;

        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;

        // Considère la section comme active si on est dans ses limites
        if (scrollY >= elementTop - 100 && scrollY < elementTop + elementHeight - 100) {
          currentSection = i;
          break;
        }
      }

      setSelected(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <title>Lenny Garnier</title>
      <Header refs={itemEls} values={{selected, setSelected}} />
      <main className="flex w-full mx-auto flex-col bg-yellow-900">
        {sections.map((section, index) => (
          <div className="flex grow" key={index} ref={(element) => {
            itemEls.current[index] = element;
            }}>
            {section}
          </div>
        ))}
      </main>
    </div>
  );
}