import palette from "@/utils/palette.utils";
import React, { ReactNode } from "react";
import { MdAccountCircle, MdStar, MdPhone, MdQuestionAnswer } from "react-icons/md";
import { FaToolbox } from "react-icons/fa";
import { IoMdJournal } from "react-icons/io";

type SectionType = {
  name: string;
  icon: ReactNode;
};

export default function Header({refs, values}) {
  const sections: SectionType[] = [
    {
      name: "Hero",
      icon: <MdAccountCircle size={25} />,
    },
    {
      name: "Skills",
      icon: <FaToolbox size={25} />,
    },
    {
      name: "Experience",
      icon: <IoMdJournal size={25} />,
    },
    {
      name: "Projects",
      icon: <MdStar size={25} />,
    },
    {
      name: "Contact",
      icon: <MdPhone size={25} />,
    },
  ];

  const executeScroll = (index: number) => {
    values.setSelected(index);
    refs.current[index].scrollIntoView({behavior: 'smooth'})
  };

  return (
    <div className="hidden md:block">
      <div className="flex top-0 sticky h-screen flex-col gap-y-4 justify-center px-8 left-0 text-white" style={{backgroundColor: palette.black}}>
        {sections.map((section, index) => (
          <div onClick={() => executeScroll(index)} className="flex flex-row justify-center text-start" key={index}>
            <div style={{color: values.selected === index ? palette.light_red : palette.white}}>{section.icon}</div>
            <p className={`w-full cursor-pointer px-5 text-lg`} style={{color: values.selected === index ? palette.light_red : palette.white}}>{section.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};