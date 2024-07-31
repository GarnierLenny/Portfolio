import React, { ReactNode, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import { BsStackOverflow } from 'react-icons/bs';
import { cardHoverScale, SectionPrimaryTitle, SectionSecondaryTitle } from './Competences.section';
import palette from '@/utils/palette.utils';
import { BiLogoGmail } from 'react-icons/bi';
import { ImCheckmark } from 'react-icons/im';

type ContactType = {
  text: string,
  color: string,
  callback: () => void,
  icon: ReactNode,
  lightText?: boolean,
};

function ContactButton({contact}: {contact: ContactType}) {
  return (
    <div className='flex flex-1 justify-center items-center gap-3 px-6 py-3 rounded-full font-medium' style={{backgroundColor: contact.color, color: contact.lightText ? '#fff' : '#000'}}>
      {contact.icon}
      <p>{contact.text}</p>
    </div>
  );
};

export default function Contact() {
  const logoSize = 30;
  const [clicked, setClicked] = useState<boolean>(false);
  const contacts: ContactType[] = [
    {
      text: clicked ? "Copied to clipboard!" : "Copy my email",
      color: clicked ? '#0CAA41' : '#fff',
      callback: () => {
        navigator.clipboard.writeText('lenny.garnier00@gmail.com');
        setClicked(true);
      },
      lightText: clicked ? true : false,
      icon: clicked ? <ImCheckmark color='#fff' size={20} /> : <BiLogoGmail color={palette.light_red} size={logoSize} />,
    },
    {
      text: "Github",
      color: '#000',
      callback: () => window.open('https://github.com/GarnierLenny'),
      lightText: true,
      icon: <FaGithub color='#fff' size={logoSize} />,
    },
    {
      text: "LinkedIn",
      color: '#0e76a8',
      callback: () => window.open('https://www.linkedin.com/in/lenny-garnier-2ab689199/'),
      lightText: true,
      icon: <FaLinkedin color='#fff' size={logoSize} />,
    },
    {
      text: "LeetCode",
      color: '#F47F24',
      callback: () => window.open('https://leetcode.com/u/Lenny00/'),
      lightText: true,
      icon: <SiLeetcode color='#fff' size={logoSize} />,
    },
    {
      text: "X",
      color: '#000',
      callback: () => window.open('https://x.com/lennygrnr'),
      lightText: true,
      icon: <FaXTwitter color='#fff' size={logoSize} />,
    },
    // {
    //   text: "Glassdoor",
    //   color: '#fff',
    //   callback: 'to',
    //   lightText: false,
    //   icon: <SiGlassdoor color='#0CAA41' size={logoSize} />,
    // },
    // {
    //   text: "Fiverr",
    //   color: '#00b22d',
    //   callback: 'to',
    //   lightText: true,
    //   icon: <TbBrandFiverr color='#fff' size={logoSize} />,
    // },
    // {
    //   text: "Malt",
    //   color: palette.light_red,
    //   callback: window.open('https://www.malt.fr/profile/lennygarnier'),
    //   lightText: true,
    //   icon: <SiMalt color="#fff" size={logoSize} />,
    // },
    {
      text: "Stack Overflow",
      color: '#fff',
      callback: () => window.open('https://stackoverflow.com/users/24929945/lenny-garnier'),
      lightText: false,
      icon: <BsStackOverflow color='#F47F24' size={logoSize} />,
    },
  ];

  return (
    <div className='flex flex-col bg-slate-800 w-full pb-3 md:px-3'>
      <SectionPrimaryTitle title='Contacts' />
      <SectionSecondaryTitle title="Feel free to contact me!" />
      <div className='flex align-middle flex-wrap gap-3 px-8 mt-6'>
        <div className='flex flex-col md:flex-row flex-wrap gap-2 w-full'>
          {contacts.map((contact, index) => (
            <button onClick={contact.callback} className={`${cardHoverScale} flex-1 md:flex-none`} key={index}>
              <ContactButton contact={contact} />
            </button>
          ))}
        </div>
      </div>
      <p className='self-center text-xs md:self-end md:mr-5 bottom-0 mt-10 text-slate-300 font-medium'>Made with ♥️ in Reunion Island 🌴</p>
    </div>
  );
};