import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Box,
  Button,
  Input,
  Textarea,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Container,
  Flex,
  Separator,
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { SocialIcon } from "react-social-icons";

function ContactForm() {
  const [state, handleSubmit] = useForm("meejnkdb");

  if (state.succeeded) {
    return (
      <Flex
        direction="column"
        textAlign="center"
        height="100%"
        width="100%"
        justifyContent={"center"}
        alignItems="center"
      >
        <Heading as="h2" size="xl" color="green.500" mb={2}>
          Message sent !
        </Heading>
        <Text color={"gray.500"}>
          you for your message, I&apos;ll get back to you soon.
        </Text>
      </Flex>
    );
  }

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      px={4}
      flex={1}
      zIndex={1}
      maxW="container.md"
    >
      <Flex
        as="form"
        padding="50px"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSubmit={handleSubmit as any}
        direction="column"
        w="100%"
        gap={5}
      >
        <Heading fontSize={30} as="h2" size="lg" textAlign="center" mb={10}>
          Send me a message
        </Heading>
        {/* Ligne Prénom et Nom : flex={1} est sur les FormControl */}
        <Flex direction={{ base: "column", md: "row" }} gap={4} w="100%">
          <FormControl isRequired flex={1}>
            <FormLabel fontWeight="500" htmlFor="firstName">
              First name
            </FormLabel>
            <Input
              id="firstName"
              name="firstName"
              bgColor="rgba(255, 255, 255, 0.2)"
            />
          </FormControl>

          <FormControl isRequired flex={1}>
            <FormLabel fontWeight="500" htmlFor="lastName">
              Last name
            </FormLabel>
            <Input
              id="lastName"
              name="lastName"
              bgColor="rgba(255, 255, 255, 0.2)"
            />
          </FormControl>
        </Flex>
        {/* Email */}
        <FormControl isRequired>
          <FormLabel fontWeight="500" htmlFor="email">
            Email address
          </FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            bgColor="rgba(255, 255, 255, 0.2)"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            style={{ color: "#E53E3E", fontSize: "0.875rem" }}
          />
        </FormControl>
        {/* Message */}
        <FormControl isRequired>
          <FormLabel fontWeight="500" htmlFor="message">
            Message
          </FormLabel>
          <Textarea
            id="message"
            name="message"
            rows={5}
            bgColor="rgba(255, 255, 255, 0.2)"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            style={{ color: "#E53E3E", fontSize: "0.875rem" }}
          />
        </FormControl>
        <Button
          type="submit"
          variant="solid"
          height="full"
          rounded="md"
          transition="all 0.2s ease-out"
          fontWeight="600"
          fontSize={15}
          paddingY={3}
          shadow="sm"
          cursor="pointer"
          _hover={{
            backgroundColor: "rgb(255, 255, 255)",
            transform: "translateY(-3px)",
            shadow: "md",
          }}
          colorScheme="blue"
          size="lg"
          w="full"
          mt={2}
        >
          Send message
        </Button>
        <Flex paddingY={2} justifyContent="center" gap={5}>
          <SocialIcon
            url="https://www.linkedin.com/in/arshiyaa-rai-56aa342b5/"
            borderRadius="10%"
          />
          <SocialIcon
            bgColor="rgba(30, 30, 30, 1)"
            url="https://x.com/ArshiyaaRai"
            borderRadius="10%"
          />
          <SocialIcon
            url="https://www.instagram.com/arshiiiyyaaaaaaaa/"
            borderRadius="10%"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ContactForm;
