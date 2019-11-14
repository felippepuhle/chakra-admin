import React from 'react';

import Header from './components/Header';
import SideNav from './components/SideNav';
import Content from './components/Content';
import Footer from './components/Footer';

const SiteTemplate: React.FC = () => (
  <>
    <Header />

    <SideNav display={['none', null, 'block']} maxWidth="18rem" width="full" />

    <Content />

    <Footer />
  </>
);

export default SiteTemplate;
