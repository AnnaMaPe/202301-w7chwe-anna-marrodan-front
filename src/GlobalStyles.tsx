import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,
::before,
::after {
  box-sizing: border-box;
}

body {
  width: 100vw;
  margin: 0;
  padding: 40px;
  font-size: 1.25rem;
  margin: 0;
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

}


ul {
  list-style: none;
  padding: 0;
}

a,
a:active,
a:visited {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  font-size: inherit;
  background-color: transparent;
}

`;

export default GlobalStyles;
