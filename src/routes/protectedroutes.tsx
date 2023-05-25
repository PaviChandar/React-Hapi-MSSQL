import { Navigate } from "react-router-dom"

const ProtectedRoutes = ({ children }: any) => {
    
    const login = localStorage.getItem('login')

    return !login ? children : <Navigate to='/admin' />
}

export default ProtectedRoutes