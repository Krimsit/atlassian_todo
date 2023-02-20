import styled from 'styled-components';

import { N30A } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';

export const Base = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 32px;
  background-color: transparent;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${token("color.border", N30A)};
  }
`