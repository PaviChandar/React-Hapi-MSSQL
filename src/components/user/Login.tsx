import { Dispatch, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { UserInputField } from "../../interface/type"
import { loginUser } from "../../redux/action/action"
import { store } from "../../redux/store/store"

const Login = () => {
    const navigate = useNavigate()
    const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>;
    const [credentials, setCredentials] = useState<UserInputField>({
        email:'',
        password:''
    })

    const { user } = useSelector((state: any) => state.userData.user)
    console.log("User data : ", user)

    const handleChange = (e: any) => {
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value}))
    }

    const loginHandler = () => {
        console.log("inside login handler")
        dispatchStore(loginUser(credentials))
        alert("Logged in successfully")
        navigate('/')
    }

    return(
        <div>
            <form>
                <input type="text" name="email" placeholder="email" value={credentials.email} onChange={handleChange} />
                <input type="password" name="password" placeholder="password" value={credentials.password} onChange={handleChange} />
            </form>
            <button onClick={loginHandler} >Login</button>
            <div>
                <h4>If not an user, Sign Up</h4>
                <button onClick={() => navigate('/sign-up')} >Sign Up</button>
            </div>
        </div>
    )
}

export default Login