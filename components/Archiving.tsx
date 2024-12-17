"use client";
import { motion } from "motion/react";
import styled from "styled-components";
import Image from "next/image";

const Archiving = () => {
  return (
    <ArchivingContainer>
      <Title>
        <Image
          src={"/clip.svg"}
          alt={"clip"}
          width={40}
          height={40}
          style={{ maxWidth: "100%", height: "auto", cursor: "pointer" }}
        />
        {`ARCHIVING`}
      </Title>
      <RowContainer>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/jiyongnoh"
            target="_blank" // 새 탭에서 열기
            rel="noopener noreferrer" // 보안 속성
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <CardContainer>
                <Image
                  src={"/Archiving/github.png"}
                  alt={"test"}
                  width={420}
                  height={120}
                  style={{ maxWidth: "40%", height: "auto" }}
                />
                <UrlSpan>{`https://github.com/jiyongnoh`}</UrlSpan>
                <Subtitle>{`소스 코드 저장소입니다`}</Subtitle>
                <Description>{`(*클릭 시 새탭으로 이동합니다)`}</Description>
              </CardContainer>
            </motion.div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://velog.io/@njy95000/posts"
            target="_blank" // 새 탭에서 열기
            rel="noopener noreferrer" // 보안 속성
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <CardContainer>
                <Image
                  src={"/Archiving/velog.svg"}
                  alt={"test"}
                  width={689}
                  height={362}
                  style={{ maxWidth: "30%", height: "auto" }}
                />
                <UrlSpan>{`https://velog.io/@njy95000/posts`}</UrlSpan>
                <Subtitle>{`개발 블로그입니다`}</Subtitle>
                <Description>{`(*클릭 시 새탭으로 이동합니다)`}</Description>
              </CardContainer>
            </motion.div>
          </a>
        </motion.div>
      </RowContainer>
    </ArchivingContainer>
  );
};

const ArchivingContainer = styled.div`
  width: 100vw;
  min-height: 50vh;
  background-color: #212529;
  padding: 4rem 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 3rem;
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  gap: 4rem;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const CardContainer = styled.div`
  width: 365px;
  height: 300px;

  background-color: white;
  padding: 3rem;

  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 1rem;

  @media (max-width: 1080px) {
    width: 335px;
    height: auto;

    justify-content: center;
    align-items: center;
  }
`;

// const PptContainer = styled.div`
//   width: 100%;

//   background-color: white;
//   padding: 3rem;

//   border-radius: 20px;

//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: flex-start;

//   gap: 2rem;
// `;

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

const Subtitle = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  font-family: sans-serif;
  color: black;

  user-select: none;
`;

const Description = styled.span`
  font-size: 1rem;
  font-weight: 400;
  font-family: sans-serif;
  color: black;

  user-select: none;
`;

const UrlSpan = styled.span`
  margin-top: 1.5rem;

  font-size: 1rem;
  font-weight: bold;
  font-family: sans-serif;
  color: #7cb8e6;
`;

export default Archiving;
