import palette from '@/utils/palette.utils';
import React, { ReactNode } from 'react';
import { BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoHtml5, BiLogoCss3 } from "react-icons/bi";

type SkillsType = {
  type: string,
  technos: {
    name: string,
    icon: ReactNode,
  }[]
}[];

export default function Competences() {
  const skills: SkillsType = [
    {
      type: 'frontend',
      technos: [
        {
          name: 'Javascript',
          icon: <BiLogoJavascript color='#f0db4f' className='rounded-full' size={40} />,
        },
        {
          name: 'HTML',
          icon: <BiLogoHtml5 color='#e34c26' className='rounded-full' size={40} />,
        },
        {
          name: 'CSS',
          icon: <BiLogoCss3 color='#264de4' className='rounded-full' size={40} />,
        },
        {
          name: 'Typescript',
          icon: <BiLogoTypescript className='justify-self-center' style={{backgroundColor: '#ff2'}} color="#007acc" size={40} />,
        },
        {
          name: 'React',
          icon: <BiLogoReact color='#61dbfb' size={40} />,
        },
        {
          name: 'React Native',
          icon: <BiLogoReact color='#61dbfb' size={40} />,
        },
      ],
    }
  ];

  return (
    <div className='grow h-scree' style={{backgroundColor: palette.black}}>
      Competences
      {skills.map((skill, index) => (
        <div key={index}>
          <p>{skill.type}</p>
          <div className='flex flex-row gap-x-1 align-middle justify-center'>
          {skill.technos.map((techno, index) => (
            <div className='flex flex-col grow text-center bg-stone-400' key={index}>
              <div className='self-center'>{techno.icon}</div>
              <p className='text-xs'>{techno.name}</p>
            </div>
          ))}
          </div>
        </div>
      ))}
    </div>
  );
};