import React from 'react';
import { Box } from '@chakra-ui/core';
import { Switch, Route } from 'react-router-dom';

import Home from 'src/routes/Home';

const Content: React.FC = () => (
  <Box pl={[0, null, '18rem']} pt="4rem" width="full" height="full">
    <Box as="main" mx="auto" mb="3rem" maxWidth="46rem" pt={8} px={5}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Box>
  </Box>
);

export default Content;
