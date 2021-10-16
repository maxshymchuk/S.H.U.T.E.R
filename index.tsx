import React from 'react';
import ReactDOM from 'react-dom';
import App from "./src/App";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./src/store/store";
import { Global } from './src/styles/global';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Global />
    <App/>
  </Provider>,
  document.getElementById('main')
);
