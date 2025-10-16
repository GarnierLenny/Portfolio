"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerFastContainer, scaleIn } from "@/utils/animations";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoNodejs,
  BiLogoCPlusPlus,
  BiLogoGoLang,
} from "react-icons/bi";
import {
  DiDjango,
  DiDocker,
  DiMongodb,
  DiMysql,
  DiPython,
} from "react-icons/di";
import { FaAws } from "react-icons/fa";
import {
  RiNextjsLine,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiC,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJest,
} from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";
import { AiFillCiCircle } from "react-icons/ai";
import palette from "@/utils/palette.utils";

type TechnoType = {
  name: string;
  icon: React.ReactNode;
  proficiency: "Expert" | "Advanced" | "Intermediate";
  yearsExp?: string;
};

type SkillCategory = {
  type: string;
  technos: TechnoType[];
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const logoSize = 50;

  const skills: SkillCategory[] = [
    {
      type: "Frontend",
      technos: [
        { name: "React", icon: <BiLogoReact color="#61dbfb" size={logoSize} />, proficiency: "Advanced", yearsExp: "3+" },
        { name: "Next.js", icon: <RiNextjsLine color="#fff" size={logoSize} />, proficiency: "Advanced", yearsExp: "2+" },
        { name: "TypeScript", icon: <BiLogoTypescript color="#007acc" size={logoSize} />, proficiency: "Advanced", yearsExp: "3+" },
        { name: "React Native", icon: <BiLogoReact color="#61dbfb" size={logoSize} />, proficiency: "Advanced", yearsExp: "2+" },
        { name: "JavaScript", icon: <BiLogoJavascript color="#f0db4f" size={logoSize} />, proficiency: "Expert", yearsExp: "4+" },
        { name: "HTML", icon: <BiLogoHtml5 color="#e34c26" size={logoSize} />, proficiency: "Expert", yearsExp: "5+" },
        { name: "CSS", icon: <BiLogoCss3 color="#264de4" size={logoSize} />, proficiency: "Advanced", yearsExp: "5+" },
        { name: "Tailwind", icon: <RiTailwindCssFill color="#06b6d4" size={logoSize} />, proficiency: "Advanced", yearsExp: "2+" },
      ],
    },
    {
      type: "Backend",
      technos: [
        { name: "Node.js", icon: <BiLogoNodejs color="#41b883" size={logoSize} />, proficiency: "Advanced", yearsExp: "3+" },
        { name: "Express", icon: <SiExpress color="#fff" size={logoSize} />, proficiency: "Advanced", yearsExp: "3+" },
        { name: "Python", icon: <DiPython color="#FFD43B" size={logoSize} />, proficiency: "Intermediate", yearsExp: "2+" },
        { name: "Django", icon: <DiDjango color="#0c4b33" size={logoSize} />, proficiency: "Intermediate", yearsExp: "1+" },
        { name: "Golang", icon: <BiLogoGoLang color="#29BEB0" size={logoSize} />, proficiency: "Intermediate", yearsExp: "1+" },
        { name: "Socket.io", icon: <TbBrandSocketIo color="#4db33d" size={logoSize} />, proficiency: "Advanced", yearsExp: "2+" },
      ],
    },
    {
      type: "Databases",
      technos: [
        { name: "Firebase", icon: <SiFirebase color="#F5820D" size={logoSize} />, proficiency: "Advanced", yearsExp: "2+" },
        { name: "Supabase", icon: <RiSupabaseFill color="#41f883" size={logoSize} />, proficiency: "Advanced", yearsExp: "1+" },
        { name: "MongoDB", icon: <DiMongodb color="#4db33d" size={logoSize} />, proficiency: "Advanced", yearsExp: "2+" },
        { name: "MySQL", icon: <DiMysql color="#00758f" size={logoSize} />, proficiency: "Intermediate", yearsExp: "2+" },
      ],
    },
    {
      type: "Languages",
      technos: [
        { name: "C", icon: <SiC color="#007acc" size={logoSize} />, proficiency: "Advanced", yearsExp: "3+" },
        { name: "C++", icon: <BiLogoCPlusPlus color="#007acc" size={logoSize} />, proficiency: "Intermediate", yearsExp: "2+" },
      ],
    },
    {
      type: "DevOps & Tools",
      technos: [
        { name: "Docker", icon: <DiDocker color="#61dbfb" size={logoSize} />, proficiency: "Intermediate", yearsExp: "2+" },
        { name: "CI/CD", icon: <AiFillCiCircle color="#ff9900" size={logoSize} />, proficiency: "Intermediate", yearsExp: "2+" },
        { name: "AWS", icon: <FaAws color="#ff9900" size={logoSize} />, proficiency: "Intermediate", yearsExp: "1+" },
        { name: "Git", icon: <SiGit color="#f34f29" size={logoSize} />, proficiency: "Expert", yearsExp: "5+" },
        { name: "GitHub", icon: <SiGithub color="#fff" size={logoSize} />, proficiency: "Expert", yearsExp: "5+" },
        { name: "GitLab", icon: <SiGitlab color="#fca326" size={logoSize} />, proficiency: "Advanced", yearsExp: "3+" },
        { name: "Jest", icon: <SiJest color="#C21325" size={logoSize} />, proficiency: "Advanced", yearsExp: "2+" },
      ],
    },
  ];

  const proficiencyColors = {
    Expert: "#0CAA41",
    Advanced: "#0e76a8",
    Intermediate: "#F5820D",
  };

  return (
    <div className="flex bg-slate-900 flex-col flex-grow py-16 md:py-24 px-6 md:px-20 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto w-full"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-400">
            Technologies I work with to build amazing products
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={staggerFastContainer}
        >
          <motion.button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === null
                ? "bg-gradient-to-r from-red to-light_red text-white shadow-lg"
                : "bg-black/30 text-gray-400 hover:text-white hover:bg-black/50"
            }`}
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          {skills.map((category) => (
            <motion.button
              key={category.type}
              onClick={() => setSelectedCategory(category.type)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.type
                  ? "bg-gradient-to-r from-red to-light_red text-white shadow-lg"
                  : "bg-black/30 text-gray-400 hover:text-white hover:bg-black/50"
              }`}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.type}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div className="space-y-12" variants={staggerContainer}>
          {skills
            .filter((category) => !selectedCategory || category.type === selectedCategory)
            .map((category) => (
              <motion.div
                key={category.type}
                className="border-t border-gray-700 pt-8"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-2xl font-semibold text-gray-300 mb-6 ml-2"
                  variants={fadeInUp}
                >
                  {category.type}
                </motion.h3>
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                  variants={staggerFastContainer}
                >
                  {category.technos.map((techno, index) => (
                    <motion.div
                      key={index}
                      className="group relative flex flex-col items-center bg-light-back rounded-xl p-6 cursor-pointer"
                      variants={scaleIn}
                      whileHover={{ scale: 1.08, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Tech Icon */}
                      <motion.div
                        className="mb-3"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {techno.icon}
                      </motion.div>

                      {/* Tech Name */}
                      <p className="text-sm font-semibold text-white text-center">
                        {techno.name}
                      </p>

                      {/* Proficiency Badge */}
                      <motion.div
                        className="mt-2 px-2 py-1 rounded-full text-4xs font-medium"
                        style={{
                          backgroundColor: proficiencyColors[techno.proficiency] + "30",
                          color: proficiencyColors[techno.proficiency],
                          border: `1px solid ${proficiencyColors[techno.proficiency]}60`,
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {techno.proficiency}
                      </motion.div>

                      {/* Hover Tooltip */}
                      <motion.div
                        className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-10"
                        initial={{ opacity: 0, y: 10 }}
                      >
                        {techno.yearsExp && `${techno.yearsExp} years`}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black" />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          variants={staggerContainer}
        >
          {[
            { label: "Technologies", value: "25+" },
            { label: "Years Coding", value: "5+" },
            { label: "Projects", value: "30+" },
            { label: "Lines of Code", value: "100k+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-black/30 rounded-xl p-6 text-center"
              variants={scaleIn}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.5)" }}
            >
              <motion.p
                className="text-3xl md:text-4xl font-bold text-light_red mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
