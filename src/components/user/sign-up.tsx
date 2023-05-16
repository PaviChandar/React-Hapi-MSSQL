import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { registerHandler } from "../../container/user/sign-up";
import { UserInputField } from "../../shared/interface/user.interface"


const SignUp = () => {
    const dispatchStore = useDispatch()
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState<UserInputField>({
        username:'',
        email:'',
        password:'',
    })

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setCredentials((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    return(
        <div>
            <form>
                <input type="text" placeholder="username" name="username" value={credentials.username} onChange={changeHandler} />
                <input type="text" placeholder="email" name="email" value={credentials.email} onChange={changeHandler} />
                <input type="text" placeholder="password" name="password" value={credentials.password} onChange={changeHandler} />
            </form>
            <button onClick={() => registerHandler(dispatchStore, credentials, navigate)}>Register User</button>
        </div>
    )
}

export default SignUp