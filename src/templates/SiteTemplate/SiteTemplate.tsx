import React from 'react';

import Header from './components/Header';
import SideNav from './components/SideNav';
import Body, { Props as BodyProps } from './components/Body';
import Content from './components/Content';
import Footer from './components/Footer';

type CommonComponents = {
  Body: React.FC<BodyProps>;
};

const SiteTemplate: React.FC & CommonComponents = () => (
  <>
    <Header />
    <SideNav />
    <Content />
    <Footer />
  </>
);

SiteTemplate.Body = Body;

export default SiteTemplate;
