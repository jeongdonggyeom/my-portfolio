"use client";

import { styled } from "styled-components";
import { Container, Title } from "../../styles/GlobalStyle";
import ProjectItem from "./projectItem";

export default function Project() {
  return (
    <Container>
      <Title>Project</Title>
      <ItemContainer>
        <ProjectItem alt="tcp" color="#99CCFF" img="/icon/tcp.webp" name="Team Cooperation Platform" />
        <ProjectItem alt="BSM-Deploy" color="#E2A1BC" img="/icon/bsm-deploy.webp" name="BSM-Deploy" />
        <ProjectItem alt="BSM-Doorlock" color="#FCF5A5" img="/icon/bsm-doorlock.webp" name="BSM-Doorlock" />
        <ProjectItem alt="강서드래곤" color="#99CCFF" img="/icon/gangseodragon.webp" name="강서드래곤" />
        <ProjectItem alt="D-blog" color="#E2A1BC" img="/icon/d-blog.webp" name="D-blog" />
        <ProjectItem alt="toj" color="#FCF5A5" img="/icon/toj.webp" name="Teacher Online Judge" />
      </ItemContainer>
    </Container>
  );
}

const ItemContainer = styled.div`
  padding-left: 100px;
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(3, auto);
  gap: 2rem;
`