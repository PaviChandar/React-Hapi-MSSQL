import { createLogic } from "redux-logic"
import { Employees } from "../../shared/interface/employee.interface"

import { retreiveEmployees } from "../action/action"
import * as types from "../action/action-type"
import axiosInstance from "../api/axios"

export const getAllEmployeeApiLogic: any = createLogic({
    type: types.GET_ALL_EMPLOYEE,
    latest: true,
    processOptions: {
        dispatchReturn: true
    },
    process({ action } , dispatch, done) {
        console.log("action type : ", action.type)
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
                done()
                
        )
    }
})


//  export default  getAllEmployeeApi 
//  export default [ getAllEmployeeApi ]
// module.exports = { getAllEmployeeApi }

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
