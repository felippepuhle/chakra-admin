import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Box, BoxProps, Flex } from '@chakra-ui/core';

import { Logo } from 'src/components';

import { SideNavMode, MENU } from './modules/constants';
import SideNavItem from './SideNavItem';

type Props = BoxProps & {
  mode?: SideNavMode;
};

const SideNavContent: React.FC<Props> = ({ mode, ...props }) => {
  const borderColor = useMemo(
    () => (mode === SideNavMode.DARK ? 'whiteAlpha.300' : 'gray.200'),
    [mode],
  );

  return (
    <Box as="nav" aria-label="Main navigation" fontSize="sm" px="6" {...props}>
      <Flex
        align="center"
        height="4rem"
        borderBottomWidth="1px"
        borderColor={borderColor}
      >
        <Link to="/" aria-label="Chakra UI, Back to homepage">
          <Logo inverted={mode === SideNavMode.DARK} />
        </Link>
      </Flex>

      <Box mt="6">
        {MENU.map(item => (
          <SideNavItem key={item.to} to={item.to} mode={mode}>
            {item.label}
          </SideNavItem>
        ))}
      </Box>
    </Box>
  );
};

export default SideNavContent;
