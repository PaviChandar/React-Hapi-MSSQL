import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogicMiddleware } from 'redux-logic';
import axios from 'axios';

import rootReducer from '../reducer/rootReducer';
import rootLogic from "../action/logic"


const middlewares = [thunk]

const deps:  any = {
    httpClient: axios
}

const logicMiddleware = createLogicMiddleware( rootLogic, deps)

export const store = () => createStore(rootReducer, compose(applyMiddleware(logicMiddleware)))

// export const store = createStore(rootReducer, composeWithDevTools((applyMiddleware(...middlewares))));
