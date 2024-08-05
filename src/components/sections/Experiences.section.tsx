"use client";
import React from 'react';
import { cardHoverScale, SectionPrimaryTitle, SectionSecondaryTitle } from './Competences.section';
import { BiRightArrowAlt } from 'react-icons/bi';
import ReactCountryFlag from 'react-country-flag';
import { IoMdPerson } from 'react-icons/io';
import { IoLayers } from 'react-icons/io5';

type Experience = {
  title: string;
  location: string;
  countryCode: string;
  start: string;
  end: string;
  position?: string;
  status?: string;
};

function ExperiencesList({title, experiences}: {title: string, experiences: Experience[]}) {
  return (
    <div>
      <SectionSecondaryTitle title={title} />
      <div className='md:grid md:grid-cols-3 flex flex-col md:flex-row flex-grow flex-wrap gap-y-3 my-5'>
        {
          experiences.map((exp, index) => (
            <div className={`${cardHoverScale} flex flex-col rounded-lg bg-ruddy-blue-darker mx-3 p-4`} key={index}>
              <p className='font-bold text-lg text-white'>{exp.title}</p>
              <div className='flex my-2.5 flex-col gap-y-1'>
                <div className='flex flex-row gap-x-2'>
                  <ReactCountryFlag className='rounded-none self-center' svg style={{width: '1em', height: '1em'}} countryCode={exp.countryCode} />
                  <p className='text-xs text-slate-300'>{exp.location}</p>
                </div>
                {
                  exp.status !== undefined && (
                  <div className='flex flex-row gap-x-2 mt-1'>
                    <IoLayers className='self-center'  color="#fff" size={15} />
                    <p className='font-medium text-xs text-slate-300'>{exp.status}</p>
                  </div>
                )}
                <div className='flex flex-row gap-x-2'>
                  <IoMdPerson color="#fff" size={15} />
                  <p className='font-medium text-xs text-slate-300'>{exp.position}</p>
                </div>
              </div>
              <div className='flex flex-row gap-x-2'>
                <p className='text-white font-medium'>{exp.start}</p>
                <BiRightArrowAlt className='self-center' color="#fff" size={15} />
                <p className='text-white font-medium'>{exp.end}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};


export default function Experiences() {
  const professional: Experience[] = [
    {
      title: 'Feelbat',
      location: "Reunion Island, Saint-Denis",
      start: 'April 2023',
      end: 'August 2023',
      position: 'Mobile/Full-stack developer',
      status: 'Internship',
      countryCode: 'FR',
    },
    {
      title: 'Epitech',
      location: "Reunion Island, Saint-André",
      start: 'September 2022',
      end: 'March 2023',
      position: 'Pedagogical Assistant',
      status: 'Part-time',
      countryCode: 'FR',
    },
    {
      title: 'Solarplexus',
      location: "Reunion Island, Saint-Benoît",
      start: 'August 2021',
      end: 'December 2021',
      position: 'Software Engineer',
      status: 'Internship',
      countryCode: 'FR',
    },
  ];
  const academic: Experience[] = [
    {
      title: 'Epitech',
      location: "Reunion Island, Saint-André",
      start: 'September 2020',
      end: 'June 2025',
      position: 'Student',
      countryCode: 'FR',
    },
    {
      title: 'Inha University',
      location: 'South Korea, Incheon',
      start: 'September 2023',
      end: 'June 2024',
      position: 'International student',
      countryCode: 'KR',
    },
    {
      title: 'Louis Payen Highschool',
      location: "Reunion Island, Saint-Paul",
      start: 'August 2017',
      end: 'June 2020',
      position: 'Student',
      countryCode: 'FR',
    }
  ];

  return (
    <div id='experiences' className='grow bg-ruddy-blue md:px-3 pb-6'>
      <SectionPrimaryTitle title='Experience' />
      <ExperiencesList title='Professional' experiences={professional} />
      <ExperiencesList title='Academic' experiences={academic} />
    </div>
  );
};