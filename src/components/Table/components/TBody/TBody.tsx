import React from 'react';

import TBodyTD from './TBodyTD';
import TBodyTR from './TBodyTR';

type CommonComponents = {
  TD: typeof TBodyTD;
  TR: typeof TBodyTR;
};

const TBody: React.FC & CommonComponents = ({ children }) => (
  <tbody>{children}</tbody>
);

TBody.TD = TBodyTD;
TBody.TR = TBodyTR;

export default TBody;
