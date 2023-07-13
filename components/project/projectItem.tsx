import { styled } from "styled-components";
import Image from "next/image";
import { useState } from "react";

interface ProjectItemPropsType {
  img: string;
  alt: string;
  name: string;
  color: string;
}

export default function ProjectItem({
  img,
  alt,
  name,
  color,
}: ProjectItemPropsType) {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [animation, setAnimation] = useState(false);

  const projectName: string[] = name.split(" ");

  return (
    <ItemContainer
      onMouseLeave={() => {
        setAnimation(false);
        setTimeout(() => setMouseEnter(false), 300);
      }}
    >
      <Image
        src={img}
        alt={alt}
        fill
        placeholder="blur"
        blurDataURL={img}
        onMouseEnter={() => {
          setMouseEnter(true);
          setTimeout(() => setAnimation(true), 100);
        }}
      />
      {mouseEnter && (
        <TitleBackground animation={animation} color={color}>
          {projectName.map((value, key) => {
            return <Title key={key}>{value}</Title>;
          })}
        </TitleBackground>
      )}
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  overflow: hidden;
  width: 300px;
  height: 220px;
  position: relative;
  border-radius: 20px;
  margin-top: 30px;
  img {
    border-radius: 20px;
  }
`;

const TitleBackground = styled.div<{ animation: boolean; color: string }>`
  display: flex;
  transition-duration: 300ms;
  transform: ${(props) =>
    props.animation ? "translateX(0px)" : "translateX(300px)"};
  opacity: 0.6;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  z-index: 3;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;
`;

const Title = styled.p`
  color: black;
  font-weight: bold;
  font-size: 40px;
`;
