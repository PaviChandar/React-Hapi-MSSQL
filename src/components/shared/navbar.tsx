import jwtDecode from "jwt-decode"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()
    const { t, i18n } = useTranslation()
    i18n.changeLanguage()

    const { user } = useSelector((state:any) => state.userData)
    // console.log("USER in navbar : ", user)

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
        console.log("inside logout")
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("login")
        setIsLoggedIn(false)
        navigate('/login')
    }

    return (
        <div>
            {
                isLoggedIn ?
                <>
                    <h4>Hello, {decodeToken.username}</h4>
                    <button onClick={handleLogout} >Logout</button>
                </> :
                <>
                    <button onClick={() => navigate('/login')} >{t("login.login")}</button>
                </>
            }
        </div>
    )
}

export default Navbar