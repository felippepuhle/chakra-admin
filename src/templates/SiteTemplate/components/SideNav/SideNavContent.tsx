import React from 'react';
import { Box, BoxProps } from '@chakra-ui/core';

import SideNavItem from './SideNavItem';

const SideNavContent: React.FC<BoxProps> = props => (
  <Box as="nav" aria-label="Main navigation" fontSize="sm" p="6" {...props}>
    <SideNavItem to="/">Home</SideNavItem>
    <SideNavItem to="/config">Config</SideNavItem>
    <SideNavItem to="/users">Users</SideNavItem>
  </Box>
);

export default SideNavContent;
