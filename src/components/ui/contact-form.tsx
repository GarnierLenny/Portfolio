import { useForm, ValidationError } from "@formspree/react";
import { Button, Input, Textarea, Heading, Text, Flex } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";

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
      color="black"
    >
      <Flex
        as="form"
        padding="50px"
        bg="gray.100"
        rounded="xl"
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
            <Input id="firstName" name="firstName" bgColor="white" />
          </FormControl>

          <FormControl isRequired flex={1}>
            <FormLabel fontWeight="500" htmlFor="lastName">
              Last name
            </FormLabel>
            <Input id="lastName" name="lastName" bgColor="white" />
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
            bgColor="white"
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
          <Textarea id="message" name="message" rows={5} bgColor="white" />
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
      </Flex>
    </Flex>
  );
}

export default ContactForm;
