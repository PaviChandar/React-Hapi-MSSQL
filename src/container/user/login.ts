import { UserInputField } from "../../interface/user.interface"
import { loginUser } from "../../redux/action/action"

export const loginHandler = (credentials: UserInputField, dispatchStore: (arg0: any) => void, navigate: (arg0: string) => void) => {
    dispatchStore(loginUser(credentials))
        alert("Logged in successfully")
        navigate('/')
}