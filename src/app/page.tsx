"use client";

import About from "@/components/about";
import Contacts from "@/components/contacts";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import SocialMedias from "@/components/social-medias";
import { VStack } from "@chakra-ui/react";
import "../i18n/config";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <VStack
      transition="background-color 0.8s ease-in-out"
      bgColor="white"
      width="full"
      alignItems="stretch"
      zIndex={1}
      gap={0}
    >
      <Navbar />
      <SocialMedias />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contacts />
    </VStack>
  );
}
