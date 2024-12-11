"use client";
import styled from "styled-components";
import { motion } from "framer-motion";

const mentList = [
  "쌓아가는 개발자 노지용입니다",
  "협업과 커뮤니케이션을 중요하게 여기며, 상대방의 관점에서 문제를 바라보고 해결하려 노력합니다",
  "효과적인 협업은 상대방의 생각을 충분히 이해하는 것에서 시작된다고 믿습니다",
  "Front-End로 입사하여 Back-End 인프라까지 구축할 수 있는 개발자로 성장했습니다",
  "새로운 기술을 배우고 적용하며 꾸준히 역량을 쌓아가고 있습니다",
];

const Introduce = () => {
  const scrollToPosition = (position: number) => {
    window.scrollTo({
      top: position, // 이동할 y 좌표
      behavior: "smooth", // 스크롤 애니메이션
    });
  };
  return (
    <IntroContainer>
      {mentList.map((ment, index) => {
        return (
          <motion.div
            key={ment}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index }}
          >
            <Title>{ment}</Title>
          </motion.div>
        );
      })}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 5 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button onClick={() => scrollToPosition(830)}>About Me</Button>
        </motion.div>
      </motion.div>
    </IntroContainer>
  );
};

const IntroContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  @media (max-width: 1080px) {
    padding: 2rem;
  }
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: sans-serif;
  color: white;

  user-select: none;

  @media (max-width: 1080px) {
    font-size: 1.25rem;
  }
`;

const Button = styled.button`
  margin-top: 1rem;
  background-color: black;

  color: white;
  padding: 10px 20px;
  border: 1px solid white;
  border-radius: 10px;

  font-size: 1rem;
  font-family: sans-serif;
  font-weight: bold;

  cursor: pointer;

  user-select: none;

  &:hover {
    background-color: white;
    color: black;

    border: none;
  }

  @media (max-width: 1080px) {
    display: none;
  }
`;

export default Introduce;
