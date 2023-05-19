import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:4000/api" })

axiosInstance.interceptors.request.use(
    (request) => {
        if (localStorage.getItem("token")) {
            const token = localStorage.getItem("token")
            console.log("token in axios : ", token)
        }
        return request
    },
    (error) => {
        return error
    }
)

export default axiosInstance