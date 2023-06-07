import { createLogic } from "redux-logic"

import axiosInstance from "../../shared/utils/axios"
import { getErrorMessage, getSuccessMessage, isLogin, loggedInUser } from "../action/action"

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
            console.log("res msg : ", response.data.message)
        } catch (error) {
            console.log("error in login user-logic : ", error)
        }
        done()

    }
})


export default loginUserApiLogic