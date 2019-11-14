import React, { useMemo } from 'react';
import { PseudoBox } from '@chakra-ui/core';
import { Link, useLocation } from 'react-router-dom';

import { SideNavMode } from './modules/constants';

const ACTIVE_IF_EXACT = ['/'];

type Props = {
  mode?: SideNavMode;
  to: string;
};

const SideNavItem: React.FC<Props> = props => {
  const { mode, to } = props;

  const location = useLocation();

  const isActive = useMemo(
    () =>
      ACTIVE_IF_EXACT.indexOf(to) > -1
        ? location.pathname === to
        : location.pathname.indexOf(to) > -1,
    [to, location.pathname],
  );

  const color = useMemo(
    () => (mode === SideNavMode.DARK ? 'whiteAlpha.900' : 'gray.800'),
    [mode],
  );
  const hoverColor = useMemo(
    () => (mode === SideNavMode.DARK ? 'white' : 'gray.900'),
    [mode],
  );
  const activeColor = useMemo(
    () => (mode === SideNavMode.DARK ? 'main.200' : 'main.500'),
    [mode],
  );

  return (
    <PseudoBox
      as={Link}
      mx={-2}
      display="flex"
      px="2"
      py="1"
      transition="all 0.2s"
      fontWeight="medium"
      outline="none"
      _notFirst={{ mt: 1 }}
      aria-current={isActive ? 'page' : undefined}
      color={color}
      _hover={{
        color: hoverColor,
        transform: 'translateX(2px)',
      }}
      {...(isActive && {
        fontWeight: 'semibold',
        rounded: 'sm',
        color: activeColor,
        _hover: {},
      })}
      {...props}
    />
  );
};

export default SideNavItem;
