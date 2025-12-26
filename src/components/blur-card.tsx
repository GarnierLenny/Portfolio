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
      bgColor="rgba(0, 0, 0, 0.05)"
      backdropFilter="blur(20px) saturate(180%)"
      boxShadow="0 8px 50px 0px oklch(70.5% 0.213 47.604 / 0.25)"
      textAlign="center"
      zIndex={1}
      {...rest}
    >
      {children}
    </Box>
  );
}
