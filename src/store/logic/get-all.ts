import { createLogic } from "redux-logic"

import axiosInstance from "../../shared/utils/axios"
import { retreiveEmployees } from "../action/action"

const getAllEmployeeApiLogic: any = createLogic({
    type: 'GET',
    async process({ action }, dispatch, done) {
        try {
            const response= await axiosInstance.get('/employees')
            dispatch(retreiveEmployees(response.data.data))
        } catch (error) {
            console.log("error: ", error)
        }
        done()
    },

})

export default getAllEmployeeApiLogic
