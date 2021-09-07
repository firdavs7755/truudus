import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './translate'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {persistor, store} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import {Spin} from "antd";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <Suspense fallback={<Spin />}>
                    <App />
                </Suspense>
            </PersistGate>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
