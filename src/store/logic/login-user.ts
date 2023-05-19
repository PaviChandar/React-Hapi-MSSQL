import { createLogic } from "redux-logic"

import * as types from "../action/action-type"
import axiosInstance from "../../shared/utils/axios"

const loginUserApiLogic: any = createLogic({
    type: 'LOG_USER',
    async process({ action }: any, dispatch, done) {
        console.log("action type in login : ", action.type)
        const user = action.payload
        console.log("action payload in login : ", user)
        try {
            const response = await axiosInstance
                                .post('/login', user)
                            console.log("response from login : ", response.data.data)
            dispatch({
                type: types.LOGIN_USER,
                payload: response.data.data
            })
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('login', response.data.data.login)
            dispatch({
                type: types.ISLOGIN,
                payload: response.data.login
            })
        } catch (error) {
            console.log("error in login user-logic : ", error)
        }
        done()
    }
})


export default loginUserApiLogic