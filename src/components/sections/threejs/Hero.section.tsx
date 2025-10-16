"use client";

import { RefObject } from "react";

type HeroProps = {
  itemEls?: RefObject<(HTMLElement | null)[]>;
};

export default function Hero({ itemEls }: HeroProps) {
  const scrollToProjects = () => {
    if (itemEls?.current && itemEls.current[1]) {
      itemEls.current[1].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl w-full">
        {/* Minimalist centered content - dark text on golden Passion glow */}
        <div className="text-center space-y-8">
          {/* Small intro text */}
          <p className="text-gray-800 text-sm md:text-base tracking-widest uppercase font-medium">
            Fullstack developer
          </p>

          {/* Large name - minimalist */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-gray-900 tracking-tight">
            Lenny
            <br />
            <span className="font-bold">Garnier</span>
          </h1>

          {/* Tagline */}
          <p className="text-gray-800 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            Full-Stack Developer crafting digital experiences
            <br />
            with modern web technologies
          </p>

          {/* Minimal CTA */}
          <div className="pt-8">
            <button
              onClick={scrollToProjects}
              className="group relative inline-flex items-center gap-2 text-gray-900 text-sm tracking-widest uppercase border border-gray-900/30 px-8 py-4 hover:bg-gray-900/5 transition-all duration-300"
            >
              View Work
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Scroll indicator - minimal */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-gray-800 tracking-wider">
                SCROLL
              </span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-gray-800 to-transparent" />
            </div>
          </div>
        </div>

        {/* Minimal decoration lines */}
        <div className="absolute top-1/2 left-0 w-8 h-[1px] bg-gray-900/20" />
        <div className="absolute top-1/2 right-0 w-8 h-[1px] bg-gray-900/20" />
      </div>
    </div>
  );
}
