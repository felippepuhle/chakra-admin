import React from 'react';
import { Box } from '@chakra-ui/core';

import { SideNavMode } from './modules/constants';
import SideNavContent from './SideNavContent';

const SideNav: React.FC = () => (
  <Box
    as="aside"
    position="fixed"
    left="0"
    width="100%"
    height="100%"
    top="0"
    right="0"
    bg="gray.700"
    display={['none', null, 'block']}
    maxWidth="18rem"
  >
    <Box position="relative" overflowY="auto" height="full">
      <SideNavContent mode={SideNavMode.DARK} />
    </Box>
  </Box>
);

export default SideNav;
