import { createLogic } from "redux-logic"

import axiosInstance from "../../shared/utils/axios"
import { registeredUser } from "../action/action"

const registerUserApiLogic: any = createLogic({
    type: 'REG_USER',
    async process({ action }: any, dispatch, done) {
        const user = action.payload
        try {
            const response = await axiosInstance.post('/users', user)
            dispatch(registeredUser(response.data.data))
        } catch (error) {
            console.log("error in register user-logic : ", error)
        }
        done()
    }
})


export default registerUserApiLogic