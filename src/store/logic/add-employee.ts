import { createLogic } from "redux-logic"
import { EmployeeState } from '../../shared/interface/employee.interface'

import { employeeAdded } from "../action/action"
import * as types from "../action/action-type"
import axiosInstance from "../api/axios"

 const addEmployeeApiLogic: any = createLogic({
    type: types.ADD_EMPLOYEE,
    latest: true,
    processOptions:<any>{
        dispatchReturn: true
    },
    // warnTimeout:6000,
    process({ action }: any, dispatch: (arg0: { type: string; payload: EmployeeState }) => void, done: () => void) {
        console.log("action in add emp : ", action.payload)
        const employee = action.payload
        console.log("employee data : ", employee)
        return (
            axiosInstance
                .post(`/employees`, employee)
                .then((res) => {
                    dispatch(employeeAdded(res.data))
                    console.log("res data : ", res.data)
                    done()
                })
                .catch((error) => {
                    console.log("Cannot add employee : ", error)
                })
        )
    }
})

// export default  [ addEmployeeApiLogic ]
export default addEmployeeApiLogic

// module.exports = { addEmployeeApi }