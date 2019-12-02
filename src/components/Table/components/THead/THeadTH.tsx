import React, { useMemo } from 'react';
import { Text, useColorMode } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { cell } from '../../modules/styles';

const Wrapper = styled('th')`
  ${cell};
  text-transform: uppercase;
  font-size: ${({ theme }: any) => theme.fontSizes.sm};
  color: ${({ theme }: any) => theme.colors.gray[500]};
`;

const THeadTH: React.FC = ({ children }) => {
  const { colorMode } = useColorMode();

  const color = useMemo(
    () => (colorMode === 'dark' ? 'gray.400' : 'gray.500'),
    [colorMode],
  );

  return (
    <Wrapper>
      <Text color={color}>{children}</Text>
    </Wrapper>
  );
};

export default THeadTH;
