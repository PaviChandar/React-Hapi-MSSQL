import { Button } from "antd"
import jwtDecode from "jwt-decode"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { removeToken } from "./remove-token"
import "../../assets/navbar.css"

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()
    const { t } = useTranslation()

    const { user } = useSelector((state:any) => state.userData)

    useEffect(() => {
        if(localStorage.getItem("token")) {
            setIsLoggedIn(true)
        }
    },[user])

    let token: string, decodeToken: string|any
    if(localStorage.getItem("token")) {
        token = JSON.stringify(localStorage.getItem("token"))
        decodeToken = jwtDecode(token)
    }

    const handleLogout = () => {
        removeToken()
        setIsLoggedIn(false)
        navigate('/login')
    }

    return (
        <div>
            {
                isLoggedIn ?
                <>
                    <h4 className="tokenName" >Hello, { decodeToken.username }</h4>
                    <Button onClick={handleLogout} className="logoutButton" >Logout</Button>
                </> :
                <>
                    <button onClick={() => navigate('/login')} >{t("login")}</button>
                </>
            }
        </div>
    )
}

export default Navbar