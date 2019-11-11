import React, { useMemo } from 'react';
import { Box, BoxProps, Flex, IconButton, useColorMode } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

import { Logo } from 'src/components';

const Header: React.FC<BoxProps> = props => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="header"
      pos="fixed"
      top="0"
      zIndex={4}
      left="0"
      right="0"
      borderBottomWidth="1px"
      width="full"
      height="4rem"
      {...props}
    >
      <Flex size="100%" px="6" align="center" justify="space-between">
        <Link to="/" aria-label="Chakra UI, Back to homepage">
          <Logo inverted={colorMode === 'dark'} />
        </Link>

        <Flex align="center" color="gray.500">
          <IconButton
            aria-label={`Switch to ${
              colorMode === 'light' ? 'dark' : 'light'
            } mode`}
            variant="ghost"
            color="current"
            ml="2"
            fontSize="20px"
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? 'moon' : 'sun'}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
