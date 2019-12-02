import React, { useMemo } from 'react';
import { Text, useColorMode } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { cell } from '../../modules/styles';

const Wrapper = styled('td')`
  ${cell};
  font-size: ${({ theme }: any) => theme.fontSizes.md};
  padding-top: ${({ theme }: any) => theme.space[3]}};
  padding-bottom: ${({ theme }: any) => theme.space[3]}};
  border-top-width: 1px;
`;

const TBodyTD: React.FC = ({ children }) => {
  const { colorMode } = useColorMode();

  const color = useMemo(
    () => (colorMode === 'dark' ? 'gray.300' : 'gray.600'),
    [colorMode],
  );

  return (
    <Wrapper>
      <Text color={color}>{children}</Text>
    </Wrapper>
  );
};

export default TBodyTD;
