import { NavigateFunction } from "react-router-dom";
import { UserInputField } from "../../interface/user.interface";
import { registerUser } from "../../redux/action/action";

export const registerHandler = (dispatchStore: (arg0: any) => void, credentials: UserInputField, navigate: NavigateFunction) => {
    dispatchStore(registerUser(credentials))
    alert("Employee registered successfully")
    navigate('/login')
}