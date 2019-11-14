import React, { useMemo } from 'react';
import { Box, useColorMode } from '@chakra-ui/core';
import { Switch, Route } from 'react-router-dom';

import Home from 'src/routes/Home';

const Content: React.FC = () => {
  const { colorMode } = useColorMode();

  const bg = useMemo(() => (colorMode === 'dark' ? 'gray.600' : 'gray.50'), [
    colorMode,
  ]);

  return (
    <Box ml={[0, null, '18rem']} mt="4rem" height="full" bg={bg}>
      <Box as="main" mx="auto" pb="3rem" maxWidth="46rem" pt={8} px={5}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Box>
    </Box>
  );
};

export default Content;
