import React, { ReactNode } from "react";
import ReactCountryFlag from "react-country-flag";
import { AiFillCiCircle } from "react-icons/ai";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoNodejs,
  BiLogoCPlusPlus,
  BiLogoGoLang,
} from "react-icons/bi";
import {
  DiDjango,
  DiDocker,
  DiMongodb,
  DiMysql,
  DiPython,
} from "react-icons/di";
import { FaAws, FaCircle } from "react-icons/fa";
import {
  RiNextjsFill,
  RiNextjsLine,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiC,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJest,
} from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";

export const cardHoverScale =
  "hover:scale-105 duration-100 hover:bg-lighter-black";

export type TechnoType = {
  name: string;
  icon: ReactNode;
};

type SkillsType = {
  type: string;
  technos: TechnoType[];
};

type LanguageType = {
  name: string;
  countryCode: string;
  level: "Native" | "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  status: "Learning" | "On hold" | "Fluent";
  description?: string;
};

export function SectionPrimaryTitle({ title }: { title: string }) {
  return <p className="text-xl font-bold mt-5 ml-3 mb-2 text-white">{title}</p>;
}

export function SectionSecondaryTitle({ title }: { title: string }) {
  return <p className="text-md text-gray-300 font-semibold ml-3">{title}</p>;
}

