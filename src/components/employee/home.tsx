import Button from "antd/es/button"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('login')
        navigate('/login')
    }

    return (
        <div>
            <h1>Hi Employee</h1>
            <Button onClick={handleLogout} >Logout</Button>
        </div>
    )
}

export default Home