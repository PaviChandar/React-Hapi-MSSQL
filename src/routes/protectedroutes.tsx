import { Navigate } from "react-router-dom"

interface Props {
    children: any
    // children: JSX.IntrinsicAttributes
    // children: React.ComponentType<any>
}

const ProtectedRoutes = ({ children }: any ) => {
    
    const login = localStorage.getItem('login')

    return !login ? children : <Navigate to='/admin' />
}

export default ProtectedRoutes