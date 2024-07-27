import palette from "@/utils/palette.utils";
import React from "react";

export default function Header({refs, values}) {
  const sections: string[] = [
    "Hero",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
    "FAQ",
  ];

  const executeScroll = (index: number) => {
    values.setSelected(index);
    refs.current[index].scrollIntoView()
  };

  return (
    <div className="hidden md:block">
      <div className="flex top-0 sticky h-screen flex-col gap-y-4 justify-center px-10 left-0 text-black md:bg-red-300">
        {sections.map((section, index) => (
          <div key={index} onClick={() => executeScroll(index)} className={`w-full cursor-pointer px-5 text-lg ${values.selected === index ? 'font-bold' : ''}`}>{section}</div>
        ))}
      </div>
    </div>
  );
};