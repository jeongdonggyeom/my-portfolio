"use client"

import { useLottie } from "lottie-react";
import { LogoLottie } from "../public";
import { styled } from "styled-components";

export default function Main() {

  const lottieStyle = {
    width: 100,
    height: 100,
  }

  const lottieOption = {
    animationData: LogoLottie,
    loop: true,
    style: lottieStyle
  };


  const { View, stop, play } = useLottie(lottieOption);

  return(
    <Wrap>
      <LottieContainer onMouseEnter={() => play()} onMouseLeave={() => stop()}>
        {View}
      </LottieContainer>
    </Wrap>
  )
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`

const LottieContainer = styled.div`
  width: 100px;
  height: 100px;
`