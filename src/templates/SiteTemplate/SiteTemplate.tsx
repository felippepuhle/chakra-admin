import React from 'react';
import { Box } from '@chakra-ui/core';
import { Switch, Route } from 'react-router-dom';

import Home from 'src/routes/Home';

import Header from './components/Header';
import SideNav from './components/SideNav';

const SiteTemplate: React.FC = () => (
  <>
    <Header />

    <SideNav display={['none', null, 'block']} maxWidth="18rem" width="full" />

    <Box pl={[0, null, '18rem']} mt="4rem">
      <Box as="main" mx="auto" mb="3rem" maxWidth="46rem" pt={8} px={5}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Box>
    </Box>
  </>
);

export default SiteTemplate;
