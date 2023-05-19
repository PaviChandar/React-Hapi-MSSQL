import { createLogic } from "redux-logic"

import * as types from "../action/action-type"
import axiosInstance from "../../shared/utils/axios"

const getSingleEmployeeApiLogic = createLogic({
    type: 'GET_SINGLE',
    async process({ action }: any, dispatch, done) {
        const id  = action.payload
        console.log("id in logic : ", id)
        console.log("action in logic single : ", action)
        // console.log("payload in logic single : ", action.payload)
        try {
            const response= await axiosInstance
                                .get(`/employees/${id}`)
                                console.log("res from sing empl : ", response.data)
            dispatch({
                type: types.GET_EMPLOYEE,
                payload: response.data
            })
        } catch (error) {
            console.log("error in get single logic : ", error)
        }
        done()
    },

})

export default getSingleEmployeeApiLogic