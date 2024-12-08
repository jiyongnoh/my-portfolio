"use client";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavContainer>
      <Title>{`노지용's Portfolio`}</Title>
      <TagContainer>
        <Tag>Introduce</Tag>
        <Tag>About me</Tag>
        <Tag>Skill</Tag>
        <Tag>Archiving</Tag>
        <Tag>Project</Tag>
      </TagContainer>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;

  width: 100vw;
  padding: 1rem;

  border: 1px solid gray;

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
  font-size: 1rem;
  font-family: sans-serif;

  color: black;
  font-weight: 600;

  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: #007aff;
  }
`;

export default Nav;
