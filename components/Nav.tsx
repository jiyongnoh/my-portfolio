"use client";
import styled from "styled-components";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Nav = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const [isDark, setIsDark] = useState(false);

  // 특정 위치에서 상태를 변경
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsDark(latest > 830); // 300px 이상 1000px 이하일 때 활성화
  });

  const scrollToPosition = (position: number) => {
    window.scrollTo({
      top: position, // 이동할 y 좌표
      behavior: "smooth", // 스크롤 애니메이션
    });
  };

  return (
    <MasterContainer>
      <NavContainer dark={isDark ? "true" : ""}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Title
            onClick={() => scrollToPosition(0)}
            dark={isDark ? "true" : ""}
          >{`노지용's Portfolio`}</Title>
        </motion.div>
        <TagContainer dark={isDark ? "true" : ""}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Tag onClick={() => scrollToPosition(830)}>About me</Tag>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Tag onClick={() => scrollToPosition(1280)}>Skill</Tag>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Tag onClick={() => scrollToPosition(2627)}>Archiving</Tag>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Tag onClick={() => scrollToPosition(4000)}>Project</Tag>
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

  box-shadow: 0 1px 0.3rem hsl(0deg 0% 80% / 80%);
`;

const NavContainer = styled.nav<{ dark?: string }>`
  width: 100vw;
  padding: 1.5rem;

  background-color: ${(props) =>
    props.dark ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.01)"};

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
