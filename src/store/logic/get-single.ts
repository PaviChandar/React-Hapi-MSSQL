import { createLogic } from "redux-logic"

import axiosInstance from "../../shared/utils/axios"
import { retreiveEmployee } from "../action/action"

const getSingleEmployeeApiLogic = createLogic({
    type: 'GET_SINGLE',
    async process({ action }: any, dispatch, done) {
        const id  = action.payload
        try {
            const response= await axiosInstance.get(`/employees/${id}`)
            dispatch(retreiveEmployee(response.data))
        } catch (error) {
            console.log("error in get single logic : ", error)
        }
        done()
    },

})

export default getSingleEmployeeApiLogic