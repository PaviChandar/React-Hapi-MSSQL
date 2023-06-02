import Button from "antd/es/button"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { removeToken } from "../../shared/components/remove-token"
import { User } from "../../shared/interface/user.interface"

const Home = () => {
    const navigate = useNavigate()

    const user = useSelector((state: User) => state.userData.user)
    const handleLogout = () => {
        removeToken()
        navigate('/login')
    }

    return (
        <div>
            <h1>Hi, {user.username}</h1>
            <Button onClick={handleLogout} >Logout</Button>
        </div>
    )
}

export default Home