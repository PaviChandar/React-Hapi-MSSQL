import { addEmployeeApi, deleteEmployeeApi, getAllEmployeeApi, getSingleEmployeeApi, loginUserApi, registerUserApi, updateEmployeeApi } from "../../container/api/api-calls"

import { EmployeeState, InputField } from "../../interface/employee.interface"
import { UserInputField, UserState } from "../../interface/user.interface"
import * as types from "./action-type"

export const userRegistered = () => ({
    type: types.REGISTER_USER
})

export const userLoggedIn = (userDetail: UserState) => ({
    type: types.LOGIN_USER,
    payload: userDetail
})

export const isLogin = (login: UserState) => ({
    type: types.ISLOGIN,
    payload: login
})

export const employeeAdded = (employee: EmployeeState) => ({
    type: types.ADD_EMPLOYEE,
    payload: employee
})

export const retreiveEmployees = (employees: EmployeeState) => ({
    type: types.GET_ALL_EMPLOYEE,
    payload: employees
})

export const retreiveEmployee = (employee: EmployeeState) => ({
    type: types.GET_EMPLOYEE,
    payload: employee
})

export const editEmployee = (employee: EmployeeState) => ({
    type: types.UPDATE_EMPLOYEE,
    payload: employee
})

export const removeEmployee = (id: any) => ({
    type: types.DELETE_EMPLOYEE,
    payload: id
})

export const addEmployee = (employee: InputField) =>  {
    return addEmployeeApi(employee)
}

export const getAllEmployee = () => {
    return getAllEmployeeApi()
}

export const getSingleEmployee = (id: any) => {
    return getSingleEmployeeApi(id)
}

export const updateEmployee = (id: any, employee: InputField) => {
    return updateEmployeeApi(id, employee)
}

export const deleteEmployee = (id: number) => {
    return deleteEmployeeApi(id)
}

export const registerUser = (user: UserInputField) => {
    return registerUserApi(user)
}

export const loginUser = (user: any) => {
   return loginUserApi(user)
}