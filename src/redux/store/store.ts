import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogicMiddleware } from 'redux-logic';
import axios from 'axios';

import rootReducer from '../reducer/rootReducer';
import rootLogic from "../action/logic/"
import { useDispatch } from 'react-redux';

// const middlewares = [ thunk ]
// export const store = createStore(rootReducer, composeWithDevTools((applyMiddleware(...middlewares))));

const deps: any = {
    httpClient: axios
}

// const logicMiddleware = createLogicMiddleware(rootLogic, deps)
// console.log("lgc mdl : ", logicMiddleware)
// const middleware = applyMiddleware(thunk, logicMiddleware)
// const enhancer = composeWithDevTools(middleware)

// export const store = () => createStore(rootReducer, enhancer)
// console.log("store val : ", store())

export default function configuredStore(initialState: any) {
    const logicMiddleware = createLogicMiddleware(rootLogic, deps)
    const middlewares = [ thunk, logicMiddleware ]

    let store = createStore(rootReducer, deps, compose(applyMiddleware(...middlewares)))
    // store.logicMiddleware = logicMiddleware
    return store
}
