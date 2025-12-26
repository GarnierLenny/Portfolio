import { Button, Flex, Text, Image, Link } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BlurCard from "./blur-card";
import Lightbox from "yet-another-react-lightbox";
import MAC1 from "../../public/MAC-1.png";
import MAC2 from "../../public/MAC-2.png";
import MAC3 from "../../public/MAC-3.png";
import MAC4 from "../../public/MAC-4.png";
import MAC5 from "../../public/MAC-5.png";
import MAC6 from "../../public/MAC-6.png";
import MAC7 from "../../public/MAC-7.png";
import MAC8 from "../../public/MAC-8.png";
import NextJsImage from "./ui/next-js-image";
import { ArrowLeft, ArrowRight, ExternalLink, Maximize2 } from "lucide-react";

const previews: string[] = [
  "preview 1",
  "preview 2",
  "preview 3",
  "preview 4",
  "preview 5",
];

const images = [MAC1, MAC2, MAC3, MAC4, MAC5, MAC6, MAC7, MAC8];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const handlePrevImage = () => {
    setSelectedImage(
      selectedImage === 0 ? images.length - 1 : selectedImage - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImage(
      selectedImage === images.length - 1 ? 0 : selectedImage + 1
    );
  };

  return (
    <Flex
      id="projects"
      paddingX="250px"
      paddingY="100px"
      height="100vh"
      width="100vw"
      color="black"
    >
      <BlurCard gap={16} display="flex" direction="row">
        <Flex flex={1} direction="column">
          <Flex
            flex={4}
            bgColor="black"
            overflow="hidden"
            paddingY="20px"
            alignItems="center"
          >
            <ArrowLeft
              onClick={() => handlePrevImage()}
              style={{ cursor: "pointer", margin: "20px" }}
              color="#fff"
            />
            <Image
              alt="preview-image"
              maxH="100%"
              maxW="100%"
              flex={1}
              fit="contain"
              src={images[selectedImage].src}
            />
            <ArrowRight
              onClick={() => handleNextImage()}
              style={{ cursor: "pointer", margin: "20px" }}
              color="#fff"
            />
          </Flex>
          <Flex
            color="white"
            fontWeight="500"
            alignItems="center"
            justifyContent="space-between"
            paddingX="2%"
            bgColor="blackAlpha.800"
          >
            <Text fontSize={12}>
              {selectedImage + 1} / {images.length}
            </Text>
            <Button padding={0} onClick={() => setOpen(!open)} variant="ghost">
              <Maximize2 cursor="pointer" color="#fff" />
            </Button>
          </Flex>
          <Flex
            flex={1}
            bgColor="blackAlpha.400"
            paddingX="10%"
            w="full"
            gap={8}
          >
            {images.map((preview, index) => (
              <Flex
                onClick={() => setSelectedImage(index)}
                key={index}
                flex={1}
                alignItems="center"
                justifyContent="center"
                bgColor="black"
                marginY="10px"
                cursor="pointer"
              >
                <Image
                  alt="preview-image"
                  maxH="100%"
                  maxW="100%"
                  flex={1}
                  fit="contain"
                  src={preview.src}
                />
              </Flex>
            ))}
          </Flex>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={images}
            render={{ slide: NextJsImage }}
          />
        </Flex>
        <Flex textAlign="left" flex={1} gap={8} direction="column">
          <Flex
            fontSize={30}
            fontWeight="medium"
            direction="column"
            flex={7}
            gapY={8}
          >
            <Flex direction="column">
              <Text fontSize={30} fontWeight="bold">
                Mon MonAmiChef
              </Text>
              <Text fontSize={20} fontWeight="medium" opacity={0.5}>
                AI Meal Planning App Chef
              </Text>
            </Flex>
            <Flex gap={4} direction="column">
              <Text fontSize={20} fontWeight="500" color="black">
                An early-stage AI meal planning application built from concept
                to initial launch.
              </Text>
              <Text fontSize={20} fontWeight="500" color="black">
                I shaped the product idea, planned delivery timelines, and
                worked closely with a developer through iterative cycles,
                testing each version, providing feedback, and adjusting
                direction as the product evolved. I also defined the website and
                product look and supported early marketing efforts around
                launch.
              </Text>
            </Flex>
          </Flex>
          <Flex flex={1} gapX={8}>
            <Link target="_blank" flex={1} href="https://monamichef.com">
              <Button
                alignItems="center"
                justifyContent="center"
                backgroundColor="rgba(245, 245, 245)"
                flex={1}
                variant="solid"
                height="full"
                rounded="2xl"
                transition="all 0.2s ease-out"
                fontWeight="600"
                fontSize={15}
                shadow="sm"
                _hover={{
                  backgroundColor: "rgb(255, 255, 255)",
                  transform: "translateY(-3px)",
                  shadow: "md",
                }}
              >
                <Text>Visit MonAmiChef.com</Text>
                <ExternalLink />
              </Button>
            </Link>

            <Button
              alignItems="center"
              justifyContent="center"
              flex={1}
              height="full"
              variant="surface"
              rounded="2xl"
              disabled
              fontWeight="600"
              _hover={{
                backgroundColor: "rgb(50, 50, 50)",
                transform: "translateY(-5px)",
                shadow: "sm",
              }}
              fontSize={15}
            >
              <Text>Case study in progress...</Text>
            </Button>
          </Flex>
        </Flex>
      </BlurCard>
    </Flex>
  );
}
