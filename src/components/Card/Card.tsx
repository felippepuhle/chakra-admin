import React, { useMemo } from 'react';
import { Box, BoxProps, useColorMode } from '@chakra-ui/core';

const Card: React.FC<BoxProps> = props => {
  const { colorMode } = useColorMode();

  const bg = useMemo(() => (colorMode === 'dark' ? 'gray.700' : 'white'), [
    colorMode,
  ]);

  return (
    <Box bg={bg} padding={4} borderRadius={4} borderWidth={1} {...props} />
  );
};

export default Card;
