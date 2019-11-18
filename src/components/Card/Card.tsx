import React from 'react';
import { Box, BoxProps } from '@chakra-ui/core';

const Card: React.FC<BoxProps> = props => (
  <Box bg="white" padding={4} borderRadius={4} borderWidth={1} {...props} />
);

export default Card;
