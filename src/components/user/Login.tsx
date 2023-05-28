import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { UserInputField } from "../../shared/interface/user.interface"
import { validateUser } from "../../shared/validation/validate"
import "../../assets/login.css"
import UserAction from "../../store/action/user_action"

const Login = () => {
    const { t } = useTranslation()
    const { loginUser } = UserAction()

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

    const loginHandler = () => {
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
        <div className="loginContainer">
            <form className="loginInput" >
                <div className="loginText">
                    <input type="text" name="email" placeholder="email" value={credentials.email} onChange={handleChange} className='loginEmail' />
                    <span className="error">{formError.email}</span>
                </div>
                <div className="loginText">
                    <input type="password" name="password" placeholder="password" value={credentials.password} onChange={handleChange} className='loginPassword' />
                    <span className="error">{formError.password}</span>
                </div>
                <button onClick={() => loginHandler()} className="loginButton" >{t("login")}</button>
            </form>
            <div className="loginSignInput">
                <h3>If not an user, Sign Up</h3>
                <button onClick={() => navigate('/sign-up')} className="loginButton" >{t("sign_up")}</button>
            </div>
        </div>
    )
}

export default Login