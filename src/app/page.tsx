/* eslint-disable react/jsx-key */
"use client"
import Header from "@/components/Header.component";
import Hero from "@/components/sections/Hero.section";
import Competences from "@/components/sections/Competences.section";
import Experiences from "@/components/sections/Experiences.section";
import Projects from "@/components/sections/Projects.section";
import Contact from "@/components/sections/Contact.section";
import { ReactNode, useRef, useState } from "react";

export default function Home() {
  const itemEls = useRef(new Array());
  const sections: ReactNode[] = [
    <Hero itemEls={itemEls} />,
    <Competences />,
    <Experiences />,
    <Projects />,
    <Contact />,
  ];
  const [selected, setSelected] = useState(0);

  if (typeof window !== "undefined") {
    window!.addEventListener('scrollend', () => {
      const scrollY = window.scrollY;
      console.log('Scroll position:', scrollY);
      for (let i = 0; i < sections.length; i++) {
        if (scrollY < itemEls.current[i].offsetTop + (window.innerHeight / 3)) {
          setSelected(i);
          break;
        }
      }
    });
  }

  return (
    <div className="flex flex-col md:flex-row">
      <title>Lenny Garnier</title>
      <Header refs={itemEls} values={{selected, setSelected}} />
      <main className="flex w-full mx-auto flex-col bg-yellow-900">
        {sections.map((section, index) => (
          <div className="flex grow" key={index} ref={(element) => {
            itemEls.current.push(element)
            }}>
            {section}
          </div>
        ))}
      </main>
    </div>
  );
}