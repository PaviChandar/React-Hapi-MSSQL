import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogicMiddleware } from 'redux-logic';
import axios from 'axios';
import rootLogic from "../action/logic"
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const middlewares = [thunk]

// const deps:  any = {
//     httpClient: axios
// }
// const logicMiddleware = createLogicMiddleware( rootLogic, deps)

// const composedMiddleware = compose(applyMiddleware(logicMiddleware))
// export const store = configureStore(rootReducer, composedMiddleware);
// export const store = () => createStore(rootReducer, compose(applyMiddleware(logicMiddleware)))

export const store = createStore(rootReducer, composeWithDevTools((applyMiddleware(...middlewares))));
