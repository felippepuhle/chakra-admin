import React from 'react';
import { Box, BoxProps } from '@chakra-ui/core';

import { SideNavMode } from './modules/constants';
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
    bg="gray.700"
    {...props}
  >
    <Box position="relative" overflowY="auto" height="full">
      <SideNavContent mode={SideNavMode.DARK} />
    </Box>
  </Box>
);

export default SideNav;
