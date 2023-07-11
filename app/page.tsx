"use client"

import { styled } from "styled-components";
import Header from "../components/header/header";
import Project from "../components/project/project";

export default function Main() {
  return(
    <Wrap>
      <Header />
      <ContentContainer>
        <Project />
      </ContentContainer>
    </Wrap>
  )
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ContentContainer = styled.section`
  width: 70%;
  height: 100%;
  z-index: 5;
  overflow-y: scroll;
  position: relative;
  &::-webkit-scrollbar{
    display: none;
  }
`