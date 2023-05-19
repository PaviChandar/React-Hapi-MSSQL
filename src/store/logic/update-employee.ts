import { useParams } from "react-router-dom"
import { createLogic } from "redux-logic"

import * as types from "../action/action-type"
import axiosInstance from "../../shared/utils/axios"

const updateEmployeeApiLogic: any = createLogic({
    type: 'UPDATE_EMP',
    async process({ action }: any, dispatch, done) {
        const { id }  = action.payload
        console.log("id in update logic : ", id)
        const employee = action.payload
        console.log("action payload in add : ", employee)
        try {
            const response = await axiosInstance
                                .put(`/employees/${id}`, employee)
            dispatch({
                type: types.UPDATE_EMPLOYEE,
                payload: response.data
            })
        } catch (error) {
            console.log("error in update emp-logic : ", error)
        }
        done()
    }
})

export default updateEmployeeApiLogic