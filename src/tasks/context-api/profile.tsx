import { useContext } from "react"
import { LoginContext } from "./login-context"

const Profile = () => {

    const { username } = useContext(LoginContext)

    return (
        <div>
            <h3>Profile comp</h3>
            <h2>Username : {username} </h2>
        </div>
    )
}

export default Profile