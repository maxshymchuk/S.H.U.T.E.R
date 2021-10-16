import React, { ReactNode, useLayoutEffect, useMemo, useState } from 'react';
import { IVector } from '../../../engine/interfaces/features';
import styled from 'styled-components';
import throttle from 'lodash.throttle';

const INTERVAL = 0.4;

interface IPerspectiveDistortionProps {
  children: ReactNode;
}

export const PerspectiveWrapper = styled.div`
  width: 100%;
  height: 100%;
  perspective: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 30vh 100px 100px 100px;
  box-sizing: border-box;
  transition: 0.1s transform;
`;

export default function PerspectiveDistortion({ children }: IPerspectiveDistortionProps) {
  const [perspective, setPerspective] = useState<IVector>({ x: 0, y: 0 });

  useLayoutEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const throttled = throttle((e: React.MouseEvent) => {
    const bounds = document.body.getBoundingClientRect();
    const ratio: IVector = {
      x: INTERVAL / bounds.width,
      y: INTERVAL / bounds.height,
    };
    const y = +((e.clientX - bounds.width / 2) * ratio.x).toFixed(2);
    const x = -((e.clientY - bounds.height / 2) * ratio.y).toFixed(2);
    setPerspective({ x, y });
  }, 50);

  const handleMouseMove = (e: MouseEvent) => {
    throttled(e);
  };

  const style = useMemo(() => ({
    transform: `rotateX(${perspective.x}deg) rotateY(${perspective.y}deg)`,
  }), [perspective]);

  return (
    <PerspectiveWrapper>
      <Wrapper style={style}>
        {children}
      </Wrapper>
    </PerspectiveWrapper>
  );
}