import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

*,
:root {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: linear-gradient( #C569F0, #6C83F5);
  font-family: 'Roboto','Times New Roman', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;

export default GlobalStyles;
