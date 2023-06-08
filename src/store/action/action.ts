import { InputField } from "../../shared/interface/employee.interface"
import { UserInputField } from "../../shared/interface/user.interface"
import * as types from "../action/action-type"

export const retreiveEmployees = (employee: InputField) => ({
    type: types.GET_ALL_EMPLOYEE,
    payload: employee
})

export const retreiveEmployee = (employee: InputField) => ({
    type: types.GET_EMPLOYEE,
    payload: employee
})

export const registerEmployee = (employee: InputField) => ({
    type: types.ADD_EMPLOYEE,
    payload: employee
})

export const upgradeEmployee = (employee: InputField) => ({
    type: types.UPDATE_EMPLOYEE,
    payload: employee
})

export const removeEmployee = () => ({
    type: types.DELETE_EMPLOYEE
})

export const registeredUser = (user: UserInputField) => ({
    type: types.REGISTER_USER,
    payload: user
})

export const loggedInUser = (user: UserInputField) => ({
    type: types.LOGIN_USER,
    payload: user
})

export const isLogin = () => ({
    type: types.ISLOGIN
})

export const success_message = (message: UserInputField) => ({
    type: types.GET_SUCCESS_MESSAGE,
    payload: message
})

export const error_message = (message: UserInputField) => ({
    type: types.GET_ERROR_MESSAGE,
    payload: message
})