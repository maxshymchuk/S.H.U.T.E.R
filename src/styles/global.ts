import { createGlobalStyle } from 'styled-components';
import { THEME } from '../constants';

export const Global = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${THEME.BACKGROUND_COLOR};
    overflow: hidden;
  }

  * {
    font-family: ARIAL, sans-serif;
    color: ${THEME.TEXT_COLOR};
  }
`;