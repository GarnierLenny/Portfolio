/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const lyrics: { timestamp: number; text: string }[] = [
  {
    text: "aboutLyrics.lyric1",
    timestamp: 0,
  },
  {
    text: "Building worlds out of logic. Turning abstract dreams into scalable reality.",
    timestamp: 0,
  },
  {
    text: "Clean code isn't just a goal. It's my rhythm. My signature. My daily craft.",
    timestamp: 0,
  },
  {
    text: "Trusted by Leads, aligned with Product. Because a great engineer speaks more than just 'binary'.",
    timestamp: 0,
  },
  {
    text: "I don't just ship features. I deliver trust. I solve problems. I communicate excellence.",
    timestamp: 0,
  },
  { text: "I’m Lenny. Let's build the next symphony together.", timestamp: 0 },
  { text: "I’m Lenny. Let's build the next symphony together.", timestamp: 0 },
  { text: "I’m Lenny. Let's build the next symphony together.", timestamp: 0 },
  { text: "I’m Lenny. Let's build the next symphony together.", timestamp: 0 },
];

type languages = "EN" | "FR";

const availablesLanguages: languages[] = ["EN", "FR"];

export default function About() {
  const [selectedLyric, setSelectedLyric] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState<languages>("EN");
  const ref = useRef([]);
  const { t, i18n } = useTranslation();

  return (
    <Flex
      id="about"
      zIndex={1}
      paddingX="150px"
      paddingY="100px"
      height="100vh"
      width="100vw"
      gap={10}
    >
      <Flex
        rounded="md"
        alignItems="center"
        justifyContent="center"
        bgColor="red"
        flex={3}
      >
        <Text>Video</Text>
      </Flex>
      <Flex
        paddingX="20px"
        paddingY="40px"
        direction="column"
        rounded="md"
        bgColor="#058743"
        overflow="scroll"
        overflowX="hidden"
        flex={2}
        gapY={10}
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        <Flex
          transition="all ease-in-out 2.1s"
          alignSelf="flex-end"
          rounded="md"
          bgColor="#036521"
        >
          {availablesLanguages.map((language, index) => {
            const active = selectedLanguage === language;

            return (
              <Text
                onClick={() => {
                  setSelectedLanguage(language);
                  i18n.changeLanguage(language.toLowerCase());
                }}
                fontSize={20}
                bgColor={active ? "white" : "transparent"}
                color={active ? "#058743" : "white"}
                shadow={active ? "none" : "inner"}
                key={index}
                roundedTopLeft={index === 0 ? "md" : "none"}
                roundedBottomLeft={index === 0 ? "md" : "none"}
                roundedTopRight={
                  index === availablesLanguages.length - 1 ? "md" : "none"
                }
                roundedBottomRight={
                  index === availablesLanguages.length - 1 ? "md" : "none"
                }
                _hover={{
                  backgroundColor: active ? "white" : "#015410",
                }}
                paddingX={5}
                paddingY={1}
                fontWeight="medium"
                cursor="pointer"
              >
                {language}
              </Text>
            );
          })}
        </Flex>
        {lyrics.map((lyric, index) => (
          <Text
            fontSize={35}
            // ref={el => ref.current[index] = el}
            transition="all ease-in-out 0.1s"
            fontWeight="semibold"
            letterSpacing="-0.03em"
            color={
              index === selectedLyric ? "white" : "rgba(255, 255, 255, 0.5)"
            }
            cursor="pointer"
            key={index}
            _hover={{
              color: "white",
              textDecoration: "underline",
            }}
          >
            {t(lyric.text)}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
}
