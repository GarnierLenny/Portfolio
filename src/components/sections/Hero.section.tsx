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

      {/* Radar Chip */}
      <div className="fixed top-6 right-6 z-50">
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
            I turn ideas into real life products
          </p>

          {/* Buttons Row */}
          <div className="flex flex-col md:flex-row gap-3 mt-4 w-full">
            {/* Watch Intro */}
            <button
              onClick={() => setShowVideo(true)}
              className="
                relative w-full md:flex-1
                px-7 py-3.5
                rounded-2xl
                text-white font-bold
                shadow-lg
                transition-transform duration-300
                hover:scale-[1.04]
                active:scale-[0.98]
                focus:outline-none
              "
            >
              {/* Gradient Background */}
              <span
                className="
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-r from-blue-800 via-cyan-800 to-indigo-800
                  bg-[length:300%_300%]
                  animate-gradient
                  opacity-95
                "
              />

              {/* Glow */}
              <span
                className="
                  absolute -inset-1 rounded-2xl
                  bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600
                  blur-lg opacity-70
                  animate-glow
                "
              />

              {/* Content */}
              <span className="relative inline-flex items-center gap-3">
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
