import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ValidateSession() {
    const navigate = useNavigate()

    const ValidateSession = () => {
        
        let url = window.location.href
        if(url.indexOf('login') > -1 || url.indexOf('sign-up') > -1) {
            return true
        }

        if(localStorage.getItem("token"))
            return true
        else {
            return false
        }
    }

    useEffect(() => {
        if(!ValidateSession()) {
            navigate('/login')
        }
    },[])
}

export default ValidateSession