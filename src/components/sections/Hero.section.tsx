import React from "react";
import Image from "next/image";
import sea from "../../../public/sea.jpeg";
import { PrimaryButton, SecondaryButton } from "../buttons.component";
import { FiExternalLink } from "react-icons/fi";
import { BiDownArrowAlt } from "react-icons/bi";

export default function Hero({ itemEls }: any) {
  const getIconSize = (small: number, large: number): number => {
    if (typeof window !== "undefined") {
      return window?.innerWidth > 768 ? large : small;
    }
    return 0;
  };

  return (
    <div
      className="pt-6 md:pt-0 flex h-screen justify-center w-full bg-cyan-500"
    >
      <div className="flex gap-x-16 flex-col md:flex-row justify-center gap-y-7">
        <div className=" flex justify-center">
          <Image
            className="rounded-full justify-self-center self-center size-60 md:size-96"
            src={sea}
            alt="pp"
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-start gap-y-2">
          <div className="animate-scale-up flex flex-row text-3xl md:text-4xl font-bold text-white justify-center md:justify-start gap-x-3">
            <p>Hi! I&apos;m Lenny</p>
            <p className="animate-wave-hand">👋</p>
          </div>
          <p className="animate-scale-up text-xl md:text-2xl text-white">
            An efficient fullstack developer
          </p>
          <div className="grid grid-rows-2 gap-y-2 md:grid-cols-2 mx-5 md:mx-0 mt-3 md:mt-5 gap-x-3">
            <div className="flex grow animate-slide-left">
              <SecondaryButton
                rightIcon={<BiDownArrowAlt size={getIconSize(23, 26)} />}
                text="Let's connect!"
                callback={() => {
                  itemEls.current[4].scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>
            <div className="flex grow animate-slide-right">
              <PrimaryButton
                rightIcon={<FiExternalLink size={20} />}
                text="Let's work together!"
                callback={() => {
                  window.open("https://www.malt.fr/profile/lennygarnier");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
