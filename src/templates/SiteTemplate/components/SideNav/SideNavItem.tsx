import React, { useMemo } from 'react';
import { PseudoBox, useColorMode } from '@chakra-ui/core';
import { Link, useLocation } from 'react-router-dom';

const ACTIVE_IF_EXACT = ['/'];

type Props = {
  to: string;
};

const SideNavItem: React.FC<Props> = props => {
  const { to } = props;

  const location = useLocation();

  const isActive = useMemo(
    () =>
      ACTIVE_IF_EXACT.indexOf(to) > -1
        ? location.pathname === to
        : location.pathname.indexOf(to) > -1,
    [to, location.pathname],
  );

  const { colorMode } = useColorMode();
  const hoverColor = useMemo(
    () => (colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.900'),
    [colorMode],
  );
  const activeColor = useMemo(
    () => (colorMode === 'dark' ? 'teal.200' : 'teal.500'),
    [colorMode],
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
