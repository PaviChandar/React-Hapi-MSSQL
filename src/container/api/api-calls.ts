import { Dispatch } from "react"
import { Action } from "redux"
import axiosInstance from "../../container/api/axios"
import { InputField } from "../../interface/employee.interface"
import { UserInputField } from "../../interface/user.interface"
import { editEmployee, employeeAdded, isLogin, removeEmployee, retreiveEmployee, retreiveEmployees, userLoggedIn, userRegistered } from "../../redux/action/action"

export const addEmployeeApi = (employee : InputField): any => {
    return function (dispatch: Dispatch<Action>) {
        console.log("User in dispatch : ", employee)
        axiosInstance
            .post(`/employees`, employee)
            .then((res) => {
                dispatch(employeeAdded(res.data))
            })
            .catch((error) => {
                console.log("Cannot add employee : ", error)
            })
    }
}

export const getAllEmployeeApi = () => {
     return function (dispatch: Dispatch<Action>) {
        axiosInstance
            .get(`/employees`)
            .then((res) => {
                dispatch(retreiveEmployees(res.data.data))
            })
            .catch((error) => {
                console.log("Cannot get employees : ", error)
            })
    }
}

export const getSingleEmployeeApi = (id: number) => {
    return function (dispatch: Dispatch<Action>) {
        const params = {id: id}
        axiosInstance
            .get(`/employees/${id}`, { data : params })
            .then((res) => {
                console.log("data in getsing : ", res.data.data)
                dispatch(retreiveEmployee(res.data))
            })
            .catch((error) => {
                console.log("Cannot get employee : ", error)
            })
    }
}

export const updateEmployeeApi = (id: number, employee: InputField) => {
    return function (dispatch: Dispatch<Action>) {
        axiosInstance
            .put(`/employees/${id}`, employee)
            .then((res) => {
                dispatch(editEmployee(res.data))
            })
            .catch((error) => {
                console.log("Cannot update employee : ", error)
            })
    }
}

export const deleteEmployeeApi = (id: number) => {
    return function (dispatch: Dispatch<Action>) {
        console.log("id in apicall : ", id)
        axiosInstance
            .delete(`/employees/${id}`)
            .then((res) => {
                dispatch(removeEmployee(id))
            })
            .catch((error) => {
                console.log("Cannot delete employee : ", error)
            })
    }
}

export const registerUserApi = (user: UserInputField) => {
    return function (dispatch: Dispatch<Action>) {
        axiosInstance
            .post(`/users/`, user)
            .then((res) => {
                dispatch(userRegistered())
            })
            .catch((error) => {
                console.log("Cannot register employee : ", error)
            })
    } 
}

export const loginUserApi = (user: any) => {
    return function (dispatch: Dispatch<Action>) {
        axiosInstance
            .post(`/login/`, user)
            .then((res) => {
                dispatch(userLoggedIn(res.data.data))
                console.log("login data : ", res.data.data)
                sessionStorage.setItem('token', res.data.token)
                sessionStorage.setItem('login', res.data.data.login)
                dispatch(isLogin(res.data.data.login))
            })
            .catch((error) => {
                console.log("Cannot login employee : ", error)
            })
    } 
}