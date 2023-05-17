import { useParams } from "react-router-dom"
import { createLogic } from "redux-logic"
import { EmployeeState } from "../../shared/interface/employee.interface"

import { retreiveEmployees } from "../action/action"
import * as types from "../action/action-type"
import axiosInstance from "../api/axios"

  const getAllEmployeeApiLogic: any = createLogic({
    type: 'GET',
    async process({action}, dispatch, done) {
        try {
            const response= await axiosInstance.get('/employees')
            dispatch({
                type: types.GET_ALL_EMPLOYEE,
                payload: response.data.data
            })
        } catch (error){
            console.log("error: ", error)
        }
        done()
    },

  })

    // type: types.GET_ALL_EMPLOYEE,
    // latest: true,
    // processOptions:{
    //     dispatchReturn: true,

    //     successType: types.GET_ALL_EMPLOYEE,
    // },
    // process({action}: any, done) {
    //     console.log("action type : ", action.type);
    //     console.log("action payload : ", action.payload);
        
    //    return axiosInstance
    //                 .get(`/employees`)
    //                 .then(res => res.data)
    //                 .catch(error => console.log(error))
                    
    // }
    // warnTimeout:6000,
    // process({ action }: any , dispatch: (arg0: {
    //         type: string; payload: EmployeeState // .then(() => done())
    //     }) => void, done: () => any) {
    //     console.log("action type : ", action.type)
    //     return (
    //         axiosInstance
    //             .get(`/employees`)
    //             .then((res: { data: { data: EmployeeState } }) => {
    //                 dispatch(retreiveEmployees(res.data.data))
    //                 console.log("retreive employees in lgm : ", res.data.data)
    //             })
    //             .catch((error: any) => {
    //                 console.log("Cannot get employees : ", error)
    //             }), 
    //             done()
    //             // .then(() => done())
    //             // .catch((error) => console.log("errorrrrr: ", error))
    //     )
    // }



 export default  getAllEmployeeApiLogic
//  export default [ getAllEmployeeApiLogic ]
// module.exports = { getAllEmployeeApi }

export const getSingleEmployeeApi = createLogic({
    type: 'GET_SINGLE',
    async process({ action }, dispatch, done) {
        let { id } = useParams()
        try {
            const response= await axiosInstance
                                    .get(`/employees/${id}`)
            dispatch({
                type: types.GET_EMPLOYEE,
                payload: response.data.data
            })
        } catch (error) {
            console.log("error: ", error)
        }
        done()
    },

})


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
