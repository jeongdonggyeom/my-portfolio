"use client"

import { styled } from "styled-components";
import Header from "../components/header/header";
import Project from "../components/project/project";
import Info from "../components/info/info";
import Contact from "../components/contact/contact";

export default function Main() {
  return(
    <Wrap>
      <Header />
      <ContentContainer>
        <Project />
        <Info />
        <Contact />
      </ContentContainer>
    </Wrap>
  )
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`

const ContentContainer = styled.section`
  width: 70%;
  height: 65vh;
  z-index: 5;
  overflow-y: scroll;
  position: relative;
  margin: 0 auto;
  &::-webkit-scrollbar{
    display: none;
  }
`