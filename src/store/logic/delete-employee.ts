import { useParams } from "react-router-dom"
import { createLogic } from "redux-logic"

import * as types from "../action/action-type"
import axiosInstance from "../api/axios"

const deleteEmployeeApiLogic: any = createLogic({
    type: 'REMOVE_EMP',
    async process({ action }: any, dispatch, done) {
        // let { id }: any = useParams()
        const id = action.payload
        console.log("id in log : ", id)
        try {
            const response = await axiosInstance
                                .delete(`/employees/${id}`, id)
                // console.log("res : ", response)
            dispatch({
                type: types.DELETE_EMPLOYEE,
                payload: response.data
            })
        } catch (error) {
            console.log("error in delete emp-logic : ", error)
        }
        done()
    }
})


export default deleteEmployeeApiLogic