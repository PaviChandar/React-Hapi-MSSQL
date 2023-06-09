import Button from "antd/es/button"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { removeToken } from "../../shared/components/remove-token"
import { User } from "../../shared/interface/user.interface"
import "../../assets/home.css"

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
            <h2 className="user" >You are an user</h2>
            <h3>Here are your details :-
                <ul>
                    <li>Name : {user.username}</li>
                    <li>Email : {user.email}</li>
                </ul>
            </h3>
            <Button onClick={handleLogout} className="logoutButton" >Logout</Button>
        </div>
    )
}

export default Home