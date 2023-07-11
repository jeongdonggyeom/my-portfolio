"use client"

import { styled } from "styled-components";
import Header from "../components/header/header";

export default function Main() {
  return(
    <Wrap>
      <Header />
    </Wrap>
  )
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`