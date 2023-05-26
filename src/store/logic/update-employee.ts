import { createLogic } from "redux-logic"

import axiosInstance from "../../shared/utils/axios"
import { upgradeEmployee } from "../action/action"

const updateEmployeeApiLogic: any = createLogic({
    type: 'UPDATE_EMP',
    async process({ action }: any, dispatch, done) {
        const { id }  = action.payload
        const employee = action.payload
        try {
            const response = await axiosInstance.put(`/employees/${id}`, employee)
            dispatch(upgradeEmployee(response.data))
        } catch (error) {
            console.log("error in update emp-logic : ", error)
        }
        done()
    }
})

export default updateEmployeeApiLogic