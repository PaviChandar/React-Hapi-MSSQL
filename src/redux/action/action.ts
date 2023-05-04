import axios from "axios"
import { InputField, UserState } from "../../interface/type"
import { baseUrl } from "../../utils/Config"
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

export const employeeAdded = (employee: UserState) => ({
    type: types.ADD_EMPLOYEE,
    payload: employee
})

export const retreiveEmployees = (employees: UserState) => ({
    type: types.GET_ALL_EMPLOYEE,
    payload: employees
})

export const retreiveEmployee = (employee: UserState) => ({
    type: types.GET_EMPLOYEE,
    payload: employee
})

// export const editEmployee = (employee: UserState) => ({
//     type: types.UPDATE_EMPLOYEE,
//     payload: employee
// })
export const editEmployee = (values:InputField) => ({
    type: types.UPDATE_EMPLOYEE,
    payload: values
})

export const removeEmployee = (id: any) => ({
    type: types.DELETE_EMPLOYEE,
    payload: id
})

export const addEmployee = (user : any) =>  {
    return async (dispatch: any) => {
        console.log("User in dispatch : ", user)
        await axios
            .post(`${baseUrl}/employees`, user)
            .then((res) => {
                console.log("response from api : ", res.data)
                dispatch(employeeAdded(res.data))
            })
            .catch((error) => {
                console.log("Cannot add employee : ", error)
            })
    }
}

export const getAllEmployee = () => {
    return async (dispatch:any) => {
        try {
            console.log("inside get emp action try")
             await axios.get(`${baseUrl}/employees`)
                                    .then((res) => {
                                        dispatch(retreiveEmployees(res.data.data))
                                        console.log("Response : ", res.data.data)                                        
                                    })
                                    .catch((error) => {
                                        console.log("Cannot get employee : ", error)
                                    })
        } catch(error) {
            console.log("Error in get all emp : ", error)
        }
    }
}

export const getSingleEmployee = (id: any) => {
    return async (dispatch:any) => {
        try {
            console.log("inside get single emp try")
            console.log("id in action : ", id)
            await axios.get(`${baseUrl}/employees/${id}`, id)
                        .then((res) => {
                            dispatch(retreiveEmployee(res.data))
                            console.log("single emp data : ", res.data)
                        })
        } catch (error) {
            console.log("inside get single emp catch")
            console.log("Error in getting single employee", error)
        }
    }
}

export const updateEmployee = (id: any, values: InputField) => {
    return async (dispatch: any) => {
        try {
            console.log("inside update action try")
            axios
                .put(`${baseUrl}/employees/${id}`, values)
                .then((res) => {
                    dispatch(editEmployee(res.data))
                    console.log("inside res then")
                    console.log("update data : ", res.data)
                })
        } catch(error) {
            console.log("inside update action catch")
            console.log("Cannot update employee : ", error)
        }
    }
}

export const deleteEmployee = (id: any) => {
    return async (dispatch: any) => {
        try {
            console.log("inside delete try")
            axios
                .delete(`${baseUrl}/employees/${id}`)
                .then((res) => {
                    console.log("inside delete res")
                    console.log("deleted data : ", res.data)
                    dispatch(removeEmployee(id))
            })
        } catch (error) {
            console.log("inside delete catch")
            console.log("Cannot delete employee", error)
        }
    }
}

export const registerUser = (user: any) => {
    return async (dispatch: any) => {
        axios
            .post(`${baseUrl}/users`, user)
            .then((res) => {
                console.log("res from api : ", res.data)
                dispatch(userRegistered)
            })
            .catch((error) => {
                console.log("error in register : ",error)
            })
    }
}

export const loginUser = (user: any) => {
    return async (dispatch: any) => {
        axios
            .post(`${baseUrl}/login`, user)
            .then((res) => {
                console.log("res from login :", res.data) 
                console.log("res data from login :", res.data.data)     
                dispatch(userLoggedIn(res.data.data))
                sessionStorage.setItem('token', res.data.token)
                sessionStorage.setItem('login', res.data.data.login)
                dispatch(isLogin(res.data.data.login))
            })
            .catch((error) => {
                console.log("error in login : ",error)
            })
    }
}