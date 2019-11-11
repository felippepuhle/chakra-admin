import React from 'react';
import { BoxProps } from '@chakra-ui/core';

import SideNavBox from './SideNavBox';
import SideNavItem from './SideNavItem';

const SideNav: React.FC<BoxProps> = props => {
  return (
    <SideNavBox {...props}>
      <SideNavItem to="/">Home</SideNavItem>
      <SideNavItem to="/config">Config</SideNavItem>
      <SideNavItem to="/users">Users</SideNavItem>
    </SideNavBox>
  );
};

export default SideNav;
