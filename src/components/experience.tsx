import {
  chakra,
  Flex,
  Grid,
  GridItem,
  Link,
  Text,
  Timeline,
} from "@chakra-ui/react";
import BlurCard from "./blur-card";
import { stackIcons, Technology } from "@/utils/stack-icons";
import { formatDistance } from "date-fns";

type Experience = {
  occupation: string;
  type: string;
  title: string;
  duration: string;
  paragraphs: string[];
  images: string[];
  techStack: Technology[];
};

const experiences: Experience[] = [
  {
    title: "Polycea",
    occupation: "Fullstack Developer",
    type: "Internship + CDI",
    duration: formatDistance(
      new Date("May 12 2025"),
      new Date("January 12 2026")
    ),
    paragraphs: [
      "Polycea is a consulting firm that builds large-scale digital platforms for major companies.",
      "I managed the 'Single Customer Identifier' system and built a secure authentication flow to sync users across the company's software ecosystem.",
      "I worked closely with Product Managers and other developers every day to turn complex business requirements into clean, functional code.",
      "Throughout my journey, I juggled between front-end and back-end tasks, making sure both sides of the app worked perfectly together.",
      "I was lucky to work with an amazing team, and I'm happy to say I left with the full support and recommendations of my PMs and senior peers.",
    ],
    images: [],
    techStack: [
      stackIcons.react,
      stackIcons.typescript,
      stackIcons.postgresql,
      stackIcons.prisma,
      stackIcons.nestjs,
      stackIcons.git,
      stackIcons.tailwind,
      stackIcons.zod,
    ],
  },
  {
    title: "Racemappr",
    occupation: "Fullstack Developer",
    type: "Freelance",
    duration: formatDistance(
      new Date("September 2 2024"),
      new Date("May 2 2025")
    ),
    paragraphs: [
      "Racemappr is a German startup on a mission to make marathon discovery and registration easier for runners worldwide.",
      "I worked on both the web and mobile versions of the app, switching daily between React and React Native to keep features consistent across all platforms.",
      "I was responsible for bridging the gap between the front-end and the back-end, using Firebase to handle real-time data and user authentication.",
      "As the app was growing, I focused on building smooth registration flows to help runners sign up for races without any friction.",
      "Being in a startup environment, I had to be very autonomous and proactive in suggesting technical improvements for the mobile app.",
    ],
    images: [],
    techStack: [
      stackIcons.react,
      stackIcons.reactnative,
      stackIcons.typescript,
      stackIcons.supabase,
      stackIcons.prisma,
      stackIcons.git,
      stackIcons.tailwind,
      stackIcons.zod,
    ],
  },
  {
    title: "Feelbat",
    occupation: "Fullstack Developer",
    type: "Internship",
    duration: formatDistance(
      new Date("April 04 2023"),
      new Date("September 05 2024")
    ),
    paragraphs: [
      "Feelbat is a startup that develops smart sensors to monitor structural cracks in buildings.",
      "I worked on the mobile application that allows users to track crack evolution in real-time based on data sent by the physical sensors.",
      "During this internship, I juggled between front-end and back-end tasks, focusing on refactoring the existing code to make the app more stable and performant.",
      "I was responsible for implementing new features for end-users, ensuring that the data visualization was clear and reliable for safety monitoring.",
      "Working in a specialized startup like this taught me how to bridge the gap between hardware data and a smooth mobile user experience.",
    ],
    images: [],
    techStack: [
      stackIcons.reactnative,
      stackIcons.typescript,
      stackIcons.supabase,
      stackIcons.graphql,
      stackIcons.i18n,
      stackIcons.git,
      stackIcons.tailwind,
      stackIcons.zod,
    ],
  },
  {
    title: "Epitech",
    occupation: "Pedagogical Assistant",
    type: "Part-time",
    duration: formatDistance(new Date("2022-10-01"), new Date("2023-03-01")),
    paragraphs: [
      "At Epitech, I served as a Pedagogical Assistant, helping other students master complex programming concepts.",
      "I gave technical presentations and led lectures in the amphitheater, sharing best practices in C, C++, and systems programming.",
      "I was responsible for organizing workshops and mentoring students on their projects, making sure they understood the 'why' behind the code.",
      "I also managed and graded exams, which required a lot of rigor and a deep understanding of Epitech's technical standards.",
      "This experience allowed me to develop strong communication skills and the ability to explain technical topics in a simple, clear way.",
    ],
    images: [],
    techStack: [
      stackIcons.c,
      stackIcons.cpp,
      stackIcons.git,
      stackIcons.linux,
      stackIcons.bash,
    ],
  },
];

