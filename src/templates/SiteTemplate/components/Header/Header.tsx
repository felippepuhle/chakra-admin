import React, { useMemo } from 'react';
import { Box, BoxProps, Flex, IconButton, useColorMode } from '@chakra-ui/core';

import MobileNav from './MobileNav';

const Header: React.FC<BoxProps> = props => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useMemo(() => (colorMode === 'dark' ? 'gray.700' : 'white'), [
    colorMode,
  ]);

  return (
    <Box
      as="header"
      pos="fixed"
      top="0"
      zIndex={4}
      left={[0, null, '18rem']}
      right="0"
      borderBottomWidth="1px"
      height="4rem"
      bg={bg}
      {...props}
    >
      <Flex size="100%" px="6" align="center" justify="flex-end">
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

          <MobileNav />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
