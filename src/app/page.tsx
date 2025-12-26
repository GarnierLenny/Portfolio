"use client";

import About from "@/components/about";
import Contacts from "@/components/contacts";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import SocialMedias from "@/components/social-medias";
import { VStack } from "@chakra-ui/react";
import { useState } from "react";
import "../i18n/config";

export default function Home() {
  const [bgColor, setColor] = useState("white");

  return (
    <VStack
      transition="background-color 0.8s ease-in-out"
      bgColor={bgColor}
      width="full"
      alignItems="stretch"
      zIndex={1}
    >
      <Navbar />
      <SocialMedias />
      <Hero />
      <About />
      <Projects />
      <Contacts />
    </VStack>
  );
}
