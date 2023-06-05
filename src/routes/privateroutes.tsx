import { Navigate } from "react-router-dom"

const PrivateRoutes = ({ children }: any)  => {
    const login = localStorage.getItem('login')
    
    return login ? children : <Navigate to='/' /> 
}

export default PrivateRoutes