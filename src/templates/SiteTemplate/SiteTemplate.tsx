import React from 'react';

import Header from './components/Header';
import SideNav from './components/SideNav';
import Content from './components/Content';

const SiteTemplate: React.FC = () => (
  <>
    <Header />

    <SideNav display={['none', null, 'block']} maxWidth="18rem" width="full" />

    <Content />
  </>
);

export default SiteTemplate;
