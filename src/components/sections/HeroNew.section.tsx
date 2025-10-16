"use client";

import { RefObject } from "react";
import Image from "next/image";
import hat from "../../../public/hat.png";
import { BiRightArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

type HeroProps = {
  itemEls: RefObject<(HTMLElement | null)[]>;
};

export default function HeroNew({ itemEls }: HeroProps) {
  const scrollToContact = () => {
    if (itemEls.current && itemEls.current[4]) {
      itemEls.current[4].scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWork = () => {
    if (itemEls.current && itemEls.current[1]) {
      itemEls.current[1].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-sm text-gray-300">Available for work</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Lenny Garnier
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 font-light">
                Full-Stack Developer
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              I craft exceptional digital experiences with modern web technologies.
              Specialized in React, Next.js, and mobile development. Currently completing
              my Master's at Epitech.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={scrollToWork}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View My Work
                <BiRightArrowAlt size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/GarnierLenny"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                <FiGithub size={24} className="text-white" />
              </a>
              <a
                href="https://linkedin.com/in/lenny-garnier"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                <FiLinkedin size={24} className="text-white" />
              </a>
              <a
                href="mailto:lenny.garnier00@gmail.com"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                <FiMail size={24} className="text-white" />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-2xl opacity-30" />

              {/* Profile Image */}
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <Image
                    src={hat}
                    alt="Lenny Garnier"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-xl">
                  <p className="text-white font-bold text-lg">5+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <BiDownArrowAlt size={24} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}
