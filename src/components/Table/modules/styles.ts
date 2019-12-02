import { css } from '@emotion/core';

export const cell = ({ theme }: any) => css`
  text-align: left;
  font-weight: 400;
  vertical-align: middle;
  padding: ${theme.space[2]}};

  &:first-child {
    padding-left: ${theme.space[4]}};
  }
  &:last-child {
    padding-right: ${theme.space[4]}};
  }
`;
