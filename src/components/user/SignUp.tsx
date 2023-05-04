import { Dispatch, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserInputField } from "../../interface/type"
import { registerUser } from "../../redux/action/action";
import { store } from "../../redux/store/store";

const SignUp = () => {
    // const navigate = useNavigate()
    const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>;
    const [credentials, setCredentials] = useState<UserInputField>({
        username:'',
        email:'',
        password:'',
    })

    const changeHandler = (e: any) => {
        setCredentials((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const registerHandler = () => {
        dispatchStore(registerUser(credentials))
    }

    return(
        <div>
            <form>
                <input type="text" placeholder="username" name="username" value={credentials.username} onChange={changeHandler} />
                <input type="text" placeholder="email" name="email" value={credentials.email} onChange={changeHandler} />
                <input type="text" placeholder="password" name="password" value={credentials.password} onChange={changeHandler} />
            </form>
            <button onClick={registerHandler}>Register User</button>
        </div>
    )
}

export default SignUp