import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

export function MobileDrawer() {
  return (
    <Box>
      <Text>Logo</Text>
    </Box>
  );
}

export function Logo() {
  return (
    <Box placeSelf="center" rounded="full" bgColor="white">
      <Text fontSize="lg" color="white">
        AR
      </Text>
    </Box>
  );
}

type MenuLink = {
  name: string;
  href: string;
};

const links: MenuLink[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contacts", href: "#contacts" },
];

function MenuLinks({ isMobile = false }: { isMobile?: boolean }) {
  const LinkComponent = isMobile ? VStack : HStack;

  return (
    <LinkComponent gap={isMobile ? 4 : 8} align="center">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          color="black"
          fontWeight="medium"
          _hover={{ textDecoration: "underline" }}
          transition="color 0.2s ease"
        >
          <Text>{link.name}</Text>
        </Link>
      ))}
    </LinkComponent>
  );
}

function Navbar() {
  return (
    <Flex w="full" position="fixed" zIndex={2}>
      <Flex
        justifyContent={"flex-end"}
        flex={1}
        backgroundColor="transparent"
        paddingY="20px"
        paddingX="30px"
        gapX={10}
      >
        {/* <Logo /> */}
        <MenuLinks />
        <Button
          bg="white"
          bgColor="#058743"
          color="white"
          size="sm"
          shadow="xs"
          px={4}
          _hover={{
            transform: "translateY(-1px)",
            shadow: "sm",
          }}
          transition="all 0.2s ease"
        >
          <Link href="#contacts">
            <Text fontWeight="bold">Curriculum Vitae | CV</Text>
          </Link>
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
