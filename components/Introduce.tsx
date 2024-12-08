"use client";
import styled from "styled-components";
import { motion } from "framer-motion";

const Introduce = () => {
  return (
    <IntroContainer>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>쌓아가는 개발자 노지용입니다!</Title>
      </motion.div>
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: sans-serif;
`;

export default Introduce;
