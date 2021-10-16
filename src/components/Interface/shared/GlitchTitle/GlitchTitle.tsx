import React from 'react';
import styled from 'styled-components';
import Title from '../Title/Title';
import { glitch1Animation, glitch2Animation, glitch3Animation } from '../../../../styles/animations';

interface IGlitchTitleProps {
  title: string;
}

const GlitchTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: uppercase;
  position: relative;

  > * {
    ${glitch1Animation};

    :not(:first-child) {
      position: absolute;
    }

    :nth-child(2) {
      color: #67f3da;
      ${glitch2Animation};
    }

    :nth-child(3) {
      color: #f16f6f;
      ${glitch3Animation};
    }
  }
`;

export default function GlitchTitle({ title }: IGlitchTitleProps) {
  return (
    <GlitchTitleWrapper>
      <Title title={title} />
      <Title title={title} />
      <Title title={title} />
    </GlitchTitleWrapper>
  );
}
