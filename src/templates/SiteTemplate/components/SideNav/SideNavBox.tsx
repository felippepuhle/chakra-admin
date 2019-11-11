import React from 'react';
import { Box, BoxProps } from '@chakra-ui/core';

const SideNavBox: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      as="aside"
      position="fixed"
      left="0"
      width="100%"
      height="100%"
      top="0"
      right="0"
      {...props}
    >
      <Box
        top="4rem"
        position="relative"
        overflowY="auto"
        borderRightWidth="1px"
        height="full"
      >
        <Box as="nav" aria-label="Main navigation" fontSize="sm" p="6">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default SideNavBox;
