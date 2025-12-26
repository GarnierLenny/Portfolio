import { Text, Flex, Box, Button } from "@chakra-ui/react";
import { ArrowDown, Play } from "lucide-react";

export default function Hero() {
  return (
    <Flex
      id="hero"
      height="100vh"
      width="100vw"
      direction="column"
      justifyContent="center"
      alignItems="center"
      // bg="linear-gradient(to bottom, {colors.gray.100}, {colors.gray.300})"
    >
      <Flex maxW="70ch" gap={10} direction="column">
        <Flex direction="column" alignItems="center" textAlign="center" px={6}>
          <Text
            fontWeight="bold"
            fontSize={{ base: "50px", md: "90px" }}
            lineHeight="1"
            letterSpacing="-0.03em"
            color="gray.800"
          >
            Lenny Garnier
          </Text>

          <Text
            fontWeight="medium"
            fontSize={{ base: "20px", md: "30px" }}
            color="gray.600"
            mt={2}
          >
            Fullstack Developer
          </Text>
        </Flex>
        <Box
          alignSelf="center"
          textAlign={"center"}
          color="black"
          textWrap="wrap"
          borderStyle="dashed"
          width="85%"
          borderWidth={2}
          borderColor="#058743"
          paddingX={5}
          paddingY={5}
          rounded="md"
        >
          <Text>
            Delivering high-quality, clean and scalable code. Trusted by Tech
            Leads and Product Managers for rigorous programming and efficient
            communication
          </Text>
        </Box>
        <Flex
          width="85%"
          alignSelf="center"
          gap={12}
          justifyContent="center"
          color="black"
        >
          <Button
            paddingY={6}
            color="black"
            fontSize={18}
            flex={1}
            variant="outline"
            transition="all ease-in .2s"
            justifyContent="center"
            alignItems="center"
            gap={4}
            borderWidth="2px"
            borderColor="#058743"
            _hover={{
              backgroundColor: "gray.100",
              color: "#058743",
              transform: "translateY(-1px)",
            }}
          >
            <Text>Explore Projects</Text>
            <ArrowDown strokeWidth={3} color="#058743" />
          </Button>
          <Button
            paddingY={6}
            fontSize={18}
            variant="solid"
            bgColor="#058743"
            color="white"
            flex={1}
            gap={4}
            _hover={{
              backgroundColor: "#047634",
              color: "#white",
              transform: "translateY(-1px)",
            }}
          >
            <Text>Watch Intro Video</Text>
            <Play strokeWidth={3} width={120} color="white" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
