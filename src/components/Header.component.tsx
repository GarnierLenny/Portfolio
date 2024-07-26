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
    <div className="fixed flex h-full flex-col gap-y-4 justify-center px-10 py-2 left-0 self-center text-black" style={{backgroundColor: palette.yellow}}>
      {sections.map((section, index) => (
        <div key={index} onClick={() => executeScroll(index)} className={`w-full cursor-pointer px-5 text-lg ${values.selected === index ? 'font-bold' : ''}`}>{section}</div>
      ))}
    </div>
  );
};