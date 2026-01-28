import React from "react";
import {
  cardHoverScale,
  SectionPrimaryTitle,
  SectionSecondaryTitle,
  TechnoType,
} from "./Competences.section";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiC, SiJest, SiNestjs } from "react-icons/si";
import Image, { StaticImageData } from "next/image";
import Phar from "@/../public/icon_full.png";
import MonAmiChef from "@/../public/monamichef_square.png";
import TS from "@/../public/ts-logo.png";
import MCT from "@/../public/mvt.png";
import Iconless from "@/../public/iconless.png";
import { DiPython } from "react-icons/di";
import { FaCircle } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";

const Progress = {
  "In progress": "#F5820D",
  Completed: "#0CAA41",
};

type ProjectType = {
  title: string;
  logo: StaticImageData;
  shortDescription: string;
  description: string;
  technologies: TechnoType[];
  status: "In progress" | "Completed";
  url: string | undefined;
  showCode: boolean;
  website?: string | undefined;
  rapidapi?: string | undefined;
};

function Project({
  title,
  logo,
  shortDescription,
  description,
  technologies,
  status,
  url,
  website = undefined,
  rapidapi = undefined,
  showCode,
}: ProjectType) {
  const technosColor: { [name: string]: string } = {
    Javascript: "#f0db4f",
    Typescript: "#007acc",
    C: "#007acc",
    "C++": "#007acc",
    Python: "#FFD43B",
    HTML: "#e34c26",
    CSS: "#264de4",
    React: "#61dbfb",
    "React Native": "#61dbfb",
    Tailwind: "#06b6d4",
    Jest: "#e34c26",
    NodeJs: "#41b883",
    ExpressJs: "#61dbfb",
  };

  return (
    <div className="flex py-5 rounded-lg pl-5 bg-purple-900 grow mx-3">
      <Image
        className="rounded-lg justify-self-center self-center size-20 md:size-32"
        src={logo}
        alt="ProjectLogo"
      />
      <div className="flex flex-col grow mx-3 md:mx-7">
        <p className="font-bold text-white">{title}</p>
        <p className="text-xxs text-slate-300 font-medium">
          {shortDescription}
        </p>
        <div className="flex my-4">
          <div
            style={{ backgroundColor: Progress[status] }}
            className={` ${cardHoverScale} flex cursor-pointer px-2 py-1 rounded-full bg-white rounded-xs gap-x-1.5 font-medium text-black`}
          >
            <FaCircle className="self-center" color="#fff" size={7} />
            <p className="text-4xs md:text-3xs text-white">{status}</p>
          </div>
          <div className="grow transparent" />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {technologies.map((techno, index) => (
            <div
              className={` ${cardHoverScale} flex cursor-pointer px-2 py-1 rounded-full bg-white rounded-xs gap-x-1.5 font-medium text-black`}
              key={index}
            >
              <FaCircle
                className="self-center"
                color={technosColor[techno.name]}
                size={7}
              />
              <p className="text-4xs md:text-3xs">{techno.name}</p>
            </div>
          ))}
        </div>
        <div className="grow" />
        <div className="flex flex-col mt-2 gap-x-2">
          {/* <button className={`${cardHoverScale} grow py-1 flex mt-3 justify-center bg-white rounded-md`}>
            <p className='text-xxs font-bold text-black'>{'See more ->'}</p>
          </button> */}
          {showCode && (
            <button
              onClick={() => window.open(url)}
              className={`${cardHoverScale} gap-x-1 py-1 grow flex mt-3 justify-center bg-white rounded-md`}
            >
              <p className="text-xxs font-bold text-black">See code</p>
              <FiExternalLink className="self-center" size={13} color="#000" />
            </button>
          )}
          <div className="flex gap-2.5">
            {website && (
              <button
                onClick={() => window.open(website)}
                className={`${cardHoverScale} flex-1 gap-x-1 py-1 grow flex mt-3 bg-orange-500 justify-center rounded-md`}
              >
                <p className="text-xxs font-bold text-white">Go to website</p>
                <FiExternalLink className="self-center" size={13} color="#fff" />
              </button>
            )}
            {rapidapi && (
              <button
                onClick={() => window.open(rapidapi)}
                className={`${cardHoverScale} flex-1 gap-x-1 py-1 grow flex mt-3 bg-blue-700 justify-center rounded-md`}
              >
                <p className="text-xxs font-bold text-white">See API on RapidAPI</p>
                <FiExternalLink className="self-center" size={13} color="#fff" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const logoSize = 50;
  const projects: ProjectType[] = [
    {
      title: "MonAmiChef",
      logo: MonAmiChef,
      status: "In progress",
      shortDescription: "AI powered chef assistant",
      description: "",
      url: "https://github.com/MonAmiChef/MonAmiChef",
      rapidapi: "https://rapidapi.com/GarnierLenny/api/monamichef",
      website: "https://monamichef.com/",
      showCode: true,
      technologies: [
        {
          name: "React Native",
          icon: <BiLogoReact color="#61dbfb" size={logoSize} />,
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
          name: "Nestjs",
          icon: (
            <SiNestjs
              className="justify-self-center"
              color="#e34c26"
              size={logoSize}
            />
          ),
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
        {
          name: "Tailwind",
          icon: <RiTailwindCssFill color="#06b6d4" size={logoSize} />,
        },
      ],
    },
    {
      title: "PHAR",
      logo: Phar,
      status: "Completed",
      shortDescription:
        "School project - Generates playlist based on Mood with AI",
      description: "",
      url: undefined,
      showCode: false,
      technologies: [
        {
          name: "React Native",
          icon: <BiLogoReact color="#61dbfb" size={logoSize} />,
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
          name: "Nestjs",
          icon: (
            <SiNestjs
              className="justify-self-center"
              color="#e34c26"
              size={logoSize}
            />
          ),
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
      title: "Timer sequence",
      logo: TS,
      showCode: true,
      status: "Completed",
      shortDescription: "Creates custom sequences of timers",
      description: "",
      url: "https://github.com/GarnierLenny/timer-sequence",
      technologies: [
        {
          name: "React Native",
          icon: <BiLogoReact color="#61dbfb" size={logoSize} />,
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
      title: "Minimalist Calorie Tracker",
      logo: MCT,
      status: "Completed",
      showCode: true,
      url: "https://github.com/GarnierLenny/minimalist-calorie-tracker",
      shortDescription: "Track calorie, water and protein intake",
      description: "",
      technologies: [
        {
          name: "React Native",
          icon: <BiLogoReact color="#61dbfb" size={logoSize} />,
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
      ],
    },
    {
      title: "Portfolio",
      logo: Iconless,
      showCode: true,
      url: "https://github.com/GarnierLenny/Portfolio",
      status: "Completed",
      shortDescription: "A page about me (This page)",
      description: "",
      technologies: [
        {
          name: "React",
          icon: <BiLogoReact color="#61dbfb" size={logoSize} />,
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
      title: "PyDoku",
      logo: Iconless,
      showCode: true,
      status: "Completed",
      url: "https://github.com/GarnierLenny/Pydoku",
      shortDescription:
        "Sudoku game along with solver, made with Python and PyGame",
      description: "",
      technologies: [
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
  ];

  return (
    <div className="grow bg-purple-700 pb-6 md:px-3">
      <SectionPrimaryTitle title="Projects" />
      <div className="flex flex-col md:grid md:grid-cols-2 mt-5 gap-y-3 pb-6">
        {projects.map(
          (
            {
              title,
              logo,
              shortDescription,
              description,
              technologies,
              status,
              url,
              showCode,
              website,
              rapidapi,
            },
            index
          ) => (
            <div className="flex" key={index}>
              <Project
                title={title}
                logo={logo}
                shortDescription={shortDescription}
                description={description}
                technologies={technologies}
                status={status}
                url={url}
                showCode={showCode}
                website={website}
                rapidapi={rapidapi}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
