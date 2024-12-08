"use client";

import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 600;

  transition: 0.3s;

  &:hover {
    color: #007aff;
  }
`;

export default StyledLink;
