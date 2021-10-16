import React from 'react';
import styled from 'styled-components';
import { SubtitleFontCss } from '../../../../styles/styles';

interface ISubtitle {
  title: string;
}

const StyledSubtitle = styled.h2`
  ${SubtitleFontCss};
  margin-bottom: 20px;
`;

export default function Subtitle({ title }: ISubtitle) {
  return <StyledSubtitle>{title}</StyledSubtitle>;
}
