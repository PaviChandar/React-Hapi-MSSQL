import { EmployeeActionType, EmployeeState, InputField } from "../../shared/interface/employee.interface"
import * as types from "../action/action-type"

const initialState: EmployeeState | InputField = {
    employees: [],
    employee: {
        id: 0,
        name: '',
        age: 0,
        city: '',
        salary: 0
    },
}

const employeeReducer = (state:EmployeeState = initialState, action: EmployeeActionType):EmployeeState => {
    switch(action.type) {
        case types.GET_ALL_EMPLOYEE:
            return {
                ...state,
                employees: action.payload
            }
        case types.GET_EMPLOYEE:
            console.log("get sing action in red : ", action)
            console.log("get sing pay in red : ", action.payload)
            return {
                ...state,
                employee: action.payload
            }
        case types.ADD_EMPLOYEE:
            return {
                ...state,
                employee: action.payload
            }
        case types.UPDATE_EMPLOYEE:
            return {
                ...state,
                employee: action.payload
            }
        case types.DELETE_EMPLOYEE:
            console.log("inside red : ", action)
            console.log("inside red payload : ", action.payload)
            return {
                ...state,
                employee: action.payload
            }
        default:
            return state
    }
}

export default employeeReducer