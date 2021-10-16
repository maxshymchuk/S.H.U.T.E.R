import React, { useMemo } from 'react';
import styled from 'styled-components';
import { TitleFontCss } from '../../../styles/styles';
import { stylizeText } from '../../../utils';

interface ITitleProps {
  title: string;
}

const StyledTitle = styled.h1`
  ${TitleFontCss};
  margin-bottom: 40px;
`;

export default function Title({ title }: ITitleProps) {
  const transformedTitle = useMemo(() => stylizeText(title), [title]);

  return <StyledTitle>{transformedTitle}</StyledTitle>;
}
