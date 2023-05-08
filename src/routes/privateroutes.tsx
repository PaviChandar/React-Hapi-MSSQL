import { ReactNode } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

interface Props {
    children: ReactNode
}

const PrivateRoutes = ({ children }: Props) => {
    const { login } = useSelector((state: any) => state.userData.login)
    console.log("login value : ", login)

    return login ? children : <Navigate to='/' />
}

export default PrivateRoutes