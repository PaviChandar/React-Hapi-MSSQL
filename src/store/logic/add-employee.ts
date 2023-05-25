import { createLogic } from "redux-logic"

import axiosInstance from "../../shared/utils/axios"
import { registerEmployee } from "../action/action"

const addEmployeeApiLogic: any = createLogic({
    type: 'POST_EMP',
    async process({ action }: any, dispatch, done) {
        console.log("action type in add : ", action.type)
        const employee = action.payload
        console.log("action payload in add : ", employee)
        try {
            const response = await axiosInstance
                                .post('/employees', employee)
            console.log("res from add : ", response.data)
            // dispatch({
            //     type: types.ADD_EMPLOYEE,
            //     payload: response.data
            // })
            dispatch(registerEmployee(response.data))
        } catch (error) {
            console.log("error in add emp-logic : ", error)
        }
        done()
    }
})


export default addEmployeeApiLogic