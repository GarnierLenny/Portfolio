import palette from "@/utils/palette.utils";
import React from "react";

export default function Header({refs}) {
  const sections: string[] = [
    "Hero",
    "Competences",
    "Experience",
    "Projects",
    "Contact",
    "FAQ",
  ];

  const executeScroll = (index: number) => refs.current[index].scrollIntoView();

  return (
    <div className="fixed flex h-full flex-col gap-y-4 justify-center px-14 py-2 left-0 self-center text-black" style={{backgroundColor: palette.yellow}}>
      {sections.map((section, index) => (
        <div key={index} onClick={() => executeScroll(index)} className="cursor-pointer">{section}</div>
      ))}
    </div>
  );
};