function Languages() {
  const languages: LanguageType[] = [
    {
      name: "French",
      countryCode: "FR",
      level: "Native",
      status: "Fluent",
    },
    {
      name: "English",
      countryCode: "US",
      level: "C1",
      status: "Fluent",
    },
    {
      name: "Spanish",
      countryCode: "ES",
      level: "B1",
      status: "On hold",
    },
    {
      name: "Korean",
      countryCode: "KR",
      level: "A2",
      status: "Learning",
    },
    {
      name: "Italian",
      countryCode: "IT",
      level: "A1",
      status: "On hold",
    },
    {
      name: "Chinese",
      countryCode: "CN",
      level: "A1",
      status: "On hold",
    },
  ];

  const Progress = {
    Learning: "#0e76a8",
    "On hold": "#F5820D",
    Fluent: "#0CAA41",
  };

  return (
    <div className="">
      <SectionPrimaryTitle title="Languages" />
      <div className="flex mx-5 flex-wrap justify-center md:justify-normal gap-2.5 mt-5">
        {languages.map((language, index) => (
          <div
            className={`bg-light-back ${cardHoverScale} shadow-lg shadow-black px-4 py-4 text-center rounded-lg`}
            style={{ borderWidth: 0 }}
            key={index}
          >
            <ReactCountryFlag
              className="rounded-xl"
              svg
              style={{ width: "4.35em", height: "4.35em" }}
              countryCode={language.countryCode}
            />
            <div className="mt-2">
              <p className="text-base font-semibold text-white">
                {language.name}
              </p>
              <p className="text-sm text-gray-400">{language.level}</p>
            </div>
            <div
              style={{ backgroundColor: Progress[language.status] }}
              className={`flex ${cardHoverScale} mt-3 flex cursor-pointer px-2 py-1 rounded-full bg-white rounded-xs gap-x-1.5 font-medium text-black justify-center`}
            >
              <FaCircle className="self-center" color="#fff" size={7} />
              <p className="text-4xs text-white md:text-3xs justify-self-center">
                {language.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HardSkills() {
  const logoSize = 50;
  const skills: SkillsType[] = [
    {
      type: "General purposes languages",
      technos: [
        {
          name: "Javascript",
          icon: (
            <BiLogoJavascript
              color="#f0db4f"
              className="rounded-full"
              size={logoSize}
            />
          ),
        },
        {
          name: "Typescript",
          icon: (
            <BiLogoTypescript
              className="justify-self-center"
              color="#007acc"
              size={logoSize}
            />
          ),
        },
        {
          name: "C",
          icon: (
            <SiC
              className="justify-self-center"
              color="#007acc"
              size={logoSize}
            />
          ),
        },
        {
          name: "C++",
          icon: (
            <BiLogoCPlusPlus
              className="justify-self-center"
              color="#007acc"
              size={logoSize}
            />
          ),
        },
        {
          name: "Python",
          icon: (
            <DiPython
              className="justify-self-center"
              color="#FFD43B"
              size={logoSize}
            />
          ),
        },
      ],
    },
    {
      type: "Front-end",
      technos: [
        {
          name: "HTML",
          icon: (
            <BiLogoHtml5
              color="#e34c26"
              className="rounded-full"
              size={logoSize}
            />
          ),
        },
        {
          name: "CSS",
          icon: (
            <BiLogoCss3
              color="#264de4"
              className="rounded-full"
              size={logoSize}
            />
          ),
        },
        {
          name: "React",
          icon: <BiLogoReact color="#61dbfb" size={logoSize} />,
        },
        {
          name: "React Native",
          icon: <BiLogoReact color="#61dbfb" size={logoSize} />,
        },
        {
          name: "NextJS",
          icon: <RiNextjsLine color="#111" size={logoSize} />,
        },
        {
          name: "Tailwind",
          icon: <RiTailwindCssFill color="#06b6d4" size={logoSize} />,
        },
        {
          name: "Jest",
          icon: (
            <SiJest
              className="justify-self-center"
              color="#e34c26"
              size={logoSize}
            />
          ),
        },
      ],
    },
    {
      type: "Back-end",
      technos: [
        {
          name: "Nodejs",
          icon: (
            <BiLogoNodejs
              className="justify-self-center"
              color="#41b883"
              size={logoSize}
            />
          ),
        },
        {
          name: "ExpressJs",
          icon: (
            <SiExpress
              className="justify-self-center"
              color="#61dbfb"
              size={logoSize}
            />
          ),
        },
        {
          name: "Golang",
          icon: (
            <BiLogoGoLang
              className="justify-self-center"
              color="#29BEB0"
              size={logoSize}
            />
          ),
        },
        {
          name: "Socket.io",
          icon: (
            <TbBrandSocketIo
              className="justify-self-center"
              color="#4db33d"
              size={logoSize}
            />
          ),
        },
        {
          name: "Django",
          icon: (
            <DiDjango
              className="justify-self-center"
              color="#e34c26"
              size={logoSize}
            />
          ),
        },
      ],
    },
    {
      type: "Databases",
      technos: [
        {
          name: "Firebase",
          icon: (
            <SiFirebase
              className="justify-self-center"
              color="#F5820D"
              size={logoSize}
            />
          ),
        },
        {
          name: "Supabase",
          icon: (
            <RiSupabaseFill
              className="justify-self-center"
              color="#41f883"
              size={logoSize}
            />
          ),
        },
        {
          name: "MongoDB",
          icon: (
            <DiMongodb
              className="justify-self-center"
              color="#4db33d"
              size={logoSize}
            />
          ),
        },
        {
          name: "MySQL",
          icon: (
            <DiMysql color="#00758f" className="rounded-full" size={logoSize} />
          ),
        },
      ],
    },
    {
      type: "Devops",
      technos: [
        {
          name: "Docker",
          icon: (
            <DiDocker
              className="justify-self-center"
              color="#61dbfb"
              size={logoSize}
            />
          ),
        },
        {
          name: "CI",
          icon: (
            <AiFillCiCircle
              className="justify-self-center"
              color="#ff9900"
              size={logoSize}
            />
          ),
        },
      ],
    },
    {
      type: "Code collaboration platforms",
      technos: [
        {
          name: "Github",
          icon: (
            <SiGithub
              className="justify-self-center"
              color="#fff"
              size={logoSize}
            />
          ),
        },
        {
          name: "Gitlab",
          icon: (
            <SiGitlab
              className="justify-self-center"
              color="#fca326"
              size={logoSize}
            />
          ),
        },
      ],
    },
    {
      type: "Cloud",
      technos: [
        {
          name: "AWS",
          icon: (
            <FaAws
              className="justify-self-center"
              color="#ff9900"
              size={logoSize}
            />
          ),
        },
      ],
    },
    {
      type: "Version control systems",
      technos: [
        {
          name: "Git",
          icon: (
            <SiGit
              className="justify-self-center"
              color="#f34f29"
              size={logoSize}
            />
          ),
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      <SectionPrimaryTitle title="Hard skills" />
      {skills.map((skill, index) => (
        <div className="border-t mb-9 border-light-back" key={index}>
          <div className="pt-2">
            <SectionSecondaryTitle title={skill.type} />
          </div>
          <div className="flex mx-5 mt-3 flex-wrap flex-row gap-2 justify-center md:justify-normal">
            {skill.technos.map((techno, index) => (
              <div
                className={`flex flex-col ${cardHoverScale} rounded-lg text-center bg-light-back p-5`}
                key={index}
              >
                <div className="self-center">{techno.icon}</div>
                <p className="text-xs mt-3 font-semibold text-white">
                  {techno.name}
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
    <div className="flex bg-slate-900 md:px-3 flex-col flex-grow gap-10 pb-5">
      <Languages />
      <HardSkills />
    </div>
  );
}
