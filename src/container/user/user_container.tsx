import { useDispatch } from "react-redux"
import { UserInputField } from "../../shared/interface/user.interface"

const userContainer = () => { 

  const dispatch = useDispatch() 

  const loginUser = (user: UserInputField) => {
    console.log("inside login cont")
    console.log("paylod in reg.cont : ", user)
    dispatch({ type: 'LOG_USER', payload: user})
  }

  const registerUser = (user: UserInputField) => {
    console.log("inside register user cont")
    console.log("paylod in reg.cont : ", user)
    dispatch({ type: 'REG_USER', payload: user})
  }

  return {
    loginUser,
    registerUser
  }
} 

export default userContainer
