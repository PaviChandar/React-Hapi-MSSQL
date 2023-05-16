import { createLogic } from "redux-logic"

import { editEmployee } from "../action/action"
import * as types from "../action/action-type"
import axiosInstance from "../api/axios"

export const updateEmployeeApiLogic = createLogic({
    type: types.UPDATE_EMPLOYEE,
    latest: true,
    processOptions: {
        dispatchReturn: true
    },
    process({ action } , dispatch, done) {
        console.log("action in update emp : ", action)
        // const employee = action.payload
        // console.log("employee data : ", employee)
        console.log("action type : ",action.type)
        return (
            axiosInstance
                .put(`/employees/`)
                .then((res) => {
                    dispatch(editEmployee(res.data))
                    console.log("res data : ", res.data)
                })
                .catch((error) => {
                    console.log("Cannot update employees : ", error)
                })
                .then(() => done())
        )
    }
})

// export default updateEmployeeApi
// export default [ updateEmployeeApi ]
// module.exports = { updateEmployeeApi }