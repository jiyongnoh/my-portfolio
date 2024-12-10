"use client";
import styled from "styled-components";
import Image from "next/image";

const About = () => {
  return (
    <AboutContainer>
      <Title>
        <Image
          src={"/clip.svg"}
          alt={"clip"}
          width={40}
          height={40}
          style={{
            maxWidth: "100%",
            height: "auto",
            cursor: "pointer",
          }}
        />
        {`ABOUT ME`}
      </Title>
      <InfoContainer>
        <InfoCard>
          <Subtitle>{`이름`}</Subtitle>
          <Descripion>{`노지용`}</Descripion>
        </InfoCard>
        <InfoCard>
          <Subtitle>{`생년월일`}</Subtitle>
          <Descripion>{`1995.05.23`}</Descripion>
        </InfoCard>
        <InfoCard>
          <Subtitle>{`연락처`}</Subtitle>
          <Descripion>{`010-7473-8485`}</Descripion>
          <Descripion>{`earthworm77@naver.com`}</Descripion>
        </InfoCard>
      </InfoContainer>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  width: 100vw;
  background-color: white;
  padding: 4rem 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 3rem;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10rem;

  @media (max-width: 1080px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

const InfoCard = styled.div`
  width: 300px;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 1rem;

  @media (max-width: 1080px) {
    height: auto;
  }
`;

const Title = styled.span`
  padding: 0.5rem 0;

  font-size: 3rem;
  font-weight: bold;
  font-family: sans-serif;
  color: black;

  border-bottom: 1px solid gray;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.4rem;

  user-select: none;
`;

const Subtitle = styled.span`
  font-size: 2rem;
  font-weight: bold;
  font-family: sans-serif;
  color: black;

  border-bottom: 1px solid gray;

  user-select: none;
`;

const Descripion = styled.span`
  font-size: 1.3rem;
  font-weight: 400;
  font-family: sans-serif;
  color: black;
`;

export default About;
