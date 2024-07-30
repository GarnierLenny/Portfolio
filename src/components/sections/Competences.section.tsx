import palette from '@/utils/palette.utils';
import React, { ReactNode } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { AiFillCiCircle } from 'react-icons/ai';
import { BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoHtml5, BiLogoCss3, BiLogoNodejs, BiLogoCPlusPlus, BiLogoGoLang } from "react-icons/bi";
import { BsGitlab } from 'react-icons/bs';
import { DiAws, DiDjango, DiDocker, DiFirebase, DiHaskell, DiMongodb, DiMysql, DiPython } from 'react-icons/di';
import { FaAws, FaGitlab } from 'react-icons/fa';
import { RiTailwindCssFill, RiVuejsLine } from 'react-icons/ri';
import { SiC, SiExpress, SiFirebase, SiGit, SiGithub, SiGitlab, SiJest, SiNestjs } from 'react-icons/si';
import { TbBrandReactNative, TbBrandSocketIo } from 'react-icons/tb';

type SkillsType = {
  type: string,
  technos: {
    name: string,
    icon: ReactNode,
  }[]
};

type LanguageType = {
  name: string,
  countryCode: string,
  level:
    'Native' |
    'A1' |
    'A2' |
    'B1' |
    'B2' |
    'C1' |
    'C2',
  description?: string,
};

function SectionPrimaryTitle({title}: {title: string}) {
  return (
    <p className='text-xl font-bold mt-7 ml-3 mb-2'>{title}</p>
  );
};

function SectionSecondaryTitle({title}: {title: string}) {
  return (
    <p className='text-md text-gray-300 font-semibold mt-3 ml-3'>{title}</p>
  );
};

function Languages() {
  const languages: LanguageType[] = [
    {
      name: 'French',
      countryCode: 'FR',
      level: 'Native',
    },
    {
      name: 'English',
      countryCode: 'US',
      level: 'C1',
    },
    {
      name: 'Spanish',
      countryCode: 'ES',
      level: 'B1',
    },
    {
      name: 'Korean',
      countryCode: 'KR',
      level: 'A2',
    },
    {
      name: 'Italian',
      countryCode: 'IT',
      level: 'A1',
    },
  ];

  return (
    <div className='justify-center'>
      <SectionPrimaryTitle title="Languages" />
      <div className='flex flex-wrap justify-center gap-2.5 mt-5'>
        {languages.map((language, index) => (
          <div className='bg-light-back shadow-lg shadow-black px-4 py-4 text-center rounded-lg' style={{borderWidth: 0}} key={index}>
            <ReactCountryFlag className='rounded-xl' svg style={{width: '4.35em', height: '4.35em'}} countryCode={language.countryCode} />
            <div className='mt-2'>
              <p className='text-base font-semibold'>{language.name}</p>
              <p className='text-sm text-gray-400'>{language.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function HardSkills() {
  const logoSize = 50;
  const skills: SkillsType[] = [
    {
      type: 'General purposes languages',
      technos: [
        {
          name: 'Javascript',
          icon: <BiLogoJavascript color='#f0db4f' className='rounded-full' size={logoSize} />,
        },
        {
          name: 'Typescript',
          icon: <BiLogoTypescript className='justify-self-center' color="#007acc" size={logoSize} />,
        },
        {
          name: 'C',
          icon: <SiC className='justify-self-center' color="#007acc" size={logoSize} />,
        },
        {
          name: 'C++',
          icon: <BiLogoCPlusPlus className='justify-self-center' color="#007acc" size={logoSize} />,
        },
        {
          name: 'Python',
          icon: <DiPython className='justify-self-center' color="#FFD43B" size={logoSize} />,
        },
      ],
    },
    {
      type: 'Front-end',
      technos: [
        {
          name: 'HTML',
          icon: <BiLogoHtml5 color='#e34c26' className='rounded-full' size={logoSize} />,
        },
        {
          name: 'CSS',
          icon: <BiLogoCss3 color='#264de4' className='rounded-full' size={logoSize} />,
        },
        {
          name: 'React',
          icon: <BiLogoReact color='#61dbfb' size={logoSize} />,
        },
        {
          name: 'React Native',
          icon: <BiLogoReact color='#61dbfb' size={logoSize} />,
        },
        {
          name: 'Tailwind',
          icon: <RiTailwindCssFill color='#06b6d4' size={logoSize} />,
        },
        {
          name: 'Jest',
          icon: <SiJest className='justify-self-center' color="#e34c26" size={logoSize} />,
        },
      ],
    },
    {
      type: 'Back-end',
      technos: [
        {
          name: 'Nodejs',
          icon: <BiLogoNodejs className='justify-self-center' color="#41b883" size={logoSize} />,
        },
        {
          name: 'ExpressJs',
          icon: <SiExpress className='justify-self-center' color="#61dbfb" size={logoSize} />,
        },
        {
          name: 'Golang',
          icon: <BiLogoGoLang className='justify-self-center' color="#29BEB0" size={logoSize} />,
        },
        {
          name: 'Socket.io',
          icon: <TbBrandSocketIo className='justify-self-center' color="#41b883" size={logoSize} />,
        },
        {
          name: 'Django',
          icon: <DiDjango className='justify-self-center' color="#e34c26" size={logoSize} />,
        }
      ],
    },
    {
      type: 'Databases',
      technos: [
        {
          name: 'Firebase',
          icon: <SiFirebase className='justify-self-center' color="#F5820D" size={logoSize} />,
        },
        {
          name: 'MongoDB',
          icon: <DiMongodb className='justify-self-center' color="#4db33d" size={logoSize} />,
        },
        {
          name: 'MySQL',
          icon: <DiMysql color='#00758f' className='rounded-full' size={logoSize} />,
        },
      ],
    },
    {
      type: 'Devops',
      technos: [
        {
          name: 'Docker',
          icon: <DiDocker className='justify-self-center' color="#61dbfb" size={logoSize} />,
        },
        {
          name: 'CI',
          icon: <AiFillCiCircle className='justify-self-center' color="#ff9900" size={logoSize} />,
        },
      ],
    },
    {
      type: 'Code collaboration platforms',
      technos: [
        {
          name: 'Github',
          icon: <SiGithub className='justify-self-center' color="#fff" size={logoSize} />,
        },
        {
          name: 'Gitlab',
          icon: <SiGitlab className='justify-self-center' color="#fca326" size={logoSize} />,
        },
      ],
    },
    {
      type: 'Cloud',
      technos: [
        {
          name: 'AWS',
          icon: <FaAws className='justify-self-center' color="#ff9900" size={logoSize} />,
        },
      ],
    },
    {
      type: 'Version control systems',
      technos: [
        {
          name: 'Git',
          icon: <SiGit className='justify-self-center' color="#f34f29" size={logoSize} />,
        },
      ],
    },
  ];

  return (
    <div className='flex flex-col'>
      <SectionPrimaryTitle title="Hard skills" />
        {skills.map((skill, index) => (
          <div className='border-t mb-9 border-light-back' key={index}>
            <SectionSecondaryTitle title={skill.type} />
            <div className='flex mx-5 mt-3 flex-wrap flex-row gap-2 justify-center md:justify-normal'>
            {skill.technos.map((techno, index) => (
              <div className='flex flex-col rounded-lg text-center bg-light-back p-5' key={index}>
                <div className='self-center'>{techno.icon}</div>
                <p className='text-xs mt-3 font-semibold'>{techno.name}</p>
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
    <div className='flex md:px-3 flex-col flex-grow' style={{backgroundColor: palette.black}}>
      <Languages />
      <HardSkills />
    </div>
  );
};