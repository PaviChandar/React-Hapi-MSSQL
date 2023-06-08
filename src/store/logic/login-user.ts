import { createLogic } from "redux-logic"

import axiosInstance from "../../shared/utils/axios"
import { error_message, isLogin, loggedInUser, success_message } from "../action/action"

const loginUserApiLogic = createLogic({
    type: 'LOG_USER',
    async process({ action }: any, dispatch, done) {
        const user = action.payload
        try {
            const response = await axiosInstance.post('/login', user)
            dispatch(loggedInUser(response.data.data))
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('login', response.data.data.login)
            dispatch(isLogin())
            dispatch(success_message(response.data.message))
        } catch (error: any) {
            // dispatch(error_message(response.data.message))
            console.log("error in login user-logic : ", error)
        }
        done()

    }
})


export default loginUserApiLogic