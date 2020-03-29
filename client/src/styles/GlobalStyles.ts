import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export const GlobalStyles = createGlobalStyle`

html, body, #root {
  width: 100%;
  height: 100%;
}

html {
  box-sizing: border-box;
  font-family: 'helvetica';
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundColor}
}

body > *,
*::before,
*::after {
  box-sizing: inherit;
  font-family: inherit;
  position: relative;
  display: block;
}
`;
