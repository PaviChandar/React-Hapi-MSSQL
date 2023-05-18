import { useEffect } from "react"
import GetAllEmployeeContainer from "../../container/employee/employee_container"
import GetAllEmployee from "../employee/get-all-employee"

const Admin = () => {
    const { getAllEmployee } = GetAllEmployeeContainer()

    useEffect(() => {
        getAllEmployee()
    },[])

    return (
        <div>
            <h1>Admin home</h1>
            <GetAllEmployee />
        </div>
    )
}

export default Admin