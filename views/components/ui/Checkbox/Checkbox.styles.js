import styled from "styled-components"

import { N800 } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';


export const Label = styled.span`
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  color: ${token("color.text", N800)};
`