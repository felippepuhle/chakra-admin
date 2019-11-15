import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Flex } from '@chakra-ui/core';

import { Logo } from 'src/components';

import { SideNavMode } from './modules/constants';

type Props = {
  mode?: SideNavMode;
};

const SideNavLogo: React.FC<Props> = ({ mode }) => {
  const borderColor = useMemo(
    () => (mode === SideNavMode.DARK ? 'whiteAlpha.300' : 'gray.200'),
    [mode],
  );

  return (
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
  );
};

export default SideNavLogo;
