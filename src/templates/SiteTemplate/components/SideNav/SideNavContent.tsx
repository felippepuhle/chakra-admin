import React from 'react';
import { Box, BoxProps } from '@chakra-ui/core';

import { SideNavMode, MENU } from './modules/constants';
import SideNavItem from './SideNavItem';
import SideNavLogo from './SideNavLogo';
import SideNavProfile from './SideNavProfile';

type Props = BoxProps & {
  mode?: SideNavMode;
};

const SideNavContent: React.FC<Props> = ({ mode, ...props }) => (
  <Box as="nav" aria-label="Main navigation" fontSize="sm" px="6" {...props}>
    <SideNavLogo mode={mode} />
    <SideNavProfile mode={mode} />

    <Box mt="6">
      {MENU.map(item => (
        <SideNavItem key={item.to} to={item.to} mode={mode}>
          {item.label}
        </SideNavItem>
      ))}
    </Box>
  </Box>
);

export default SideNavContent;