export default function Experience() {
  return (
    <Flex
      id="experience"
      zIndex={1}
      paddingX="140px"
      paddingY="50px"
      height="100vh"
      width="100vw"
      gap={10}
      color="black"
    >
      <Flex
        borderWidth={3}
        rounded="2xl"
        borderStyle="dashed"
        borderColor="gray.200"
        flex={1}
      >
        {/* Timeline section */}
        <Flex
          justifyContent="center"
          alignItems="center"
          direction="column"
          flex={2}
        >
          <Timeline.Root
            flex={1}
            justifyContent="center"
            paddingX="30%"
            size="md"
          >
            {experiences.map((exp, index) => {
              return (
                <Timeline.Item key={index}>
                  <Timeline.Connector>
                    <Timeline.Separator />
                    <Timeline.Indicator />
                  </Timeline.Connector>
                  <Timeline.Content>
                    <Timeline.Title fontSize="md">{exp.title}</Timeline.Title>
                    <Timeline.Title fontSize="xs" color="gray.500">
                      {exp.occupation}
                    </Timeline.Title>
                  </Timeline.Content>
                </Timeline.Item>
              );
            })}
          </Timeline.Root>
        </Flex>

        {/* Cards section */}
        <Flex
          overflowY="scroll"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
          }}
          padding="50px"
          paddingTop="150px"
          direction="column"
          flex={5}
          gapY={20}
        >
          {experiences.map((exp, index) => {
            return (
              <BlurCard
                display="flex"
                textAlign="left"
                direction="column"
                minH="100%"
                flex={1}
                key={index}
                rounded="xl"
                gapY={8}
                gapX={16}
              >
                <Flex flex={9} gapY={8} direction="column">
                  <Flex gapY={2} direction="column">
                    <Text fontSize={25} fontWeight="semibold">
                      {exp.title}
                    </Text>
                    <Text fontSize={18} color="gray.400">
                      {exp.occupation} - {exp.type} - {exp.duration}
                    </Text>
                  </Flex>
                  <Flex gap={16} flex={1}>
                    {/* Paragraphs */}
                    <Flex direction="column" gapY={4} flex={7}>
                      {exp.paragraphs.map((paragraph, index) => (
                        <Text fontSize="md" key={index}>
                          {paragraph}
                        </Text>
                      ))}
                    </Flex>
                  </Flex>
                </Flex>
                {/* Tech stack */}
                <Flex
                  bg="whiteAlpha.700"
                  padding="20px"
                  rounded="lg"
                  shadow="inset 0px 4px 10px rgba(0, 0, 0, 0.1)"
                  textAlign="center"
                  direction="column"
                  gapY={8}
                  flex={2}
                >
                  <Text fontSize="lg" fontWeight="medium">
                    Technologies
                  </Text>
                  <Grid templateColumns="repeat(2, 1fr)">
                    {exp.techStack.map((tech, index) => {
                      return (
                        <GridItem key={index} padding="10px">
                          <Link
                            target="_blank"
                            href={tech.url}
                            display="flex"
                            color="black"
                            direction="column"
                            justifyContent={"center"}
                            alignItems="center"
                            textAlign="center"
                            flex={1}
                          >
                            <Flex
                              direction="column"
                              justifyContent={"center"}
                              alignItems="center"
                              textAlign="center"
                              flex={1}
                              gapY={2}
                              marginY={2}
                            >
                              <chakra.img
                                src={tech.icon}
                                alt={tech.name}
                                width="35px"
                                height="35px"
                              />
                              <Text fontSize="sm">{tech.name}</Text>
                            </Flex>
                          </Link>
                        </GridItem>
                      );
                    })}
                  </Grid>
                </Flex>
              </BlurCard>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}
