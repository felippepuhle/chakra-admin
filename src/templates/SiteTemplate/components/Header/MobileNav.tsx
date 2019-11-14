import React, { useMemo } from 'react';
import {
  Drawer,
  DrawerBody,
  IconButton,
  DrawerOverlay,
  DrawerContent,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/core';
import styled from '@emotion/styled';

import { SVG } from 'src/components';

import { SideNavMode } from '../SideNav/modules/constants';
import SideNavContent from '../SideNav/SideNavContent';

const MenuIcon = styled(SVG.Menu)`
  width: 20px;
  height: 20px;
`;

const MobileNav: React.FC = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onToggle, onClose } = useDisclosure();

  const mode = useMemo(
    () => (colorMode === 'dark' ? SideNavMode.DARK : SideNavMode.LIGHT),
    [colorMode],
  );

  return (
    <>
      <IconButton
        display={{ sm: 'inline-flex', md: 'none' }}
        aria-label="Navigation Menu"
        fontSize="20px"
        variant="ghost"
        icon={MenuIcon}
        onClick={onToggle}
      />

      <Drawer size="xs" isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody p={0}>
            <SideNavContent mode={mode} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNav;
