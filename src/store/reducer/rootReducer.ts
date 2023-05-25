import { combineReducers } from "redux"

import employeeReducer from "./employeeReducer"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
    employeeData: employeeReducer,
    userData: userReducer
})

export default rootReducer