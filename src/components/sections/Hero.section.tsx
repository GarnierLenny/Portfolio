"use client";

import palette from "@/utils/palette.utils";
import React, { RefObject, useEffect, useState } from "react";
import Image from "next/image";
import hat from "../../../public/hat.png";
import { PrimaryButton, SecondaryButton } from "../buttons.component";
import { FiExternalLink } from "react-icons/fi";
import { BiDownArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, fadeInDown, scaleInSpring, staggerContainer } from "@/utils/animations";

type HeroProps = {
  itemEls: RefObject<(HTMLElement | null)[]>;
};

export default function Hero({ itemEls }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Parallax effect for background
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToContact = () => {
    if (itemEls.current && itemEls.current[4]) {
      itemEls.current[4].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="pt-6 md:pt-0 flex h-screen justify-center w-full relative overflow-hidden"
      style={{ backgroundColor: palette.blue, y, opacity }}
    >
      {/* Animated background circles */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="flex gap-x-16 flex-col md:flex-row justify-center gap-y-7 z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image with 3D effect */}
        <motion.div
          className="flex justify-center"
          variants={scaleInSpring}
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              className="rounded-full justify-self-center self-center size-60 md:size-96 shadow-2xl ring-4 ring-white/20"
              src={hat}
              alt="Lenny Garnier profile picture"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <div className="flex flex-col justify-center text-center md:text-start gap-y-3">
          <motion.div
            className="flex flex-row text-3xl md:text-5xl font-bold text-white justify-center md:justify-start gap-x-3"
            variants={fadeInDown}
          >
            <p>Hi! I&apos;m Lenny</p>
            <motion.p
              animate={{
                rotate: [0, 14, -8, 14, -4, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            >
              👋
            </motion.p>
          </motion.div>

          <motion.p
            className="text-xl md:text-3xl text-white/90 font-medium"
            variants={fadeInUp}
          >
            A passionate{" "}
            <motion.span
              className="text-light_red font-bold"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              full-stack developer
            </motion.span>
          </motion.p>

          <motion.p
            className="text-md md:text-lg text-white/80 max-w-md"
            variants={fadeInUp}
          >
            Crafting beautiful web and mobile experiences with React, Next.js,
            and TypeScript. Fluent in French & English.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-y-3 gap-x-4 mx-5 md:mx-0 mt-5"
            variants={fadeInUp}
          >
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                onClick={scrollToContact}
                className="w-full px-8 py-4 bg-gradient-to-r from-red to-light_red text-white rounded-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
                whileHover={{ y: -2 }}
              >
                Let&apos;s Connect!
                <BiRightArrowAlt
                  size={26}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </motion.div>

            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                onClick={() =>
                  window.open("https://github.com/GarnierLenny/Portfolio")
                }
                className="w-full px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group"
                whileHover={{ y: -2 }}
              >
                View Source Code
                <FiExternalLink
                  size={22}
                  className="group-hover:rotate-45 transition-transform"
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="flex justify-center md:justify-start mt-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <BiDownArrowAlt size={32} className="text-white/60" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}