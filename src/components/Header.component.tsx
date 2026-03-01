"use client";
import React, { ReactNode } from "react";
import {
  User,
  Wrench,
  BriefcaseBusiness,
  FolderGit2,
  Mail,
} from "lucide-react";

type SectionType = {
  name: string;
  icon: ReactNode;
};

interface HeaderProps {
  refs: React.MutableRefObject<HTMLElement[] | any[]>;
  values: {
    selected: number;
    setSelected: (index: number) => void;
  };
}

export default function Header({ refs, values }: HeaderProps) {
  const sections: SectionType[] = [
    { name: "About", icon: <User size={20} /> },
    { name: "Skills", icon: <Wrench size={20} /> },
    { name: "Experience", icon: <BriefcaseBusiness size={20} /> },
    { name: "Projects", icon: <FolderGit2 size={20} /> },
    { name: "Contact", icon: <Mail size={20} /> },
  ];

  const executeScroll = (index: number) => {
    values.setSelected(index);
    if (refs.current[index]) {
      refs.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Conteneur fixe pour mobile (en bas ou haut) et sticky pour desktop
    <nav className="fixed flex bottom-6 left-1/2 -translate-x-1/2 z-50 md:translate-x-0 md:left-0 md:top-0 md:bottom-0 md:h-screen md:w-64 items-center justify-center pointer-events-none">
      <div className="flex flex-row md:flex-col gap-2 p-2 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-none md:border-r md:border-l-0 md:border-y-0 md:bg-slate-950/50 w-fit md:w-full pointer-events-auto shadow-2xl md:shadow-none transition-all duration-300">
        {sections.map((section, index) => {
          const isActive = values.selected === index;
          return (
            <button
              key={index}
              onClick={() => executeScroll(index)}
              className={`
                relative flex items-center gap-4 px-4 py-3 md:py-4 rounded-xl md:rounded-r-none md:rounded-l-xl transition-all duration-300 group
                ${isActive ? "text-indigo-400 bg-indigo-400/10" : "text-slate-400 hover:text-white hover:bg-white/5"}
              `}
            >
              {/* Indicateur actif Desktop */}
              {isActive && (
                <div className="hidden md:block absolute right-0 top-2 bottom-2 w-1 bg-indigo-500 rounded-l-full shadow-[0_0_10px_#6366f1]" />
              )}

              <div
                className={`transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}
              >
                {section.icon}
              </div>

              <span
                className={`text-sm font-bold hidden md:block transition-all ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}`}
              >
                {section.name}
              </span>

              {/* Tooltip Mobile (optionnel) */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-[10px] rounded opacity-0 group-hover:opacity-100 md:hidden transition-opacity">
                {section.name}
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
