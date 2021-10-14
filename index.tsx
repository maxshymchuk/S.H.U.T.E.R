import React from 'react';
import ReactDOM from 'react-dom';
import App from "./src/App";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./src/store/store";
import { GlobalStyles, GlobalAnimations } from './src/globalStyles';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <GlobalAnimations />
    <App/>
  </Provider>,
  document.getElementById('main')
);
