"use client";
import styled from "styled-components";
import { motion } from "framer-motion";

const Archiving = () => {
  return (
    <ArchivingContainer>
      <Title>{`ARCHIVING`}</Title>
    </ArchivingContainer>
  );
};

const ArchivingContainer = styled.div`
  width: 100vw;
  background-color: #212529;
  padding: 4rem 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 3rem;
`;

const Title = styled.span`
  padding-bottom: 0.5rem;

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

export default Archiving;
