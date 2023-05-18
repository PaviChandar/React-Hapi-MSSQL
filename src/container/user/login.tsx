import { validateUser } from "../../shared/validation/validate"
import Login from "../../components/user/login"
import { UserInputField } from "../../shared/interface/user.interface"
import { loginUser } from "../../store/action/action"

const LoginContainer = () => {
    const loginHandler = (credentials: UserInputField, dispatchStore: (arg0: any) => void, formError: {}, setFormError: (arg0: () => any) => void, submit: any, setSubmit: (arg0: boolean) => void, setSuccess: (arg0: boolean) => void) => {
        setFormError(() => validateUser(credentials))
        setSubmit(true)
        if(Object.keys(formError).length === 0 && submit) { 
            console.log("credentials : ", credentials)
            dispatchStore(loginUser(credentials))
            setSuccess(true)
        }
    }

    return <Login loginHandler={loginHandler}  />
}
export default LoginContainer