import { createLogic } from "redux-logic"

import * as types from "../action/action-type"
import axiosInstance from "../api/axios"

const registerUserApiLogic: any = createLogic({
    type: 'POST_USER',
    async process({ action }: any, dispatch, done) {
        console.log("action type in add : ", action.type)
        const user = action.payload
        console.log("action payload in add : ", user)
        try {
            const response = await axiosInstance
                                .post('/users', user)
            dispatch({
                type: types.REGISTER_USER,
                payload: response.data
            })
        } catch (error) {
            console.log("error in add emp-logic : ", error)
        }
        done()
    }
})


export default registerUserApiLogic