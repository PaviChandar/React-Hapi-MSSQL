import { ReactNode } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

interface Props {
    children: ReactNode
}

const ProtectedRoutes = ({ children }: any) => {
    const login = useSelector((state: any) => state.userData.user.login)
    console.log("login in protected routes : ", login)

    return !login ? children : <Navigate to='/admin' />
}

export default ProtectedRoutes