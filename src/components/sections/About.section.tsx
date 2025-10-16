"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";
import { FaCode, FaRocket, FaUsers, FaHeart } from "react-icons/fa";
import palette from "@/utils/palette.utils";

export default function About() {
  const highlights = [
    {
      icon: <FaCode size={32} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions",
    },
    {
      icon: <FaRocket size={32} />,
      title: "Performance",
      description: "Optimizing for speed and efficiency",
    },
    {
      icon: <FaUsers size={32} />,
      title: "Collaboration",
      description: "Team player with strong communication",
    },
    {
      icon: <FaHeart size={32} />,
      title: "Passion",
      description: "Love what I do and continuously learning",
    },
  ];

  return (
    <div
      className="flex flex-col justify-center w-full px-8 md:px-20 py-16 md:py-24"
      style={{ backgroundColor: palette.grey }}
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
          variants={fadeInUp}
        >
          About Me
        </motion.h2>

        {/* Story */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          variants={fadeInUp}
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
            Currently completing my Master&apos;s at{" "}
            <span className="text-light_red font-semibold">Epitech</span>, I&apos;ve gained
            international experience through a year-long exchange at{" "}
            <span className="text-light_red font-semibold">Inha University in South Korea</span>.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            From mobile apps to full-stack web solutions, I thrive on turning complex
            challenges into elegant, user-friendly applications. Currently seeking
            opportunities to make an impact as a{" "}
            <span className="text-light_red font-semibold">full-stack developer</span>.
          </p>
        </motion.div>

        {/* Core Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-black/50 transition-all duration-300"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="text-light_red mb-4 flex justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Availability Status */}
        <motion.div
          className="mt-12 text-center"
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-green-500/20 border border-green-500/50 rounded-full px-6 py-3"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-white font-medium">
              Available for opportunities starting May 2025
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
