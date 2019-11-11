import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SiteTemplate from './templates/SiteTemplate';

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route component={SiteTemplate} />
    </Router>
  );
};

export default App;
