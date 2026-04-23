"use client";
import React from "react";
import { cardHoverScale, SectionPrimaryTitle } from "./Competences.section";
import { BiLogoReact, BiLogoTypescript } from "react-icons/bi";
import { SiJest, SiNestjs, SiOpenai } from "react-icons/si";
import Image, { StaticImageData } from "next/image";
import { DiPython } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FiExternalLink, FiGithub, FiGlobe } from "react-icons/fi";
import Link from "next/link";

// Importations des images (inchangées)
import Phar from "@/../public/icon_full.png";
import MonAmiChefLogo from "@/../public/monamichef_square.png";
import TS from "@/../public/ts-logo.png";
import MCT from "@/../public/mvt.png";
import Iconless from "@/../public/iconless.png";
import RejectCheck from "@/../public/rejectcheck.png";

type ProjectType = {
  title: string;
  logo: StaticImageData;
  shortDescription: string;
  technologies: string[];
  status: "In progress" | "Completed";
  url?: string;
  website?: string;
  rapidapi?: string;
  showCode: boolean;
  detailPage?: string;
};

// Couleurs des technos centralisées
const TECH_COLORS: { [key: string]: string } = {
  "React Native": "#61dbfb",
  Typescript: "#007acc",
  Nestjs: "#e31b5f",
  Jest: "#c21325",
  Tailwind: "#06b6d4",
  Python: "#FFD43B",
  React: "#61dbfb",
  "AI / OpenAI": "#74aa9c",
};

function ProjectCard({ project }: { project: ProjectType }) {
  const {
    title,
    logo,
    shortDescription,
    technologies,
    status,
    url,
    website,
    rapidapi,
    showCode,
    detailPage,
  } = project;

  const card = (
    <div
      className={`group flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 ${detailPage ? "cursor-pointer hover:border-indigo-500/50 hover:bg-white/8" : ""}`}
    >
      {/* Logo Section */}
      <div className="flex-shrink-0 flex items-center justify-center">
        <Image
          className="rounded-2xl size-20 md:size-28 object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500"
          src={logo}
          alt={`${title} logo`}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
              {title}
            </h3>
            <p className="text-sm text-slate-400 mt-1 leading-relaxed">
              {shortDescription}
            </p>
          </div>
          <span
            className={`text-[10px] px-2 py-1 rounded-full border ${
              status === "Completed"
                ? "border-green-500/50 text-green-400 bg-green-500/5"
                : "border-orange-500/50 text-orange-400 bg-orange-500/5"
            }`}
          >
            {status}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-1.5 text-[10px] font-bold text-slate-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
            >
              <div
                className="size-1.5 rounded-full"
                style={{ backgroundColor: TECH_COLORS[tech] || "#fff" }}
              />
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-6">
          {website && (
            <button
              onClick={() => window.open(website)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition-all shadow-lg shadow-indigo-500/20"
            >
              <FiGlobe size={14} /> Live Demo
            </button>
          )}
          {showCode && url && (
            <button
              onClick={() => window.open(url)}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold transition-all border border-white/10"
            >
              <FiGithub size={14} /> Code
            </button>
          )}
          {rapidapi && (
            <button
              onClick={() => window.open(rapidapi)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 rounded-lg text-xs font-bold transition-all border border-blue-500/30"
            >
              RapidAPI
            </button>
          )}
        </div>
      </div>
    </div>
  );

  if (detailPage) {
    return <Link href={detailPage}>{card}</Link>;
  }
  return card;
}

export default function Projects() {
  const projects: ProjectType[] = [
    {
      title: "RejectCheck",
      logo: RejectCheck,
      status: "In progress",
      shortDescription:
        "AI-powered platform that scores job application rejection risk, detects CV/ATS gaps, and runs realistic voice-based AI mock interviews.",
      website: "https://rejectcheck.com",
      showCode: false,
      technologies: ["React", "Typescript", "Nestjs", "AI / OpenAI", "Tailwind"],
    },
    {
      title: "MonAmiChef",
      logo: MonAmiChefLogo,
      status: "In progress",
      shortDescription:
        "AI-powered chef assistant specialized in personalized nutrition and recipe generation.",
      url: "https://github.com/MonAmiChef/MonAmiChef",
      rapidapi: "https://rapidapi.com/GarnierLenny/api/monamichef",
      website: "https://monamichef.com/",
      showCode: true,
      detailPage: "/monamichef",
      technologies: [
        "React Native",
        "Typescript",
        "Nestjs",
        "AI / OpenAI",
        "Tailwind",
      ],
    },
    {
      title: "PHAR",
      logo: Phar,
      status: "Completed",
      shortDescription:
        "A smart playlist generator that analyzes your current mood to curate the perfect music experience.",
      showCode: false,
      technologies: ["React Native", "Typescript", "Nestjs", "Jest"],
    },
    {
      title: "Minimalist Calorie Tracker",
      logo: MCT,
      status: "Completed",
      showCode: true,
      url: "https://github.com/GarnierLenny/minimalist-calorie-tracker",
      shortDescription:
        "Focus on your macros. A clean tool to track calories, water, and protein intake without the fluff.",
      technologies: ["React Native", "Typescript", "Jest"],
    },
  ];

  return (
    <section id="projects" className="bg-slate-900 pb-8 w-full">
      <SectionPrimaryTitle title="Featured Projects" />
      <div className="mb-12">
        <p className="text-slate-400 ml-3 mt-2 max-w-2xl">
          A selection of my recent work, focusing on AI integrations, mobile
          development, and clean architecture.
        </p>
      </div>
      <div className="px-2.5 md:pr-40">
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
