"use client";
import React from "react";
import {
  SectionPrimaryTitle,
  SectionSecondaryTitle,
} from "./Competences.section";
import { BiRightArrowAlt } from "react-icons/bi";
import ReactCountryFlag from "react-country-flag";
import { IoMdPerson } from "react-icons/io";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

// On garde la cohérence avec ton nouveau style Glassmorphism
const cardStyle = `
  group relative flex flex-col rounded-2xl bg-white/5 border border-white/10 
  p-5 transition-all duration-300 hover:bg-white/10 
  hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(79,70,229,0.1)]
`;

type Experience = {
  title: string;
  location: string;
  countryCode: string;
  start: string;
  end: string;
  position: string;
  status?: string;
  tech?: string[]; // Ajout des technos pour la crédibilité
};

function ExperiencesList({
  title,
  experiences,
  icon,
}: {
  title: string;
  experiences: Experience[];
  icon: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6 mx-4 text-center">
        <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
          {icon}
        </div>
        <SectionSecondaryTitle title={title} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3">
        {experiences.map((exp, index) => (
          <div className={cardStyle} key={index}>
            {/* Header: Title & Flag */}
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-bold text-xl text-white group-hover:text-indigo-400 transition-colors">
                {exp.title}
              </h4>
              <ReactCountryFlag
                svg
                style={{ width: "1.5em", height: "1.2em" }}
                countryCode={exp.countryCode}
                className="rounded-sm opacity-80"
              />
            </div>

            {/* Content */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <IoMdPerson size={14} className="text-indigo-500" />
                <span className="font-medium text-slate-200">
                  {exp.position}
                </span>
                {exp.status && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/60 border border-white/5 uppercase">
                    {exp.status}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <Calendar size={14} />
                <span className="flex items-center gap-1">
                  {exp.start} <BiRightArrowAlt /> {exp.end}
                </span>
              </div>

              <p className="text-xs text-slate-500 italic">{exp.location}</p>

              {/* Optionnel: Si tu ajoutes des technos plus tard */}
              {exp.tech && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[9px] bg-indigo-500/10 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Experiences() {
  const professional: Experience[] = [
    {
      title: "Polycea",
      location: "Paris, France",
      start: "May 2025",
      end: "Jan 2026",
      position: "Full-stack developer",
      status: "CDI",
      countryCode: "FR",
      tech: ["React", "NestJS", "PostgreSQL"],
    },
    {
      title: "Racemappr",
      location: "Berlin, Germany",
      start: "Sept 2024",
      end: "Feb 2025",
      position: "Mobile & Full-stack",
      status: "Freelance",
      countryCode: "DE",
      tech: ["React Native", "Node.js"],
    },
    {
      title: "Feelbat",
      location: "Reunion Island",
      start: "Apr 2023",
      end: "Aug 2023",
      position: "Full-stack intern",
      status: "Internship",
      countryCode: "FR",
    },
    {
      title: "Epitech",
      location: "Reunion Island",
      start: "Sept 2022",
      end: "Mar 2023",
      position: "Pedagogical Assistant",
      status: "Part-time",
      countryCode: "FR",
    },
    {
      title: "Solarplexus",
      location: "Reunion Island",
      start: "Aug 2021",
      end: "Dec 2021",
      position: "Software Engineer",
      status: "Internship",
      countryCode: "FR",
    },
  ];

  const academic: Experience[] = [
    {
      title: "Epitech",
      location: "Reunion Island",
      start: "2020",
      end: "2025",
      position: "Master in Software Architect",
      countryCode: "FR",
    },
    {
      title: "Inha University",
      location: "South Korea",
      start: "2023",
      end: "2024",
      position: "Exchange Student",
      countryCode: "KR",
    },
    {
      title: "Louis Payen",
      location: "Reunion Island",
      start: "2017",
      end: "2020",
      position: "Highschool Student",
      countryCode: "FR",
    },
  ];

  return (
    <section id="experiences" className="bg-slate-900 pb-8 w-full">
      <div>
        <SectionPrimaryTitle title="Career Path" />
        <ExperiencesList
          title="Professional Journey"
          experiences={professional}
          icon={<Briefcase size={20} />}
        />
        <ExperiencesList
          title="Academic Background"
          experiences={academic}
          icon={<GraduationCap size={20} />}
        />
      </div>
    </section>
  );
}
