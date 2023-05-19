import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoutes = ({ children }: any) => {
    // const { login } = useSelector((state: any) => state.userData.user)
    const login = localStorage.getItem('login')
    console.log("login in protected : ", login)

    return !login ? children : <Navigate to='/admin' />
}

export default ProtectedRoutes