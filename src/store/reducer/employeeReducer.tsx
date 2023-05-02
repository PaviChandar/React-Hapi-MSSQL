import * as types from "../action/action-type"
import { EmployeeActionType, InputField, UserState } from "../../components/shared/types/type"

const initialState: UserState | InputField = {
    employees: [],
    employee: {
        id: 0,
        name: '',
        age: 0,
        city: '',
        salary: 0
    },
    // employee: Inputfield
}

const employeeReducer = (state: UserState = initialState, action: EmployeeActionType): UserState => {
    switch(action.type) {
        case types.GET_ALL_EMPLOYEE:
            return {
                ...state,
                employees: action.payload
            }
        case types.GET_EMPLOYEE:
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
            return {
                ...state,
                employee: action.payload
            }
        default:
            return state
    }
}

export default employeeReducer