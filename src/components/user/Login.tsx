import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { UserInputField } from "../../shared/interface/user.interface"
import { validateUser } from "../../shared/validation/validate"
import "../../assets/login.module.css"
import userContainer from "../../container/user/user_container"
import useUserContainer from "../../container/user/user_container"
import UserContainer from "../../container/user/user_container"

const Login = () => {
    const { t } = useTranslation()
    const { loginUser } = UserContainer()

    const navigate = useNavigate()
    const [credentials, setCredentials] = useState<UserInputField>({
        email:'',
        password:''
    })
    const [formError, setFormError] = useState<any>(false)
    const [submit, setSubmit] = useState(false)
    const [success, setSuccess] = useState(false)

    const user = useSelector((state:any) => state.userData.user)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        setFormError(() => validateUser(credentials))
    }

    const loginHandler = (credentials: UserInputField, formError: {}, setFormError: (arg0: () => any) => void, submit: any, setSubmit: (arg0: boolean) => void, setSuccess: (arg0: boolean) => void) => {
        setFormError(() => validateUser(credentials))
        setSubmit(true)
        if(Object.keys(formError).length === 0 && submit) { 
           loginUser(credentials)
           setSuccess(true)
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            if (localStorage.getItem('login') === 'true') {
                alert("Successfully admin logged in!")
                navigate('/admin')
            } else {
                alert("Successfully user logged in!")
                navigate('/')
            }
        }
    }, [success, user])

    return(
        <div>
            <form>
                <div>
                    <input type="text" name="email" placeholder="email" value={credentials.email} onChange={handleChange} className='loginEmail' />
                    <span className="error">{formError.email}</span>
                </div>
                <div>
                    <input type="password" name="password" placeholder="password" value={credentials.password} onChange={handleChange} className='loginPassword' />
                    <span className="error">{formError.password}</span>
                </div>
            </form>
            <button onClick={() => loginHandler(credentials, formError, setFormError, submit, setSubmit, setSuccess)} >{t("login")}</button>
            <div>
                <h4>If not an user, Sign Up</h4>
                <button onClick={() => navigate('/sign-up')} >{t("sign_up")}</button>
            </div>
        </div>
    )
}

export default Login