import React from 'react';
import styled from 'styled-components';
import Title from '../Title/Title';

interface IGlitchProps {
  title: string;
}

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: uppercase;
  position: relative;
  
  > * {
    animation: glitch1 2.5s infinite;
    :not(:first-child) {
      position: absolute;
    }
    :nth-child(2) {
      color: #67f3da;
      animation: glitch2 2.5s infinite;
    }
    :nth-child(3) {
      color: #f16f6f;
      animation: glitch3 2.5s infinite;
    }
  }
`;

export default function Glitch({ title }: IGlitchProps) {
  return (
    <Logo>
      <Title title={title} />
      <Title title={title} />
      <Title title={title} />
    </Logo>
  );
}
