import styled from 'styled-components';

import { N0 } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  border-radius: 15px;
  background-color: ${token("elevation.surface", N0)};
`