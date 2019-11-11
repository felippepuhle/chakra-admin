import React from 'react';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SiteTemplate from 'src/templates/SiteTemplate';
import { THEME } from 'src/styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={THEME}>
      <ColorModeProvider value="light">
        <CSSReset />

        <Global
          styles={css`
            html,
            body,
            #root {
              width: 100%;
              height: 100%;
            }
          `}
        />

        <Router basename={process.env.PUBLIC_URL}>
          <Route component={SiteTemplate} />
        </Router>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
