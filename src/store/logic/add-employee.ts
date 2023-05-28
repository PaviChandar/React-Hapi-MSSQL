import { createLogic } from "redux-logic"

import axiosInstance from "../../shared/utils/axios"
import { registerEmployee } from "../action/action"

const addEmployeeApiLogic: any = createLogic({
    type: 'POST_EMP',
    async process({ action }: any, dispatch, done) {
        const employee = action.payload
        try {
            const response = await axiosInstance.post('/employees', employee)
            dispatch(registerEmployee(response.data))
        } catch (error) {
            console.log("error in add emp-logic : ", error)
        }
        done()
    }
})

export default addEmployeeApiLogic