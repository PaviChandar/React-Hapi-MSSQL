import { useDispatch } from "react-redux"

import { UserInputField } from "../../shared/interface/user.interface"
import loginUserApiLogic from "../logic/login-user"

const UserAction = () => { 

  const dispatch = useDispatch() 

  const loginUser = (user: UserInputField) => {
    dispatch({ type: 'LOG_USER', payload: user })
  }

  const registerUser = (user: UserInputField) => {
    dispatch({ type: 'REG_USER', payload: user })
  }

  return {
    loginUser,
    registerUser
  }

} 

export default UserAction
