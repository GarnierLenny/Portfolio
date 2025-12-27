import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface BlurCardProps extends BoxProps {
  children: React.ReactNode;
}

export default function BlurCard({ children, ...rest }: BlurCardProps) {
  return (
    <Box
      p={10}
      borderRadius="2xl"
      width="full"
      height="full"
      bgColor="rgba(0, 0, 0, 0.02)"
      backdropFilter="blur(20px) saturate(180%)"
      boxShadow="0 8px 20px -5px oklch(0.5464 0.1433 151.69 / 0.25)"
      textAlign="center"
      zIndex={1}
      {...rest}
    >
      {children}
    </Box>
  );
}
