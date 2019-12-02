import React from 'react';
import styled from '@emotion/styled';

import TBody from './components/TBody';
import THead from './components/THead';

const Wrapper = styled('table')`
  width: 100%;
  max-width: 100%;
`;

type CommonComponents = {
  TBody: typeof TBody;
  THead: typeof THead;
};

const Table: React.FC & CommonComponents = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

Table.TBody = TBody;
Table.THead = THead;

export default Table;
