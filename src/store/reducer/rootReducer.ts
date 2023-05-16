import { useDispatch } from "react-redux"
import { combineReducers } from "redux"
import { store } from "../store"

import employeeReducer from "./employeeReducer"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
    employeeData: employeeReducer,
    userData: userReducer
})

export default rootReducer