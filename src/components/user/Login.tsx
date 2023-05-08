import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { loginHandler } from "../../container/user/login"
import { UserInputField } from "../../interface/user.interface"

const Login = () => {
    const navigate = useNavigate()
    const dispatchStore = useDispatch()
    const [credentials, setCredentials] = useState<UserInputField>({
        email:'',
        password:''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value}))
    }

    return(
        <div>
            <form>
                <input type="text" name="email" placeholder="email" value={credentials.email} onChange={handleChange} />
                <input type="password" name="password" placeholder="password" value={credentials.password} onChange={handleChange} />
            </form>
            <button onClick={() => loginHandler(credentials, dispatchStore, navigate)} >Login</button>
            <div>
                <h4>If not an user, Sign Up</h4>
                <button onClick={() => navigate('/sign-up')} >Sign Up</button>
            </div>
        </div>
    )
}

export default Login