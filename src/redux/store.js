import {applyMiddleware, createStore} from "redux";

import {logger} from "redux-logger";
import rootReducer from './reducer';
import {persistStore} from "redux-persist";

const middleWares = [];

middleWares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(store);

export default { store, persistor };
