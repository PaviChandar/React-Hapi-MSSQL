import { useState } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom";

import { UserInputField } from "../../shared/interface/user.interface"
import UserAction from "../../store/action/user_action";


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

    const registerHandler = ( credentials: UserInputField, navigate: NavigateFunction) => {
        registerUser(credentials)
        alert("Employee registered successfully")
        navigate('/login')
    }

    return(
        <div>
            <form>
                <input type="text" placeholder="username" name="username" value={credentials.username} onChange={changeHandler} />
                <input type="text" placeholder="email" name="email" value={credentials.email} onChange={changeHandler} />
                <input type="text" placeholder="password" name="password" value={credentials.password} onChange={changeHandler} />
            </form>
            <button onClick={() => registerHandler(credentials, navigate)}>Register User</button>
        </div>
    )
}

export default SignUp