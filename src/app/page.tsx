/* eslint-disable react/jsx-key */
"use client"
import Image from "next/image";
import { Inter } from 'next/font/google'
import Header from "@/components/Header.component";
import Hero from "@/components/sections/Hero.section";
import Competences from "@/components/sections/Competences.section";
import Experiences from "@/components/sections/Experiences.section";
import Projects from "@/components/sections/Projects.section";
import Contact from "@/components/sections/Contact.section";
import FAQ from "@/components/sections/Projects.section copy";
import { ReactNode, useRef } from "react";

export default function Home() {
  const sections: ReactNode[] = [
    <Hero />,
    <Competences />,
    <Experiences />,
    <Projects />,
    <Contact />,
    <FAQ />,
  ];
  const itemEls = useRef(new Array())

  return (
    <div>
      <Header refs={itemEls} />
      <main className="flex w-full flex-col self-end">
        {sections.map((section, index) => (
          <div key={index} ref={(element) => {
            itemEls.current.push(element)
            }}>
            {section}
          </div>
        ))}
      </main>
    </div>
  );
}