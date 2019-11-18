import React from 'react';
import { Box, BoxProps } from '@chakra-ui/core';

export type Props = {
  isFullscreen?: boolean;
};

const Body: React.FC<Props & BoxProps> = ({ isFullscreen, ...boxProps }) => (
  <Box
    as="main"
    mx="auto"
    py={['2rem', '2.5rem', '3rem']}
    px={['2rem', '2.5rem', '3rem']}
    maxWidth={isFullscreen ? 'auto' : '46rem'}
    {...boxProps}
  />
);

export default Body;
