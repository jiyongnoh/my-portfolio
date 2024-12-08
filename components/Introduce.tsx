"use client";
import styled from "styled-components";
import { motion } from "framer-motion";

const Introduce = () => {
  return (
    <IntroContainer>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Title>{`쌓아가는 개발자 노지용입니다`}</Title>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Title>
          {`협업과 커뮤니케이션을 중요하게 여기며, 상대방의 관점에서 문제를
          바라보고 해결하려 노력합니다`}
        </Title>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <Title>{`Front-End 포지션으로 입사한 후 Back-End 인프라까지 구축할 수 있는 개발자로 성장했습니다`}</Title>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <Title>
          {`새로운 기술을 배우고 적용하며 꾸준히 역량을 쌓아가고 있습니다`}
        </Title>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 4 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button>About Me</Button>
        </motion.div>
      </motion.div>
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: sans-serif;
  color: white;

  user-select: none;
`;

const Button = styled.button`
  background-color: #ffc107;

  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;

  font-size: 1rem;
  font-family: sans-serif;
  font-weight: bold;

  cursor: pointer;

  user-select: none;
  &:hover {
    background-color: #edb307;
  }
`;

export default Introduce;
