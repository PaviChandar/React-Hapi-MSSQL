import { ReactNode } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

interface Props {
    children: ReactNode
}

const PrivateRoutes = ({ children }: any) => {
    const login  = useSelector((state: any) => state.userData.user.login)
    
    return login ? children : <Navigate to='/' /> 
}

export default PrivateRoutes