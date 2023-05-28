import { Navigate } from "react-router-dom"

interface Props {
    children: any
    // children: JSX.IntrinsicAttributes
    // children: React.Component<any>
}

const PrivateRoutes = ({ children }: Props) => {
    const login = localStorage.getItem('login')
    
    return login ? children : <Navigate to='/' /> 
}

export default PrivateRoutes