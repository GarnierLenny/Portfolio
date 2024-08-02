import React from 'react';
import { cardHoverScale, SectionPrimaryTitle, SectionSecondaryTitle, TechnoType } from './Competences.section';
import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoReact, BiLogoTypescript } from 'react-icons/bi';
import { SiC, SiJest } from 'react-icons/si';
import Image, { StaticImageData } from 'next/image';
import Phar from '@/../public/icon_full.png';
import TS from '@/../public/ts-logo.png';
import MCT from '@/../public/mvt.png';
import Iconless from '@/../public/iconless.png';
import { DiPython } from 'react-icons/di';
import { FaCircle } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FiExternalLink } from 'react-icons/fi';

const Progress = {
  'In progress': '#F5820D',
  'Completed': '#0CAA41',
}

type ProjectType = {
  title: string;
  logo: StaticImageData;
  shortDescription: string;
  description: string;
  technologies: TechnoType[];
  status: 'In progress' | 'Completed',
  url: string | undefined;
};

function Project({project}: {project: ProjectType}) {
  const technosColor: {[name: string]: string} = {
    'Javascript': '#f0db4f',
    'Typescript': '#007acc',
    'C': '#007acc',
    'C++': '#007acc',
    'Python': '#FFD43B',
    'HTML': '#e34c26',
    'CSS': '#264de4',
    'React': '#61dbfb',
    'React Native': '#61dbfb',
    'Tailwind': '#06b6d4',
    'Jest': '#e34c26',
    'NodeJs': '#41b883',
    'ExpressJs': '#61dbfb',
  };

  return (
    <div className='flex py-5 rounded-lg pl-5 bg-black grow mx-3'>
      <Image className='rounded-lg justify-self-center self-center size-20 md:size-32' src={project.logo} alt='ProjectLogo' />
      <div className='flex flex-col grow mx-3 md:mx-7'>
        <p className='font-bold text-white'>{project.title}</p>
        <p className='text-xxs text-slate-300 font-medium'>{project.shortDescription}</p>
        <div className='flex my-4'>
          <div style={{backgroundColor: Progress[project.status]}} className={` ${cardHoverScale} flex cursor-pointer px-2 py-1 rounded-full bg-white rounded-xs gap-x-1.5 font-medium text-black`}>
            <FaCircle className='self-center' color='#fff' size={7} />
            <p className='text-4xs md:text-3xs text-white'>{project.status}</p>
          </div>
          <div className='grow transparent' />
        </div>
        <div className='flex gap-1.5 flex-wrap'>
          {project.technologies.map((techno, index) => (
            <div className={` ${cardHoverScale} flex cursor-pointer px-2 py-1 rounded-full bg-white rounded-xs gap-x-1.5 font-medium text-black`} key={index}>
              <FaCircle className='self-center' color={technosColor[techno.name]} size={7} />
              <p className='text-4xs md:text-3xs'>{techno.name}</p>
            </div>
          ))}
        </div>
        <div className='grow' />
        <div className='flex mt-2 gap-x-2'>
          {/* <button className={`${cardHoverScale} grow py-1 flex mt-3 justify-center bg-white rounded-md`}>
            <p className='text-xxs font-bold text-black'>{'See more ->'}</p>
          </button> */}
          {project.url !== 'https://pharmusic.com/' ?
          <button onClick={() => window.open(project.url)} className={`${cardHoverScale} gap-x-1 py-1 grow flex mt-3 justify-center bg-light-red rounded-md`}>
            <p className='text-xxs font-bold text-white'>{'See code'}</p>
            <FiExternalLink className='self-center' size={13} color='#fff' />
          </button>
          :
          <button onClick={() => window.open(project.url)} className={`${cardHoverScale} gap-x-1 py-1 grow flex mt-3 justify-center bg-gradient-to-r from-purple-600 to-yellow-500 rounded-md`}>
            <p className='text-xxs font-bold text-white'>{'See homepage'}</p>
            <FiExternalLink className='self-center' size={13} color='#fff' />
          </button>
          }
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const logoSize = 50;
  const projects: ProjectType[] = [
    {
      title: "PHAR",
      logo: Phar,
      status: 'In progress',
      shortDescription: 'Generates playlist based on Mood with AI',
      description: "",
      url: 'https://pharmusic.com/',
      technologies: [
        {
          name: 'React Native',
          icon: <BiLogoReact color='#61dbfb' size={logoSize} />,
        },
        {
          name: 'Javascript',
          icon: <BiLogoJavascript color='#f0db4f' className='rounded-full' size={logoSize} />,
        },
        {
          name: 'Typescript',
          icon: <BiLogoTypescript className='justify-self-center' color="#007acc" size={logoSize} />,
        },
        {
          name: 'HTML',
          icon: <BiLogoHtml5 color='#e34c26' className='rounded-full' size={logoSize} />,
        },
        {
          name: 'CSS',
          icon: <BiLogoCss3 color='#264de4' className='rounded-full' size={logoSize} />,
        },
        {
          name: 'Jest',
          icon: <SiJest className='justify-self-center' color="#e34c26" size={logoSize} />,
        },
      ],
    },
    {
      title: "Timer sequence",
      logo: TS,
      status: 'Completed',
      shortDescription: 'Creates custom sequences of timers',
      description: "",
      url: 'https://github.com/GarnierLenny/timer-sequence',
      technologies: [
        {
          name: 'React Native',
          icon: <BiLogoReact color='#61dbfb' size={logoSize} />,
        },
        {
          name: 'Javascript',
          icon: <BiLogoJavascript color='#f0db4f' className='rounded-full' size={logoSize} />,
        },
        {
          name: 'Typescript',
          icon: <BiLogoTypescript className='justify-self-center' color="#007acc" size={logoSize} />,
        },
        {
          name: 'HTML',
          icon: <BiLogoHtml5 color='#e34c26' className='rounded-full' size={logoSize} />,
        },
        {
          name: 'CSS',
          icon: <BiLogoCss3 color='#264de4' className='rounded-full' size={logoSize} />,
        },
        {
          name: 'Jest',
          icon: <SiJest className='justify-self-center' color="#e34c26" size={logoSize} />,
        },
      ],
    },
    {
      title: "Minimalist Calorie Tracker",
      logo: MCT,
      status: 'Completed',
      url: 'https://github.com/GarnierLenny/minimalist-calorie-tracker',
      shortDescription: 'Track calorie, water and protein intake',
      description: "",
      technologies: [
        {
          name: 'React Native',
          icon: <BiLogoReact color='#61dbfb' size={logoSize} />,
        },
        {
          name: 'Javascript',
          icon: <BiLogoJavascript color='#f0db4f' className='rounded-full' size={logoSize} />,
        },
        {
          name: 'Typescript',
          icon: <BiLogoTypescript className='justify-self-center' color="#007acc" size={logoSize} />,
        },
        {
          name: 'HTML',
          icon: <BiLogoHtml5 color='#e34c26' className='rounded-full' size={logoSize} />,
        },
        {
          name: 'CSS',
          icon: <BiLogoCss3 color='#264de4' className='rounded-full' size={logoSize} />,
        },
        {
          name: 'Jest',
          icon: <SiJest className='justify-self-center' color="#e34c26" size={logoSize} />,
        },
      ],
    },
    {
      title: "Portfolio",
      logo: Iconless,
      url: 'https://github.com/GarnierLenny/Portfolio',
      status: 'Completed',
      shortDescription: 'A page about me (This page)',
      description: "",
      technologies: [
        {
          name: 'React',
          icon: <BiLogoReact color='#61dbfb' size={logoSize} />,
        },
        {
          name: 'Javascript',
          icon: <BiLogoJavascript color='#f0db4f' className='rounded-full' size={logoSize} />,
        },
        {
          name: 'Typescript',
          icon: <BiLogoTypescript className='justify-self-center' color="#007acc" size={logoSize} />,
        },
        {
          name: 'Tailwind',
          icon: <RiTailwindCssFill color='#06b6d4' size={logoSize} />,
        },
        {
          name: 'HTML',
          icon: <BiLogoHtml5 color='#e34c26' className='rounded-full' size={logoSize} />,
        },
        {
          name: 'CSS',
          icon: <BiLogoCss3 color='#264de4' className='rounded-full' size={logoSize} />,
        },
        {
          name: 'Jest',
          icon: <SiJest className='justify-self-center' color="#e34c26" size={logoSize} />,
        },
      ],
    },
    {
      title: "PyDoku",
      logo: Iconless,
      status: 'Completed',
      url: 'https://github.com/GarnierLenny/Pydoku',
      shortDescription: 'Sudoku game along with solver, made with Python and PyGame',
      description: "",
      technologies: [
        {
          name: 'Python',
          icon: <DiPython className='justify-self-center' color="#FFD43B" size={logoSize} />,
        },
      ],
    },
    {
      title: "Gouache",
      status: 'In progress',
      url: 'https://github.com/GarnierLenny/Gouache',
      logo: Iconless,
      shortDescription: 'A MS Paint clone in C',
      description: "",
      technologies: [
        {
          name: 'C',
          icon: <SiC className='justify-self-center' color="#007acc" size={logoSize} />,
        },
      ],
    },
  ];

  return (
    <div className='grow bg-glaucous pb-6 md:px-3'>
      <SectionPrimaryTitle title='Projects' />
      <SectionSecondaryTitle title="Some of the projects I'm working on" />
      <div className='flex flex-col md:grid md:grid-cols-2 mt-5 gap-y-3 pb-6'>
        {projects.map((project, index) => (
          <div className='flex' key={index}>
            <Project project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};