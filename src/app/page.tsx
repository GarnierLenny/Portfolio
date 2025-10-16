"use client";

import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/threejs/Hero.section";
import Projects from "@/components/sections/threejs/Projects.section";
import Experience from "@/components/sections/threejs/Experience.section";
import Contact from "@/components/sections/threejs/Contact.section";

// Dynamic import Three.js scene to avoid SSR issues
const ThreeScene = dynamic(() => import("@/components/ThreeSceneVanilla.component"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black" />,
});

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const itemEls = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Three.js background scene */}
      <ThreeScene scrollProgress={scrollProgress} />

      {/* Minimal top nav - transparent to see stars */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 bg-black/20 backdrop-blur-sm">
        <div className="flex justify-between items-center">
          <div className="text-white font-semibold tracking-wider text-lg">LG</div>
          <div className="flex gap-8 text-sm text-white/80 font-medium">
            <a href="#work" className="hover:text-white transition-colors tracking-wider">
              Work
            </a>
            <a href="#experience" className="hover:text-white transition-colors tracking-wider">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors tracking-wider">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main content - split layout like Cihad Turhan */}
      <main className="relative z-10">
        {/* Hero - Full width with constellation behind */}
        <section
          id="hero"
          ref={(el) => {
            itemEls.current[0] = el;
          }}
        >
          <Hero itemEls={itemEls} />
        </section>

        {/* Rest of content - Split layout with glass effect */}
        <div className="relative min-h-screen">
          {/* Content on left side with glass effect background */}
          <div className="relative z-10 w-full lg:w-1/2 bg-[#0a0a1f]/70 backdrop-blur-xl">
            {/* Projects */}
            <section
              id="work"
              ref={(el) => {
                itemEls.current[1] = el;
              }}
            >
              <Projects />
            </section>

            {/* Experience */}
            <section id="experience">
              <Experience />
            </section>

            {/* Contact */}
            <section id="contact">
              <Contact />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
