import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('tr')`
  &:nth-of-type(odd) {
    background-color: ${({ theme }: any) => theme.colors.blackAlpha[50]};
  }
`;

const TBodyTR: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default TBodyTR;
