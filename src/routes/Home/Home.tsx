import React from 'react';
import { Grid } from '@chakra-ui/core';

import { SiteTemplate } from 'src/templates';

import StatCard from './components/StatCard';

const Home: React.FC = () => (
  <SiteTemplate.Body isFullscreen>
    <Grid
      templateColumns={[null, null, 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
      gap={['1rem', '1.25rem', '1.5rem']}
    >
      <StatCard
        icon={{ name: 'view', color: 'gray.500' }}
        title="Views"
        value="1,234"
      />
      <StatCard
        icon={{ name: 'up-down', color: 'green.300' }}
        title="Revenue"
        value="$1,234k"
      />
      <StatCard
        icon={{ name: 'warning', color: 'red.300' }}
        title="Errors"
        value="1234"
      />
      <StatCard
        icon={{ name: 'star', color: 'orange.200' }}
        title="Followers"
        value="+1234k"
      />
    </Grid>
  </SiteTemplate.Body>
);

export default Home;
