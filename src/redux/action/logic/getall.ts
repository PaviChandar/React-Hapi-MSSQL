import { createLogic } from "redux-logic"

import axiosInstance from "../../../container/api/axios"
import * as types from "../../action/action-type"
import { retreiveEmployee, retreiveEmployees } from "../action"

export const getAllEmployeeApi = createLogic({
    type: types.GET_ALL_EMPLOYEE,
    latest: true,
    processOptions: {
        dispatchReturn: true
    },
    process({ action }, dispatch, done) {
        return (
            axiosInstance
                .get(`/employees`)
                .then((res) => {
                    dispatch(retreiveEmployees(res.data.data))
                    console.log("retreive employees : ", res.data.data)
                })
                .catch((error) => {
                    console.log("Cannot get employees : ", error)
                }),
                done
                
        )
    }
})

// export const getSingleEmployeeApi = createLogic({
//     type: types.GET_EMPLOYEE,
//     latest: true,
//     processOptions: {
//         dispatchReturn: true
//     },
//     process({ action }, dispatch, done) {
//         return (
//             axiosInstance
//                 .get(`/employees/${id}`)
//                 .then((res) => {
//                     dispatch(retreiveEmployee(res.data.data))
//                     console.log("emp retreive : ", res.data.data)
//                 })
//                 .catch((error) => {
//                     console.log("Cannot get employee : ", error)
//                 })
//                 .then(() => done())
//         )
//     }
// })


// export const getAllEmployeeApi = createLogic({
//     type: types.GET_ALL_EMPLOYEE,
//     latest: true,
//     processOptions: {
//         dispatchReturn: true
//     },
//     process({ action }, done) {
//         return function (dispatch: Dispatch<Action>){
//             axiosInstance
//                 .get(`/employees`)
//                 .then((res) => {
//                     dispatch(retreiveEmployees(res.data.data))
//                 })
//                 .catch((error) => {
//                     console.log("Cannot get employees : ", error)
//                 }),
//             done
//         }
        
//     }
// })
