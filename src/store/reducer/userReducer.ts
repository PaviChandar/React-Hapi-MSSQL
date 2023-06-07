import { UserActionType, UserInputField, UserState } from "../../shared/interface/user.interface"
import * as types from "../action/action-type"

const initialState: UserState | UserInputField = {
    users: [],
    user: {
        email:'',
        password:'',
        username:''
    },
    login: false,
    success_message: '',
    error_message: ''
}

const userReducer = (state: UserState = initialState, action: UserActionType) => {
    switch(action.type) {
        case types.REGISTER_USER:
            return {
                ...state
            }
        case types.LOGIN_USER:
            return {
                ...state,
                user: action.payload
            }
        case types.ISLOGIN:
            return {
                ...state,
                login: action.payload
            }
        case types.GET_SUCCESS_MESSAGE:
            return {
                ...state,
                success_message: action.payload
            }
        case types.GET_SUCCESS_MESSAGE:
            return {
                ...state,
                error_message: action.payload
            }
        default:
            return state
    }
}

export default userReducer

