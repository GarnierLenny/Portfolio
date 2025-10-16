import palette from "@/utils/palette.utils";
import React, { ReactNode, RefObject } from "react";
import { MdAccountCircle, MdStar, MdPhone } from "react-icons/md";
import { FaToolbox } from "react-icons/fa";
import { IoMdJournal } from "react-icons/io";
import { motion } from "framer-motion";

type SectionType = {
  name: string;
  icon: ReactNode;
};

type HeaderProps = {
  refs: RefObject<(HTMLElement | null)[]>;
  values: {
    selected: number;
    setSelected: (index: number) => void;
  };
};

export default function Header({ refs, values }: HeaderProps) {
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
    if (refs.current && refs.current[index]) {
      refs.current[index]?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex z-10 justify-center">
      <nav
        className="flex mt-1 md:mt-0 rounded-full md:rounded-none top-0 w-4/5 md:w-full fixed md:sticky py-2 md:py-5 flex-row md:gap-y-4 justify-center px-8 md:flex-col md:h-screen text-white backdrop-blur-lg"
        style={{ backgroundColor: palette.black }}
        aria-label="Main navigation"
      >
        {sections.map((section, index) => (
          <motion.button
            key={index}
            onClick={() => executeScroll(index)}
            className="flex gap-y-1 flex-col m-2 md:flex-row w-full text-center md:text-start md:justify-center items-center min-h-[44px] min-w-[44px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Navigate to ${section.name} section`}
            aria-current={values.selected === index ? "page" : undefined}
          >
            <motion.div
              style={{ color: values.selected === index ? palette.light_red : palette.white }}
              animate={{ scale: values.selected === index ? 1.1 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {section.icon}
            </motion.div>
            <p
              className="w-full cursor-pointer md:px-5 text-sm md:text-lg hidden md:block transition-colors duration-200"
              style={{ color: values.selected === index ? palette.light_red : palette.white }}
            >
              {section.name}
            </p>
          </motion.button>
        ))}
      </nav>
    </div>
  );
};