import React, {useLayoutEffect, useMemo, useState} from 'react';
import styled from "styled-components";
import Interface from "./components/Interface/Interface";
import Canvas from "./components/Canvas/Canvas";
import Controls from "./components/Controls/Controls";
import Loader from "./components/Loader/Loader";

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default function App() {
  const [isLoaded, setLoaded] = useState(false);

  useLayoutEffect(() => {
    setTimeout(() => setLoaded(true), 100000);
  }, [])

  return (
    <StyledApp>
      {isLoaded ? (
        <>
          <Canvas />
          <Interface />
          <Controls />
        </>
      ) : <Loader />}
    </StyledApp>
  );
}
