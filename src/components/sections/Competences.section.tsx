"use client";

import React, { ReactNode } from "react";
import ReactCountryFlag from "react-country-flag";
import { AiFillCiCircle } from "react-icons/ai";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoNodejs,
} from "react-icons/bi";
import { DiDocker, DiPostgresql } from "react-icons/di";
import { FaCircle } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiGit,
  SiGithub,
  SiGitlab,
  SiJest,
  SiNestjs,
  SiOpenai,
} from "react-icons/si";

export const cardHoverScale = "hover:scale-105 duration-300";

// Style réutilisable pour les cartes (Glassmorphism + Glow)
const cardStyle = `
  group relative flex flex-col items-center justify-center p-6 
  bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm 
  transition-all duration-300 hover:bg-white/10 
  hover:border-indigo-500/50 hover:shadow-[0_0_25px_rgba(79,70,229,0.2)]
`;

export type TechnoType = {
  name: string;
  icon: ReactNode;
  color: string;
};

type SkillsType = {
  type: string;
  technos: TechnoType[];
};

export function SectionPrimaryTitle({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-bold mt-8 ml-3 mb-4 text-white tracking-tight">
      {title}
    </h2>
  );
}

export function SectionSecondaryTitle({ title }: { title: string }) {
  return (
    <h3 className="text-sm text-indigo-400 uppercase tracking-widest font-bold ml-3 mb-4">
      {title}
    </h3>
  );
}

function Languages() {
  const languages = [
    { name: "French", code: "FR", level: "Native", status: "Fluent" },
    { name: "English", code: "GB", level: "C1", status: "Fluent" },
    { name: "Hindi", code: "IN", level: "A1", status: "Learning" },
    { name: "Korean", code: "KR", level: "A2", status: "On hold" },
  ];

  return (
    <div className="px-3">
      <SectionPrimaryTitle title="Languages" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
        {languages.map((lang, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/20 transition-all"
          >
            <ReactCountryFlag
              countryCode={lang.code}
              svg
              style={{ width: "2.5em", height: "2em" }}
              className="rounded-sm shadow-sm"
            />
            <div>
              <p className="text-sm font-bold text-white">{lang.name}</p>
              <p className="text-xs text-gray-400">
                {lang.level} • <span className="opacity-70">{lang.status}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HardSkills() {
  const logoSize = 40;
  const skills: SkillsType[] = [
    {
      type: "Core Stack & AI", // On met tes forces en premier
      technos: [
        {
          name: "Typescript",
          color: "#007acc",
          icon: <BiLogoTypescript size={logoSize} />,
        },
        {
          name: "NestJs",
          color: "#e31b5f",
          icon: <SiNestjs size={logoSize} />,
        },
        {
          name: "React",
          color: "#61dbfb",
          icon: <BiLogoReact size={logoSize} />,
        },
        {
          name: "Node.js",
          color: "#41b883",
          icon: <BiLogoNodejs size={logoSize} />,
        },
        {
          name: "OpenAI / LLM",
          color: "#74aa9c",
          icon: <SiOpenai size={logoSize} />,
        },
      ],
    },
    {
      type: "Front-end & Mobile",
      technos: [
        {
          name: "React Native",
          color: "#61dbfb",
          icon: <BiLogoReact size={logoSize} />,
        },
        {
          name: "Tailwind",
          color: "#06b6d4",
          icon: <RiTailwindCssFill size={logoSize} />,
        },
        { name: "Figma", color: "#ff46a2", icon: <FiFigma size={logoSize} /> },
        { name: "Jest", color: "#c21325", icon: <SiJest size={logoSize} /> },
      ],
    },
    {
      type: "Backend & Data",
      technos: [
        {
          name: "Supabase",
          color: "#3ecf8e",
          icon: <RiSupabaseFill size={logoSize} />,
        },
        {
          name: "PostgreSQL",
          color: "#336791",
          icon: <DiPostgresql size={logoSize} />,
        },
        {
          name: "Docker",
          color: "#2496ed",
          icon: <DiDocker size={logoSize} />,
        },
      ],
    },
    {
      type: "Tools & Workflow",
      technos: [
        { name: "Github", color: "#fff", icon: <SiGithub size={logoSize} /> },
        {
          name: "Gitlab",
          color: "#fca326",
          icon: <SiGitlab size={logoSize} />,
        },
        {
          name: "CI / CD",
          color: "#ff9900",
          icon: <AiFillCiCircle size={logoSize} />,
        },
        { name: "Git", color: "#f34f29", icon: <SiGit size={logoSize} /> },
      ],
    },
  ];

  return (
    <div className="flex flex-col px-3">
      <SectionPrimaryTitle title="Hard Skills" />
      {skills.map((category, idx) => (
        <div className="mb-10" key={idx}>
          <SectionSecondaryTitle title={category.type} />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {category.technos.map((tech, i) => (
              <div className={`${cardStyle} ${cardHoverScale}`} key={i}>
                {/* Glow Background effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl"
                  style={{ backgroundColor: tech.color }}
                />

                <div
                  className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </div>

                <p className="relative z-10 text-[10px] uppercase tracking-widest mt-4 font-bold text-gray-500 group-hover:text-white transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Competences() {
  return (
    <section
      id="competences"
      className="flex w-full bg-slate-900 min-h-screen flex-col gap-12 py-8"
    >
      <div className="mx-auto w-full">
        <Languages />
        <HardSkills />
      </div>
    </section>
  );
}
