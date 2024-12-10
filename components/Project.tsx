"use client";
import styled from "styled-components";
import Image from "next/image";

import { motion } from "framer-motion";
import { useState } from "react";

import KikleCarousel from "./KikleCarousel";

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <ProjectContainer>
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
            opacity: "0.5",
          }}
        />
        {`PROJECT`}
      </Title>
      <InfoContainer>
        <motion.div
          layout
          style={{
            width: "66%",
            height: "700px",
            perspective: "2000px", // 3D 효과를 위해 perspective 설정
            // overflow: "hidden",
          }}
        >
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              transformStyle: "preserve-3d", // 자식 요소의 3D 변환 허용
            }}
            animate={{
              rotateY: isOpen ? 180 : 0, // isOpen에 따라 카드 회전
            }}
            transition={{
              duration: 0.6, // 애니메이션 지속 시간
              ease: "easeInOut", // 애니메이션 가속 곡선
            }}
          >
            {/* 앞면 */}
            <motion.div
              onClick={(e) => {
                if (e.currentTarget === e.target) setIsOpen(!isOpen);
              }}
              style={{
                backfaceVisibility: "hidden", // 뒷면 숨기기
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "white",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
                gap: "0.5rem",
              }}
            >
              <ProjectTitle>키클 에듀</ProjectTitle>
              <ProjectSubTitle>2024.7 - 2024.10</ProjectSubTitle>
              <RowContainer>
                <KikleCarousel />
                <ColumnContainer>
                  <DescriptionContainer>
                    <Descripion>
                      키클 에듀는 회사 소속 강사 통합 관리 앱입니다
                    </Descripion>
                    <Descripion>
                      강사들에게 음원, 영상과 같은 강의에 필요한 자료를
                      제공하고, 강의를 희망하는 기관을 대상으로 회사를 소개하기
                      위한 목적으로 제작되었습니다
                    </Descripion>
                    <Descripion>
                      기획(1인) + 디자인(1인) + 개발(1인) 총 3인에서
                      진행했습니다
                    </Descripion>
                    <Descripion>
                      요구사항 분석부터 설계, 개발, 유지보수까지 모든 과정을
                      주도했던 만큼 책임감을 가지고 참여했습니다
                    </Descripion>
                  </DescriptionContainer>
                  <FooterContainer>
                    <FooterRowContainer>
                      <span>Function</span>
                      <span>강사 통합 관리</span>
                    </FooterRowContainer>
                    <FooterRowContainer>
                      <span>Deploy</span>
                      <div>
                        <UrlA href="https://www.kikle.kr/" target="_blank">
                          {" "}
                          Web{" "}
                        </UrlA>
                        /
                        <UrlA
                          href="https://play.google.com/store/apps/details?id=kr.kikle.www.twa&hl=ko"
                          target="_blank"
                        >
                          {" "}
                          Android{" "}
                        </UrlA>{" "}
                        /
                        <UrlA
                          href="https://apps.apple.com/kr/app/%ED%82%A4%ED%81%B4%EC%97%90%EB%93%80/id6737214325"
                          target="_blank"
                        >
                          {" "}
                          IOS
                        </UrlA>
                      </div>
                    </FooterRowContainer>
                    <FooterSkillContainer>
                      <span>Skills</span>
                      <SkillContainer>
                        <SkillTag>Next 13</SkillTag>
                        <SkillTag>Recoil</SkillTag>
                        <SkillTag>Styled-Component</SkillTag>
                        <SkillTag>Express</SkillTag>
                        <SkillTag>MySQL</SkillTag>
                      </SkillContainer>
                    </FooterSkillContainer>
                  </FooterContainer>
                </ColumnContainer>
              </RowContainer>
            </motion.div>

            {/* 뒷면 */}
            <motion.div
              onClick={(e) => {
                if (e.currentTarget === e.target) setIsOpen(!isOpen);
              }}
              style={{
                backfaceVisibility: "hidden",
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                color: "#333",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: "rotateY(180deg)", // 뒷면은 180도 회전
                borderRadius: "20px",
              }}
            >
              <Descripion>노지용</Descripion>
            </motion.div>
          </motion.div>
        </motion.div>
      </InfoContainer>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  width: 100vw;
  background-color: #4244ff;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 5rem;
`;

const Title = styled.span`
  padding: 0.5rem 0;

  font-size: 3rem;
  font-weight: bold;
  font-family: sans-serif;
  color: white;

  border-bottom: 1px solid gray;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.4rem;

  user-select: none;
`;

const Descripion = styled.span`
  font-size: 15px;
  font-weight: bold;
  font-family: sans-serif;
  color: black;
`;

const ProjectTitle = styled.span`
  font-size: 2rem;
  font-weight: bold;
  font-family: sans-serif;
  color: black;

  user-select: none;
`;

const ProjectSubTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
  font-family: sans-serif;
  color: gray;

  user-select: none;
`;

const RowContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  gap: 0rem;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 1.5rem;
`;

const ColumnContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  gap: 1.5rem;
`;

const FooterContainer = styled.div`
  width: 100%;
  padding: 1rem 0;

  border-top: 1px solid gray;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 1rem;
`;

const FooterRowContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const FooterSkillContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const UrlA = styled.a`
  margin-top: 1.5rem;

  font-size: 1rem;
  font-weight: bold;
  font-family: sans-serif;
  color: #7cb8e6;
`;

const SkillContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 0.2rem;
`;

const SkillTag = styled.div`
  font-size: 14px;
  font-weight: bold;
  font-family: sans-serif;

  color: black;
  border: 1px solid black;

  padding: 0.2rem;
  border-radius: 20px;
`;

export default Project;
