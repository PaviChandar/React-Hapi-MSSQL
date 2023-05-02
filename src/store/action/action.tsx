import axios from "axios"
import { baseUrl } from "../../components/shared/constants/Constant"
import { UserState } from "../../components/shared/types/type"
import * as types from "./action-type"

// export const employeeAdded = () => ({
//     type: types.ADD_EMPLOYEE
// })

export const retreiveEmployees = (employees: UserState) => ({
    type: types.GET_ALL_EMPLOYEE,
    payload: employees
})

export const retreiveEmployee = (employee: UserState) => ({
    type: types.GET_EMPLOYEE,
    payload: employee
})

export const editEmployee = () => ({
    type: types.UPDATE_EMPLOYEE
})

// export const addEmployee = (user : any) =>  {
//     return async (dispatch:any) => {
//         console.log("User in dispatch : ", user)
//         await axios
//             .post(`${baseUrl}/api/employees`, user)
//             .then((res) => {
//                 dispatch(employeeAdded)
//                 console.log("response from api : ", res)
//                 alert("Employee added successfully")
//             })
//             .catch((error) => {
//                 console.log("Cannot add employee : ", error)
//             })
//     }
// }

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

export const updateEmployee = (id:any, employee: any) => {
    return async (dispatch: any) => {
        try {
            console.log("inside update action try")
        } catch(error) {
            console.log("inside update action catch")
            console.log("Cannot update employee : ", error)
        }
    }
}