"use client";

import React, { useState } from "react";
import Image from "next/image";
import sea from "../../../public/sea.jpeg";
import { PrimaryButton, SecondaryButton } from "../buttons.component";
import { FiExternalLink } from "react-icons/fi";
import { BiDownArrowAlt } from "react-icons/bi";
import Waves from "../../../public/stacked-waves-haikei.svg";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import { CalendarPlus } from "lucide-react";
import Link from "next/link";

export default function Hero({ itemEls }: any) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="pt-6 md:pt-0 flex h-screen justify-center w-full relative">
      {/* Background */}
      <Image
        src={Waves}
        alt="Waves background"
        className="absolute object-cover w-full h-full left-0 z-[-1]"
      />

      {/* Book 15 min call */}
      <div className="fixed bottom-6 right-6 z-50 group shadow-2xl rounded-full transition-all hover:scale-105 duration-300">
        <a
          className="relative bg-[#ffda3d] flex gap-3 items-center justify-center p-4 px-6 overflow-hidden font-medium text-black rounded-full"
          target="_blank"
          href="https://calendar.app.google/3K7mEK8LzgER3CJQA"
        >
          {/* Effets de cercles internes */}
          <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#fff75e] rounded-full blur-md opacity-80 group-hover:rotate-90"></span>

          <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
            <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#fdb833] rounded-full blur-md opacity-60"></span>
            <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#fdc43f] rounded-full blur-md opacity-60"></span>
          </span>

          <CalendarPlus
            strokeWidth={2.5}
            size={20}
            color="#000"
            className="z-10"
          />
          <span className="relative z-10 font-bold">
            Book a Free 30-min Call
          </span>
        </a>
      </div>

      {/* Radar Chip */}
      <div className="absolute top-6 right-6 z-50 hidden md:block">
        <div
          className="
            relative inline-flex items-center gap-3 px-4 py-2 rounded-full
            text-emerald-600
            bg-white/70 border border-current/30
            backdrop-blur-md shadow-lg overflow-hidden
          "
        >
          <span className="relative flex h-3 w-3">
            {/* Radar wave 1 */}
            <span
              className="absolute inset-0 rounded-full animate-radar
              bg-[radial-gradient(circle,transparent_60%,currentColor_63%,transparent_66%)]"
            />
            {/* Radar wave 2 */}
            <span
              className="absolute inset-0 rounded-full animate-radar delay-[1.5s]
              bg-[radial-gradient(circle,transparent_60%,currentColor_63%,transparent_66%)]"
            />
            {/* Center dot */}
            <span className="relative inline-flex h-3 w-3 rounded-full bg-current shadow-[0_0_18px_currentColor]" />
          </span>

          <span className="text-sm font-semibold">Open to opportunities</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-x-16 flex-col md:flex-row justify-center gap-y-7 items-center">
        {/* Avatar */}
        <div className="flex justify-center">
          <Image
            className="rounded-full size-60 md:size-96"
            src={sea}
            alt="Profile picture"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center text-center md:text-start gap-y-4">
          <div className="animate-scale-up flex text-3xl md:text-4xl font-bold text-white justify-center md:justify-start gap-x-3">
            <p>Hi! I&apos;m Lenny</p>
            <p className="animate-wave-hand">👋</p>
          </div>

          <p className="animate-scale-up text-xl md:text-2xl text-white">
            I build AI-powered SaaS and fullstack MVPs that scale.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-col px-4 md:px-0 md:flex-row gap-3 mt-4 w-full">
            {/* Watch Intro */}
            <button
              onClick={() => setShowVideo(true)}
              className="
    relative w-full md:flex-1
    px-7 py-3.5
    rounded-2xl
    text-white font-bold
    shadow-[0_18px_45px_-18px_rgba(0,0,0,0.8)]
    transition-all duration-300
    hover:scale-[1.05]
    active:scale-[0.98]
    focus:outline-none
    focus-visible:ring-4 focus-visible:ring-cyan-300/40
  "
            >
              {/* Gradient Background (plus punchy) */}
              <span
                className="
      absolute inset-0 rounded-2xl
      bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400
      bg-[length:300%_300%]
      animate-gradient
      opacity-100
      saturate-150
    "
              />

              {/* Border / ring permanent (sépare du fond) */}
              <span
                className="
      absolute inset-0 rounded-2xl
      ring-1 ring-white/20
      pointer-events-none
    "
              />

              {/* Glow (moins flou, plus visible) */}
              <span
                className="
      absolute -inset-2 rounded-2xl
      bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300
      blur-md opacity-40
      transition-opacity duration-300
      group-hover:opacity-80
    "
              />

              {/* Shine (reflet au hover) */}
              <span
                className="
      absolute inset-0 rounded-2xl
      bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.15)_45%,transparent_70%)]
      opacity-0 transition-opacity duration-300
      hover:opacity-100
    "
              />

              {/* Content */}
              <span className="relative inline-flex items-center gap-3 drop-shadow">
                <FaPlay />
                <span>Watch Intro</span>
                <span className="text-white/90 text-sm hidden md:inline">
                  (1m)
                </span>
              </span>
            </button>

            {/* Let's Connect */}
            <div className="flex min-w-fit md:flex-1">
              <SecondaryButton
                rightIcon={<BiDownArrowAlt size={20} />}
                text="Let's connect!"
                callback={() => {
                  itemEls.current[4].scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal Video */}
      <Modal
        isOpen={showVideo}
        onRequestClose={() => setShowVideo(false)}
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
        overlayClassName="fixed inset-0 bg-black/70 z-[9999]"
      >
        <button
          onClick={() => setShowVideo(false)}
          className="text-white absolute top-5 right-5 text-2xl"
        >
          ✕
        </button>

        <div className="w-[90vw] max-w-5xl aspect-video">
          <ReactPlayer
            src="/Intro_v1.mov"
            playing
            controls
            width="100%"
            height="100%"
          />
        </div>
      </Modal>
    </div>
  );
}
