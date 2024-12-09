"use client";
import styled from "styled-components";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Nav = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const [isDark, setIsDark] = useState(false);

  // 특정 위치에서 상태를 변경
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsDark(latest > 890); // 300px 이상 1000px 이하일 때 활성화
  });

  return (
    <MasterContainer>
      <NavContainer dark={isDark ? "true" : ""}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Title dark={isDark ? "true" : ""}>{`노지용's Portfolio`}</Title>
        </motion.div>
        <TagContainer dark={isDark ? "true" : ""}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Tag>About me</Tag>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Tag>Skill</Tag>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Tag>Archiving</Tag>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Tag>Project</Tag>
          </motion.div>
        </TagContainer>
      </NavContainer>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </MasterContainer>
  );
};

const MasterContainer = styled.div`
  position: fixed;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavContainer = styled.nav<{ dark?: string }>`
  width: 100vw;
  padding: 1.5rem;

  background-color: ${(props) =>
    props.dark ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.01)"};
  border-bottom: 1px solid gray;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  gap: 4rem;

  transition: 0.3s;
`;

const Title = styled.span<{ dark?: string }>`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: sans-serif;

  color: ${(props) => (props.dark ? "black" : "white")};

  cursor: pointer;

  user-select: none;

  &:hover {
    color: #007aff;
  }

  transition: 0.3s;
`;

const TagContainer = styled.div<{ dark?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  color: ${(props) => (props.dark ? "black" : "white")};

  transition: 0.3s;
`;

const Tag = styled.span`
  font-size: 1.1rem;
  font-family: sans-serif;
  font-weight: 600;

  cursor: pointer;

  user-select: none;

  &:hover {
    color: #007aff;
  }
`;

export default Nav;
