import { Flex, Text, Link } from "@chakra-ui/react";
import {
  createLucideIcon,
  Github,
  Instagram,
  Linkedin,
  LucideIcon,
} from "lucide-react";

const XIcon = createLucideIcon("X", [
  [
    "path",
    {
      d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
      stroke: "none",
      fill: "#058743",
      key: "x-path-1",
    },
  ],
]);

const socialLinks: { url: string; icon: LucideIcon }[] = [
  { url: "https://github.com/GarnierLenny", icon: Github },
  {
    url: "https://www.linkedin.com/in/lenny-garnier-2ab689199/",
    icon: Linkedin,
  },
  {
    url: "https://x.com/lennygrnr",
    icon: XIcon,
  },
  {
    url: "https://www.instagram.com/g_.lenny/",
    icon: Instagram,
  },
];

function SocialLink({ url, icon }: { url: string; icon: LucideIcon }) {
  const Icon = icon;

  return (
    <Link as="a" target="_blank" cursor="pointer" href={url} padding={4}>
      <Icon color="#058743" size={25} />
    </Link>
  );
}

export default function SocialMedias() {
  return (
    <Flex
      position="fixed"
      id="about"
      direction="column"
      zIndex={2}
      height="100vh"
      justifyContent="center"
    >
      {socialLinks.map((link, index) => (
        <SocialLink key={index} url={link.url} icon={link.icon} />
      ))}
    </Flex>
  );
}
