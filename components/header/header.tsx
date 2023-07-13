"use client";

import { useLottie } from "lottie-react";
import { GitHubIcon, LogoLottie, RainbowIcon } from "../../public";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [clickBack, setClickBack] = useState(false);

  const lottieStyle = {
    width: 140,
    height: 140,
  };

  const lottieOption = {
    animationData: LogoLottie,
    loop: true,
    autoplay: false,
    style: lottieStyle,
  };

  const { View, stop, play } = useLottie(lottieOption);

  return (
    <HeaderWrap>
      <ImageContainer>
        {clickBack ? (
          <Image src={"/icon/rainbowPattern.webp"} alt="background-image" fill />
        ) : (
          <Image src={"/video/bg_1.webp"} alt="background-video" fill />
        )}
      </ImageContainer>
      <LottieContainer
        onClick={() => setClickBack((prev: boolean) => !prev)}
        onMouseEnter={() => play()}
        onMouseLeave={() => stop()}
      >
        {View}
      </LottieContainer>
      <HeaderWhiteContainer>
        <LinkContainer>
          <LinkStyle href="/">Project</LinkStyle>
          <LinkStyle href="/">Info</LinkStyle>
          <LinkStyle href="/">Contact</LinkStyle>
        </LinkContainer>
        <SvgWrap href="https://github.com/jeongdonggyeom">
          <GitHubIcon />
        </SvgWrap>
      </HeaderWhiteContainer>
      <BackgroundRainbow>
        <RainbowIcon />
      </BackgroundRainbow>
    </HeaderWrap>
  );
}

const LottieContainer = styled.div`
  width: 145px;
  height: 145px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const HeaderWrap = styled.header`
  width: 100%;
  height: 360px;
  position: relative;
`;

const HeaderWhiteContainer = styled.div`
  background-color: white;
  width: 70%;
  position: absolute;
  height: 50%;
  z-index: 5;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;

const LinkContainer = styled.div`
  position: absolute;
  bottom: 10px;
`;

const LinkStyle = styled(Link)`
  font-size: 25px;
  font-weight: bold;
  margin-left: 20px;
`;

const SvgWrap = styled(Link)`
  z-index: 6;
  width: 35px;
  height: 35px;
  position: absolute;
  bottom: 10px;
  right: 20px;
`;

const BackgroundRainbow = styled.div`
  position: absolute;
  bottom: -22px;
  width: 100%;
  z-index: 2;
`;

const ImageContainer = styled.div`
  z-index: 3;
  width: 100%;
  height: 100%;
  position: relative;
`;
