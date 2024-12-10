"use client";
import styled from "styled-components";
import Image from "next/image";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Carousel from "./Carousel";

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  // Resize 상태 처리
  const [mobileFlag, setMobileFlag] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // 모바일 반응형 처리
      if (window.innerWidth <= 728) {
        setMobileFlag(true);
      } else {
        setMobileFlag(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

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
        {/* 키클 에듀 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            width: mobileFlag ? "90%" : "66%",
            height: mobileFlag ? "900px" : "700px",
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
              style={{
                backfaceVisibility: "hidden", // 뒷면 숨기기
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                borderRadius: "20px",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <TmiButton
                  onClick={(e) => {
                    if (e.currentTarget === e.target) setIsOpen(!isOpen);
                  }}
                >
                  {`TMI`}
                </TmiButton>
              </motion.div>
              <ProjectTitle>키클 에듀</ProjectTitle>
              <ProjectSubTitle>2024.7 - 2024.10</ProjectSubTitle>
              <RowContainer>
                {!isOpen && <Carousel type="kikle" />}
                <ColumnContainer>
                  <DescriptionContainer>
                    <Descripion>
                      {`키클 에듀는 회사 소속 강사 통합 관리 앱입니다
                      기획(1인) + 디자인(1인) + 개발(1인) 총 3인에서 진행했습니다`}
                    </Descripion>
                    <Descripion>
                      {`강사들에게 음원, 영상과 같은 강의에 필요한 자료를 제공하고 강의를 희망하는 기관을 대상으로 회사를 소개하기 위한 목적으로 제작되었습니다`}
                    </Descripion>
                    <Descripion>
                      {`요구사항 분석부터 설계, 개발, 유지보수까지 모든 과정을 주도했던 만큼 책임감을 가지고 참여했습니다`}
                    </Descripion>
                  </DescriptionContainer>
                  <FooterContainer>
                    <FooterRowContainer>
                      <FooterTagTitle>Function</FooterTagTitle>
                      <Descripion>강사 통합 관리</Descripion>
                    </FooterRowContainer>
                    <FooterRowContainer>
                      <FooterTagTitle>Deploy</FooterTagTitle>
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
                    <FooterRowContainer>
                      <FooterTagTitle>Skills</FooterTagTitle>
                      <SkillContainer>
                        <SkillTag>NextJS</SkillTag>
                        <SkillTag>ExpressJS</SkillTag>
                        <SkillTag>MySQL</SkillTag>
                      </SkillContainer>
                    </FooterRowContainer>
                  </FooterContainer>
                </ColumnContainer>
              </RowContainer>
            </motion.div>

            {/* 뒷면 */}
            <motion.div
              style={{
                backfaceVisibility: "hidden",
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                color: "#333",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transform: "rotateY(180deg)", // 뒷면은 180도 회전
                borderRadius: "20px",
              }}
            >
              <BackButton
                onClick={(e) => {
                  if (e.currentTarget === e.target) setIsOpen(!isOpen);
                }}
              >
                {`Back`}
              </BackButton>
              <ProjectTitle>TMI</ProjectTitle>
              <RowContainer>
                <TmiColumnContainer>
                  <DescriptionContainer>
                    <Descripion>{`Front-End: Next 13 Page Router 사용 + Vercel 배포`}</Descripion>
                    <TmiUrlA
                      href="https://velog.io/@njy95000/202441-%EC%98%A4%EB%8A%98-%ED%95%9C-%EC%9D%BC-AWS-EC2-%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-Docker-Jenkins-CICD-%EA%B5%AC%EC%B6%95"
                      target="blank"
                    >{`Back-End(Develop Server): Github + Docker + Jenkins + EC2 배포 자동화 구현`}</TmiUrlA>
                    <TmiUrlA
                      href="https://velog.io/@njy95000/2024521-%EC%98%A4%EB%8A%98-%ED%95%9C-%EC%9D%BC-AWS-EKS-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95"
                      target="blank"
                    >{`Back-End(Release Server): AWS EKS를 사용한 Kubernetes 환경 구축`}</TmiUrlA>
                    <TmiUrlA
                      href="https://velog.io/@njy95000/PWA-Progressive-Web-App"
                      target="blank"
                    >{`모바일 접근성 향상 및 배포를 위해 PWA로 구현`}</TmiUrlA>
                    <TmiUrlA
                      href="https://velog.io/@njy95000/2024115-%EC%98%A4%EB%8A%98-%ED%95%9C-%EC%9D%BC-Token-%EC%9D%B8%EC%A6%9D-%EB%B0%A9%EC%8B%9D-%EB%B3%80%EA%B2%BD-Cookie-Header"
                      target="blank"
                    >{`회원 유형별 권한 제어를 위해 JWT를 발급하고 API에 인가 미들웨어를 적용`}</TmiUrlA>
                    <TmiUrlA
                      href="https://velog.io/@njy95000/SSR-ISR-NextJs"
                      target="blank"
                    >{`메인 페이지 LCP [ 3.7s → 0.8s ] 개선 ( SSR → ISR 방식으로 변경 )`}</TmiUrlA>
                    <Descripion>{`관리자 페이지를 통한 회원 관리 용이성 증진`}</Descripion>
                    <Descripion>{`요금 최소화를 위해 Cloud Storage 변경 (AWS S3 → Google Drive API)`}</Descripion>
                    <Descripion>{`검수 시트를 활용하여 오류 수정, 개선, 고도화 작업 지속 중`}</Descripion>
                  </DescriptionContainer>
                  <FooterSubTitle>{`*해당 색상은 클릭 시 블로그 포스팅으로 이동합니다`}</FooterSubTitle>
                </TmiColumnContainer>
              </RowContainer>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 소예 아이 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            width: mobileFlag ? "90%" : "66%",
            height: mobileFlag ? "900px" : "700px",
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
              rotateY: isOpen2 ? 180 : 0, // isOpen에 따라 카드 회전
            }}
            transition={{
              duration: 0.6, // 애니메이션 지속 시간
              ease: "easeInOut", // 애니메이션 가속 곡선
            }}
          >
            {/* 앞면 */}
            <motion.div
              style={{
                backfaceVisibility: "hidden", // 뒷면 숨기기
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                borderRadius: "20px",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <TmiButton
                  onClick={(e) => {
                    if (e.currentTarget === e.target) setIsOpen2(!isOpen2);
                  }}
                >
                  {`TMI`}
                </TmiButton>
              </motion.div>
              <ProjectTitle>소예 아이</ProjectTitle>
              <ProjectSubTitle>2024.4 - 2024.11</ProjectSubTitle>
              <RowContainer>
                {!isOpen2 && <Carousel type="soyesAI" />}
                <ColumnContainer>
                  <DescriptionContainer>
                    <Descripion>
                      {`소예 아이는 심리 검사 및 상담 결과에 따라 맞춤형 컨텐츠를 제공하는 아동 청소년 멘탈케어 솔루션 서비스입니다`}
                    </Descripion>
                    <Descripion>
                      {`기획(1인) + 디자인(1인) + FE(1인) + BE(1인) 총 4인에서 진행했고 BE 개발자로 참여했습니다`}
                    </Descripion>
                    <Descripion>{`Unity 개발자와 협업하며 개발했고 브라우저가 아닌 환경에서 데이터를 주고받는 경험을 할 수 있었습니다`}</Descripion>
                    <Descripion>{`OpenAI API 기반의 상담 프로그램을 만들면서 Prompt Engineering을 접했고, LLM 모델에게 명령하는 방식을 보다 더 깊이 탐구할 수 있었습니다`}</Descripion>
                  </DescriptionContainer>
                  <FooterContainer>
                    <FooterRowContainer>
                      <FooterTagTitle>Function</FooterTagTitle>
                      <Descripion>심리 상담 프로그램</Descripion>
                    </FooterRowContainer>
                    <FooterRowContainer>
                      <FooterTagTitle>Deploy</FooterTagTitle>
                      <div>
                        <UrlA
                          href="https://play.google.com/store/apps/details?id=com.SoyesKids.Soyes_AI"
                          target="_blank"
                        >
                          {" "}
                          Android{" "}
                        </UrlA>{" "}
                        /
                        <UrlA
                          href="https://apps.apple.com/kr/app/%EC%86%8C%EC%98%88%EC%95%84%EC%9D%B4/id6651827661"
                          target="_blank"
                        >
                          {" "}
                          IOS
                        </UrlA>
                      </div>
                    </FooterRowContainer>
                    <FooterRowContainer>
                      <FooterTagTitle>Skills</FooterTagTitle>
                      <SkillContainer>
                        <SkillTag>Unity</SkillTag>
                        <SkillTag>ExpressJS</SkillTag>
                        <SkillTag>MySQL</SkillTag>
                      </SkillContainer>
                    </FooterRowContainer>
                  </FooterContainer>
                </ColumnContainer>
              </RowContainer>
            </motion.div>

            {/* 뒷면 */}
            <motion.div
              style={{
                backfaceVisibility: "hidden",
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                color: "#333",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transform: "rotateY(180deg)", // 뒷면은 180도 회전
                borderRadius: "20px",
              }}
            >
              <BackButton
                onClick={(e) => {
                  if (e.currentTarget === e.target) setIsOpen2(!isOpen2);
                }}
              >
                {`Back`}
              </BackButton>
              <ProjectTitle>TMI</ProjectTitle>
              <RowContainer>
                <TmiColumnContainer>
                  <DescriptionContainer>
                    <Descripion>{`AI 페르소나 적용을 위해 프롬프트 엔지니어링 기반의 명령 프롬프트 구현 및 적용`}</Descripion>
                    <Descripion>{`기존 심리 검사 관련 테이블 11개의 조회 쿼리를 개선하기 위해 하나의 테이블로 통합`}</Descripion>
                    <Descripion>{`Table 조회를 줄이기 위해 세션을 활용한 캐싱 적용`}</Descripion>
                    <Descripion>{`쿠폰 관리 효율성 향상을 위해 "계정당 1회 사용 가능한 쿠폰" 타입 추가`}</Descripion>
                    <Descripion>{`유저 심리 분석 보고서 파일을 만들어 이메일로 전송하는 기능 구현
                    (pupeteer를 사용하여 ejs → pdf 변환. 이후 nodemailer를 통해 변환된 파일을 유저 이메일로 전송)`}</Descripion>
                    <Descripion>{`원활한 협업 위한 API 문서(GitBook) 작성 및 지속 관리`}</Descripion>
                  </DescriptionContainer>
                </TmiColumnContainer>
              </RowContainer>
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

  white-space: pre-line;

  user-select: none;
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

  @media (max-width: 1080px) {
    margin-top: 0rem;

    flex-direction: column;
    align-items: center;
    gap: 0rem;
  }
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

  @media (max-width: 1080px) {
    width: 90%;
    justify-content: center;
    align-items: center;
  }
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

const FooterTagTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
  font-family: sans-serif;
  color: #464646;

  user-select: none;
`;

const FooterSubTitle = styled.span`
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  font-family: sans-serif;
  color: #3870ff;

  user-select: none;
`;

const UrlA = styled.a`
  font-size: 1rem;
  font-weight: bold;
  font-family: sans-serif;
  color: #6f7478;

  user-select: none;
`;

const TmiUrlA = styled.a`
  font-size: 1rem;
  font-weight: bold;
  font-family: sans-serif;
  color: #3870ff;

  user-select: none;
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

  user-select: none;
`;

const TmiButton = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;

  font-size: 14px;
  font-weight: bold;
  font-family: sans-serif;

  border: 1px solid gray;

  padding: 0.5rem;
  border-radius: 15px;
  box-shadow: 0 1px 0.3rem hsl(0deg 0% 80% / 80%);

  user-select: none;

  transition: 0.2s;

  &:hover {
    scale: 1.1;
  }

  &:active {
    scale: 0.95;
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: 5%;
  left: 5%;

  font-size: 14px;
  font-weight: bold;
  font-family: sans-serif;

  border: 1px solid gray;

  padding: 0.5rem;
  border-radius: 15px;
  box-shadow: 0 1px 0.3rem hsl(0deg 0% 80% / 80%);

  user-select: none;

  transition: 0.2s;

  &:hover {
    scale: 1.1;
  }

  &:active {
    scale: 0.95;
  }
`;

const TmiColumnContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 1rem;

  @media (max-width: 1080px) {
    padding: 1.5rem;
  }
`;

export default Project;
