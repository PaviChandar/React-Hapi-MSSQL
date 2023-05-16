import { createLogic } from "redux-logic"

import { employeeAdded } from "../action/action"
import * as types from "../action/action-type"
import axiosInstance from "../api/axios"

export const addEmployeeApiLogic: any = createLogic({
    type: types.ADD_EMPLOYEE,
    latest: true,
    processOptions: {
        dispatchReturn: true
    },
    process({ action }, dispatch, done) {
        console.log("action in add emp : ", action)
        // const employee = action.payload
        // console.log("employee data : ", employee)
        // console.log("action type : ",action.payload)
        return (
            axiosInstance
                .post(`/employees`)
                .then((res) => {
                    dispatch(employeeAdded(res.data))
                    console.log("res data : ", res.data)
                })
                .catch((error) => {
                    console.log("Cannot add employee : ", error)
                })
                .then(() => done()) //app block
        )
    }
})

// export default  [ addEmployeeApi ]
// export default addEmployeeApi
// module.exports = { addEmployeeApi }