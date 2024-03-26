import React from "react";
import { Box, Icon } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const Background = ({ children }) => {
  return (
    <Box position="relative" overflow="hidden" minHeight="100vh">
      <Box position="absolute" top={0} left={0} right={0} bottom={0} pointerEvents="none" zIndex={-1}>
        {[...Array(20)].map((_, index) => (
          <Icon key={index} as={FaHeart} position="absolute" color="red.500" fontSize="2xl" top={`${Math.random() * 100}%`} left={`${Math.random() * 100}%`} animation={`scroll ${Math.random() * 5 + 5}s linear infinite`} opacity={Math.random()} />
        ))}
      </Box>
      {children}
    </Box>
  );
};

export default Background;
