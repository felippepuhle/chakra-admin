import React, { useMemo } from 'react';
import { Box, BoxProps, useColorMode } from '@chakra-ui/core';

import CardHeader from './components/CardHeader';
import CardBody from './components/CardBody';

type Props = BoxProps;

type CommonComponents = {
  Header: typeof CardHeader;
  Body: typeof CardBody;
};

const Card: React.FC<Props> & CommonComponents = props => {
  const { colorMode } = useColorMode();

  const bg = useMemo(() => (colorMode === 'dark' ? 'gray.700' : 'white'), [
    colorMode,
  ]);

  return <Box bg={bg} borderRadius={4} borderWidth={1} {...props} />;
};

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
