"use client";

import { ReactNode } from "react";
import GlobalStyle from "../styles/GlobalStyle";
import { styled } from "styled-components";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalStyle />
      <MainContainer>{children}</MainContainer>
    </>
  );
}

const MainContainer = styled.main`
  background-color: black;
  width: 100%;
  height: 100%;
`;
