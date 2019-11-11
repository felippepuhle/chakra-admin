import React from 'react';
import { Box, BoxProps } from '@chakra-ui/core';

import SideNavContent from './SideNavContent';

const SideNav: React.FC<BoxProps> = props => (
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
      <SideNavContent />
    </Box>
  </Box>
);

export default SideNav;
