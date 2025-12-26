import { Text, Flex } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import BlurCard from "./blur-card";
import ContactForm from "./ui/contact-form";

export default function Contacts() {
  return (
    <Flex
      id="contacts"
      gap={0}
      height="100vh"
      width="50vw"
      alignSelf="center"
      justifyContent="center"
      color="white"
    >
      <ContactForm />
    </Flex>
  );
}
