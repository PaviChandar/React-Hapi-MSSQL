import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogicMiddleware } from "redux-logic";
import axios from "axios"

import rootReducer from './reducer/rootReducer';
import rootLogic from "../store/logic/index"

const deps: any = {
    httpClient: axios
}

const logicMiddleware = createLogicMiddleware(rootLogic, deps)
const middleware = applyMiddleware(thunk, logicMiddleware)

export const store = createStore(rootReducer, composeWithDevTools(middleware))

export type RootState = ReturnType<typeof store.getState>