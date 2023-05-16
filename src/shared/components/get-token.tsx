import React from "react";
import { useNavigate } from "react-router-dom";

// export class GetToken {

//     getToken() {
//         if (sessionStorage.getItem('token')) {
//             console.log("if get token")
//             if (sessionStorage.getItem('login') === 'true') { //string not allowed
//                 console.log("inside if - if get token")
//                 alert("Successfully admin logged in!")                
//             } else {
//                 return false
//             }
//         }
//     }

//     removeToken() {
//         console.log("inside remove token")
//         sessionStorage.removeItem('token')
//         sessionStorage.removeItem('login')
//     }

// }

// const GetToken = () => {
    // const navigate = useNavigate()

const GetToken = () => {
        const navigate = useNavigate()
        if (sessionStorage.getItem('token')) {
            console.log("if get token")
            if (sessionStorage.getItem('login') === 'true') { //string not allowed
                console.log("inside if - if get token")
                alert("Successfully admin logged in!")
                navigate('/admin')
            } else {
                console.log("inside get token else")
                alert("Successfully logged in!")
                navigate('/')
            }
        }
    }

// }

// export default GetToken


