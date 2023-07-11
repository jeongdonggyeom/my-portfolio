import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button, input[type=button], input[type=submit], a{
    cursor: pointer;
  }

  a{
    text-decoration: none;
    color: black;
  }

  li, ul {
    list-style: none;
  }
`;

export default GlobalStyle;