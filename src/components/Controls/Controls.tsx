import React, {useLayoutEffect} from 'react';
import styled from "styled-components";
import {FullscreenAbsolute} from "../../styles";

const StyledControls = styled(FullscreenAbsolute)`
  pointer-events: none;
`;

export default function Controls() {

  useLayoutEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown);
    return () => document.body.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
  }

  return <StyledControls />;
}
