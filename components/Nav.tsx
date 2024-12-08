"use client";
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <NavContainer>
      <Title>{`노지용's Portfolio`}</Title>
      <TagContainer>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Tag>Introduce</Tag>
        </motion.div>
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
  );
};

const NavContainer = styled.nav`
  position: fixed;

  width: 100vw;
  padding: 1rem;

  border-bottom: 1px solid gray;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  gap: 4rem;
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: sans-serif;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Tag = styled.span`
  font-size: 1.1rem;
  font-family: sans-serif;

  font-weight: 600;

  transition: 0.3s;
  cursor: pointer;

  user-select: none;

  &:hover {
    color: #007aff;
  }
`;

export default Nav;
