"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "@/utils/animations";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { BiCheckCircle } from "react-icons/bi";
import palette from "@/utils/palette.utils";
import Image from "next/image";
import { useRef } from "react";

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const caseStudies = [
    {
      title: "PHAR - AI Music Mood Playlist Generator",
      role: "Full-Stack & Mobile Developer",
      duration: "In Progress",
      problem: "Users struggle to find music that matches their current mood, often spending time manually creating playlists.",
      solution: [
        "Built AI-powered mood detection system using sentiment analysis",
        "Integrated Spotify API for seamless playlist generation",
        "Developed cross-platform mobile app with React Native",
        "Implemented real-time mood tracking and music recommendation engine",
      ],
      technologies: ["React Native", "TypeScript", "AI/ML", "Spotify API", "Node.js"],
      impact: [
        { metric: "User Engagement", value: "Prototype phase" },
        { metric: "Platform", value: "iOS & Android" },
      ],
      link: "https://pharmusic.com/",
      github: null,
      image: "/icon_full.png",
    },
    {
      title: "Timer Sequence - Custom Timer App",
      role: "Solo Developer",
      duration: "Completed 2024",
      problem: "Existing timer apps lack flexibility for complex workout routines and multi-step processes requiring custom interval sequences.",
      solution: [
        "Created intuitive UI for building custom timer sequences",
        "Implemented background notifications and sound alerts",
        "Added save/load functionality for reusable sequences",
        "Optimized for battery efficiency during long sessions",
      ],
      technologies: ["React Native", "TypeScript", "AsyncStorage", "Jest"],
      impact: [
        { metric: "Code Coverage", value: "85%+" },
        { metric: "Performance", value: "60fps smooth" },
      ],
      link: null,
      github: "https://github.com/GarnierLenny/timer-sequence",
      image: "/ts-logo.png",
    },
    {
      title: "Minimalist Calorie Tracker",
      role: "Solo Developer",
      duration: "Completed 2024",
      problem: "Most calorie tracking apps are cluttered with features, making daily logging tedious and time-consuming.",
      solution: [
        "Designed minimal, distraction-free interface",
        "Implemented quick-add shortcuts for common foods",
        "Built local-first architecture for instant sync",
        "Added progress visualization with clean charts",
      ],
      technologies: ["React Native", "TypeScript", "SQLite", "Chart.js"],
      impact: [
        { metric: "Daily Active Usage", value: "Personal use" },
        { metric: "Load Time", value: "<100ms" },
      ],
      link: null,
      github: "https://github.com/GarnierLenny/minimalist-calorie-tracker",
      image: "/mvt.png",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-center w-full px-6 md:px-20 py-16 md:py-24 relative overflow-hidden bg-indigo-900"
    >
      {/* Parallax background elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        style={{ y: y2 }}
      />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Case Studies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep dives into projects where I solved real problems with innovative solutions
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
            >
              {/* Image Section */}
              <motion.div
                className={`${index % 2 === 1 ? "md:order-2" : ""} relative`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black/50 backdrop-blur-sm p-8 aspect-square flex items-center justify-center">
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Content Section */}
              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                <motion.div
                  className="space-y-4"
                  variants={staggerContainer}
                >
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {study.title}
                    </h3>
                    <p className="text-light_red font-medium">
                      {study.role} • {study.duration}
                    </p>
                  </div>

                  {/* Problem */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      The Challenge
                    </h4>
                    <p className="text-gray-300">{study.problem}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      The Solution
                    </h4>
                    <ul className="space-y-2">
                      {study.solution.map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2 text-gray-300"
                          whileHover={{ x: 5 }}
                        >
                          <BiCheckCircle
                            className="text-green-500 flex-shrink-0 mt-1"
                            size={20}
                          />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 bg-black/30 rounded-full text-sm text-white border border-white/20"
                          whileHover={{ scale: 1.1, borderColor: palette.light_red }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="grid grid-cols-2 gap-4">
                    {study.impact.map((item, i) => (
                      <motion.div
                        key={i}
                        className="bg-black/30 rounded-lg p-4 text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <p className="text-2xl font-bold text-light_red">
                          {item.value}
                        </p>
                        <p className="text-sm text-gray-400">{item.metric}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {study.link && (
                      <motion.a
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red to-light_red text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Visit Site <FiExternalLink />
                      </motion.a>
                    )}
                    {study.github && (
                      <motion.a
                        href={study.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Code <FiGithub />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
