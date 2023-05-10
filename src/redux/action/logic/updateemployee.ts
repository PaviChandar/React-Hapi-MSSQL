import { createLogic } from "redux-logic"

import axiosInstance from "../../../container/api/axios"
import { InputField } from "../../../interface/employee.interface"
import * as types from "../../action/action-type"
import { editEmployee } from "../action"

export const updateEmployeeApi = createLogic({
    type: types.UPDATE_EMPLOYEE,
    latest: true,
    processOptions: {
        dispatchReturn: true
    },
    process({ action } , dispatch, done) {
        console.log("action in add emp : ", action)
        const employee = action.payload
        console.log("employee data : ", employee)
        console.log("action type : ",action.type)
        return (
            axiosInstance
                .put(`/employees/${id}`, employee)
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

// export default [addEmployeeApi]