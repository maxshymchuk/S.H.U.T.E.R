import React from 'react';
import { ErrorStyle } from '../../../../styles/styles';
import { Global } from '../../../../styles/global';
import styled from 'styled-components';

interface IErrorScreenProps {
  title?: string;
  message: string;
}

const ErrorWrapper = styled(ErrorStyle)``;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const Message = styled.div`
  text-transform: lowercase;
  padding: 20px 0;
`;

export default function ErrorScreen({ title = 'Something went wrong', message }: IErrorScreenProps) {
  return (
    <ErrorWrapper>
      <Global />
      <Title>{title}</Title>
      <Message>{message}</Message>
    </ErrorWrapper>
  );
}
