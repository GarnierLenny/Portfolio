import { Box, BoxProps } from "@chakra-ui/react";

interface BackgroundLightProps extends BoxProps {
  color: string;
}

export default function BackgroundLight({
  color,
  ...rest
}: BackgroundLightProps) {
  return (
    <Box
      bgColor={color}
      boxShadow={`0px 0px 100px 100px ${color}`}
      zIndex={-2}
      position="absolute"
      rounded="full"
      {...rest}
    />
  );
}
