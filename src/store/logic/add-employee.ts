import { createLogic } from "redux-logic"

import * as types from "../action/action-type"
import axiosInstance from "../../shared/utils/axios"

const addEmployeeApiLogic: any = createLogic({
    type: 'POST_EMP',
    async process({ action }: any, dispatch, done) {
        console.log("action type in add : ", action.type)
        const employee = action.payload
        console.log("action payload in add : ", employee)
        try {
            const response = await axiosInstance
                                .post('/employees', employee)
            dispatch({
                type: types.ADD_EMPLOYEE,
                payload: response.data
            })
        } catch (error) {
            console.log("error in add emp-logic : ", error)
        }
        done()
    }
})


export default addEmployeeApiLogic