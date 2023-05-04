import { UserActionType, UserInputField, UserState } from "../../interface/type"
import * as types from "../action/action-type"

const initialState: UserState | UserInputField = {
    users: [],
    user: {
        email:'',
        password:'',
        username:''
    },
    login: false
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
        default:
            return state
    }
}

export default userReducer

