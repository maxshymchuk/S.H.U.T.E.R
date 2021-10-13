import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ITitle {
  children: ReactNode;
}

const StyledTitle = styled.h1`
  display: block;
  width: 100%;
  clear: both;
  letter-spacing: 10px;
  font-size: 30px;
  font-family: Consolas, serif;
  text-align: center;
`;

export default function Title({ children }: ITitle) {
  return <StyledTitle>{children}</StyledTitle>;
}
