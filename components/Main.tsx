"use client";

import styled from "styled-components";

const Main = styled.main`
  width: 100vw;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1080px) {
    overflow: hidden;
  }
`;

export default Main;
