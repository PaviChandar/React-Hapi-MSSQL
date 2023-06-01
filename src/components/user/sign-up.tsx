import { useState } from "react"
import { useNavigate } from "react-router-dom";

import { UserInputField } from "../../shared/interface/user.interface"
import UserAction from "../../store/action/user_action";
import "../../assets/sign_up.css"

const SignUp = () => {
    const navigate = useNavigate()

    const { registerUser } = UserAction()
    const [credentials, setCredentials] = useState<UserInputField>({
        username:'',
        email:'',
        password:'',
    })

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setCredentials((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const registerHandler = () => {
        registerUser(credentials)
        alert("Employee registered successfully")
        navigate('/login')
    }

    return(
        <div className="signUpContainer">
            <form className="signUpInput" >
                <input type="text" placeholder="username" name="username" value={credentials.username} onChange={changeHandler} />
                <input type="text" placeholder="email" name="email" value={credentials.email} onChange={changeHandler} />
                <input type="text" placeholder="password" name="password" value={credentials.password} onChange={changeHandler} />
            </form>
            <button onClick={() => registerHandler()} className="signUpButton">Register</button>
            <button onClick={() => navigate('/login')} className="signUpLoginButton" >Login</button>
        </div>
    )
}

export default SignUp