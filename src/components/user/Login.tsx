import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { UserInputField } from "../../shared/interface/user.interface"
import { validateUser } from "../../shared/validation/validate"
import "../../assets/login.module.css"

const Login = (props: any) => {
    const { t } = useTranslation()

    const navigate = useNavigate()
    const dispatchStore = useDispatch()
    const [credentials, setCredentials] = useState<UserInputField>({
        email:'',
        password:''
    })
    const [formError, setFormError] = useState<any>(false)
    const [submit, setSubmit] = useState(false)
    const [success, setSuccess] = useState(false)

    const user = useSelector((state:any) => state.userData.user)
    console.log("User in login : ", user)
    const employee = useSelector((state:any) => state.employeeData.employee)
    console.log("Employee in login : ", employee)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        setFormError(() => validateUser(credentials))
    }

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            if (sessionStorage.getItem('login') === 'true') { //string not allowed
                alert("Successfully admin logged in!")
                navigate('/admin')
            } else {
                alert("Successfully logged in!")
                navigate('/')
            }
        }
    }, [success, user, employee])

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
            <button onClick={() => props.loginHandler(credentials, dispatchStore, formError, setFormError, submit, setSubmit, setSuccess)} >{t("login")}</button>
            <div>
                <h4>If not an user, Sign Up</h4>
                <button onClick={() => navigate('/sign-up')} >{t("sign_up")}</button>
            </div>
        </div>
    )
}

export default Login