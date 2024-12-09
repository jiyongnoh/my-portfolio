"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <SkillContainer>
      <Title>{`PROJECT`}</Title>
      <InfoContainer>
        <motion.div
          layout
          style={{
            width: "300px",
            height: "200px",
            perspective: "1000px", // 3D 효과를 위해 perspective 설정
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              transformStyle: "preserve-3d", // 자식 요소의 3D 변환 허용
              cursor: "pointer",
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
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <Subtitle>이름</Subtitle>
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
                alignItems: "center",
                justifyContent: "center",
                transform: "rotateY(180deg)", // 뒷면은 180도 회전
                borderRadius: "10px",
              }}
            >
              <Descripion>노지용</Descripion>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          layout
          style={{
            width: "300px",
            height: "200px",
            perspective: "1000px", // 3D 효과를 위해 perspective 설정
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            onClick={() => setIsOpen2(!isOpen2)}
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              transformStyle: "preserve-3d", // 자식 요소의 3D 변환 허용
              cursor: "pointer",
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
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <Subtitle>생년월일</Subtitle>
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
                alignItems: "center",
                justifyContent: "center",
                transform: "rotateY(180deg)", // 뒷면은 180도 회전
                borderRadius: "10px",
              }}
            >
              <Descripion>1995.05.23</Descripion>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          layout
          style={{
            width: "300px",
            height: "200px",
            perspective: "1000px", // 3D 효과를 위해 perspective 설정
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            onClick={() => setIsOpen3(!isOpen3)}
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              transformStyle: "preserve-3d", // 자식 요소의 3D 변환 허용
              cursor: "pointer",
            }}
            animate={{
              rotateY: isOpen3 ? 180 : 0, // isOpen에 따라 카드 회전
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
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <Subtitle>연락처</Subtitle>
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
                alignItems: "center",
                justifyContent: "center",
                transform: "rotateY(180deg)", // 뒷면은 180도 회전
                borderRadius: "10px",
              }}
            >
              <Descripion>010-7473-8485</Descripion>
              <Descripion>earthworm77@naver.com</Descripion>
            </motion.div>
          </motion.div>
        </motion.div>
      </InfoContainer>
    </SkillContainer>
  );
};

const SkillContainer = styled.div`
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
  justify-content: center;
  align-items: center;

  gap: 10rem;
`;

const Title = styled.span`
  font-size: 3rem;
  font-weight: bold;
  font-family: sans-serif;
  color: white;

  border-bottom: 1px solid gray;

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
  font-weight: bold;
  font-family: sans-serif;
  color: black;

  user-select: none;
`;

export default Project;
