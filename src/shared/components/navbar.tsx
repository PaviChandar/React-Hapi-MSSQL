import { Button } from "antd"
import jwtDecode from "jwt-decode"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { removeToken } from "./remove-token"

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()
    const { t } = useTranslation()

    const { user } = useSelector((state:any) => state.userData)

    useEffect(() => {
        if(sessionStorage.getItem("token")) {
            setIsLoggedIn(true)
        }
    },[user])

    let token: string, decodeToken: string|any
    if(sessionStorage.getItem("token")) {
        token = JSON.stringify(sessionStorage.getItem("token"))
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
                    <h4>Hello, { decodeToken.username }</h4>
                    <Button onClick={handleLogout} >Logout</Button>
                </> :
                <>
                    <button onClick={() => navigate('/login')} >{t("login")}</button>
                </>
            }
        </div>
    )
}

export default Navbar