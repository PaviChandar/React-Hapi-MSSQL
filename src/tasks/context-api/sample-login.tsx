import { useContext } from "react"

import { LoginContext } from "./login-context"

const SampleLogin = () => {

    const { setUsername, setShowProfile } = useContext(LoginContext)

    return (
        <div>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder="Password" />
            <button onClick={() => setShowProfile(true)} >Login</button>
        </div>
    )
}

export default SampleLogin