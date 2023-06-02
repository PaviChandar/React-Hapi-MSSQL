import  React,{ ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { JsxElement } from "typescript"

interface Props {
    children: React.ReactNode
    // children: JSX.IntrinsicAttributes
    // children: React.Component<any>
}

const PrivateRoutes = ({ children }: any)  => {
    const login = localStorage.getItem('login')
    
    return login ? children : <Navigate to='/' /> 
}

export default PrivateRoutes