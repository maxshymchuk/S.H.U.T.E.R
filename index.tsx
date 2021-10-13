import React from 'react';
import ReactDOM from 'react-dom';
import App from "./src/App";
import { createGlobalStyle } from 'styled-components'
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./src/store/store";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
`

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App/>
  </Provider>,
  document.getElementById('main')
);
