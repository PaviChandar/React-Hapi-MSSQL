import { createLogic } from "redux-logic"

import * as types from "../action/action-type"
import axiosInstance from "../api/axios"

const registerUserApiLogic: any = createLogic({
    type: 'REG_USER',
    async process({ action }: any, dispatch, done) {
        console.log("action type in register : ", action.type)
        const user = action.payload
        console.log("action payload in register : ", user)
        try {
            const response = await axiosInstance
                                .post('/users', user)
                                console.log("response from reg : ", response.data.data)
            dispatch({
                type: types.REGISTER_USER
                // payload: response.data.data
            })
        } catch (error) {
            console.log("error in register user-logic : ", error)
        }
        done()
    }
})


export default registerUserApiLogic