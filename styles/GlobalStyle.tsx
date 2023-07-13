import styled, { createGlobalStyle } from "styled-components";

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

  body{
    overflow: hidden;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 65vh;
  background-color: white;
`;

export const Title = styled.h1`
  padding-top: 40px;
  margin-left: 100px;
  font-size: 40px;
`;

export default GlobalStyle;
