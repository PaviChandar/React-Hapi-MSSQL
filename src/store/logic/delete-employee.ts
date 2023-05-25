import { createLogic } from "redux-logic"

import axiosInstance from "../../shared/utils/axios"
import { removeEmployee } from "../action/action"

const deleteEmployeeApiLogic: any = createLogic({
    type: 'REMOVE_EMP',
    async process({ action }: any, dispatch, done) {
        const id = action.payload
        try {
            const response = await axiosInstance
                                .delete(`/employees/${id}`, id)
            dispatch(removeEmployee())
        } catch (error) {
            console.log("error in delete emp-logic : ", error)
        }
        done()
    }
})


export default deleteEmployeeApiLogic