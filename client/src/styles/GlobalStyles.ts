import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
  font-family: 'helvetica';
}

html, body, #root {
  width: 100%;
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  font-family: inherit;
}
`;
