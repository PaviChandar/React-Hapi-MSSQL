import { Dispatch } from "react"
import { Action } from "redux"
import { createLogic } from "redux-logic"
import axiosInstance from "../../../container/api/axios"
import * as types from "../../action/action-type"
import { retreiveEmployees } from "../action"

const getAllEmployeeApi = createLogic({
    type: types.GET_ALL_EMPLOYEE,
    latest: true,
    processOptions: {
        dispatchReturn: true
    },
    process({ action }) {
        return function (dispatch: Dispatch<Action>) {
            console.log("get action type : ", action.type)
            axiosInstance
                .get(`/employees`)
                .then((res) => {
                    dispatch(retreiveEmployees(res.data.data))
                    console.log("res data : ", res.data.data)
                })
                .catch((error) => {
                    console.log("Cannot get employees : ", error)
                })
        }
    },
})

export default [ getAllEmployeeApi ]

//mapstatetodispatch