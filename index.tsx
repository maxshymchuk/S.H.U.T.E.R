import React from 'react';
import ReactDOM from 'react-dom';
import App from "./src/App";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./src/store/store";
import { Global } from './src/styles/global';
import { isMobileBrowser } from './src/utils';
import ErrorScreen from './src/components/Interface/components/ErrorScreen/ErrorScreen';

const store = createStore(rootReducer);

const rootElement = isMobileBrowser() ? <ErrorScreen message='Mobile devices not allowed' /> : (
  <Provider store={store}>
    <Global />
    <App/>
  </Provider>
)

ReactDOM.render(rootElement, document.getElementById('main'));
