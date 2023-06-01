import { useState } from "react"

import Profile from "./profile"
import SampleLogin from "./sample-login"
import { LoginContext } from "./login-context"

const MainContext = () => {
    const [showProfile, setShowProfile] = useState(false)
    const [username, setUsername] = useState("")
    
    return (
        <div>
            <LoginContext.Provider value={{ username, setUsername, setShowProfile }} >
            {showProfile ? <Profile /> : <SampleLogin />}
            </LoginContext.Provider>
        </div>
    )
}

export default MainContext