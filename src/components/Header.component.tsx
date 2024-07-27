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
    <div className="">
      <div className="flex top-0 w-full fixed md:sticky py-3 md:py-5 flex-row md:gap-y-4 justify-center px-8 md:flex-col md:h-screen text-white" style={{backgroundColor: palette.black}}>
        {sections.map((section, index) => (
          <div onClick={() => executeScroll(index)} className="flex gap-y-1 flex-col m-2 md:flex-row w-full text-center md:text-start md:justify-center" key={index}>
            <div style={{color: values.selected === index ? palette.light_red : palette.white, alignSelf: 'center'}}>{section.icon}</div>
            <p className={`w-full cursor-pointer md:px-5 text-sm md:text-lg hidden md:block`} style={{color: values.selected === index ? palette.light_red : palette.white}}>{section.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};