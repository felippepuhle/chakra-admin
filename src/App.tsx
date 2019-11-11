import React from 'react';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SiteTemplate from 'src/templates/SiteTemplate';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ColorModeProvider value="light">
        <CSSReset />

        <Router basename={process.env.PUBLIC_URL}>
          <Route component={SiteTemplate} />
        </Router>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
