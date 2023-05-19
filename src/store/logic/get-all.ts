import { createLogic } from "redux-logic"

import * as types from "../action/action-type"
import axiosInstance from "../../shared/utils/axios"

const getAllEmployeeApiLogic: any = createLogic({
    type: 'GET',
    async process({ action }, dispatch, done) {
        try {
            const response= await axiosInstance.get('/employees')
            dispatch({
                type: types.GET_ALL_EMPLOYEE,
                payload: response.data.data
            })
        } catch (error) {
            console.log("error: ", error)
        }
        done()
    },

})

export default getAllEmployeeApiLogic
