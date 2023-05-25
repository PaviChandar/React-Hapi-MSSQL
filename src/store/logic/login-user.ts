import { createLogic } from "redux-logic"

import axiosInstance from "../../shared/utils/axios"
import { isLogin, loginUser } from "../action/action"

const loginUserApiLogic: any = createLogic({
    type: 'LOG_USER',
    async process({ action }: any, dispatch, done) {
        const user = action.payload
        try {
            const response = await axiosInstance
                                .post('/login', user)
            dispatch(loginUser(response.data.data))
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('login', response.data.data.login)
            dispatch(isLogin())
        } catch (error) {
            console.log("error in login user-logic : ", error)
        }
        done()
    }
})


export default loginUserApiLogic