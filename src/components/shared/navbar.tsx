import jwtDecode from "jwt-decode"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()

    // const {user} = useSelector((state:any) => state.userData)
    // console.log("USER in navbar : ", user)

    // useEffect(() => {
    //     if(sessionStorage.getItem("token")) {
    //         setIsLoggedIn(true)
    //         console.log(" received token Token val")
    //     }
    // },[user])

    // const x = sessionStorage.getItem("token")
    // console.log("token val : ", jwtDecode("x"))

    // let token
    // if (sessionStorage.getItem("token")) {
    //     token = jwtDecode(sessionStorage.getItem("token"))
    //  }

    const handleLogout = () => {
        console.log("inside logout")
    }

    return (
        <div>
            {
                isLoggedIn ?
                <>
                    <h4>Hello</h4>
                    <button onClick={handleLogout} >Logout</button>
                </> :
                <>
                    <button onClick={() => navigate('/login')} >Login</button>
                </>
            }
        </div>
    )
}

export default Navbar