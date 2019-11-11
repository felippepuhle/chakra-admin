import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'src/routes/Home';

const SiteTemplate: React.FC = () => (
  <>
    <header>Header</header>

    <main>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </main>

    <footer>Footer</footer>
  </>
);

export default SiteTemplate;
