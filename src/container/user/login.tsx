import { validateUser } from "../../components/shared/validate"
import Login from "../../components/user/login"
import { UserInputField } from "../../interface/user.interface"
import { loginUser } from "../../redux/action/action"

const LoginContainer = () => {
    const loginHandler = (credentials: UserInputField, dispatchStore: (arg0: any) => void, formError: {}, setFormError: (arg0: () => any) => void, submit: any, setSubmit: (arg0: boolean) => void, setSuccess: (arg0: boolean) => void) => {
        console.log("inside login handler")
        setFormError(() => validateUser(credentials))
        setSubmit(true)
        if(Object.keys(formError).length === 0 && submit) { 
            console.log("credentials : ", credentials)
            dispatchStore(loginUser(credentials))
            setSuccess(true)
        }
        // if (sessionStorage.getItem('token')) {
        //     if (sessionStorage.getItem('login') === 'true') {
        //         alert("Successfully admin logged in!")
        //         navigate('/admin')
        //     } else {
        //         alert("Successfully logged in!")
        //         navigate('/')
        //     }
        // } 
    }
    return <Login loginHandler={loginHandler} />
}
export default LoginContainer