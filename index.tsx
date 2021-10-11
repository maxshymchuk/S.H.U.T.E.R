import React from 'react';
import ReactDOM from 'react-dom';
import App from "./src/App";
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
`

ReactDOM.render(
  <>
    <GlobalStyles />
    <App/>
  </>,
  document.getElementById('main')
);
