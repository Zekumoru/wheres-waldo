import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    background-color: #18191a;
    color: #e6e6e6;
    color-scheme: dark;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
