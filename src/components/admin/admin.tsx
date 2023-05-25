import { useEffect } from "react"

import EmployeeContainer from "../../store/action/employee_action"
import GetAllEmployee from "../employee/get-all-employee"

const Admin = () => {
    const { getAllEmployee } = EmployeeContainer()

    useEffect(() => {
        getAllEmployee()
    },[])

    return (
        <div>
            <h1>Admin home</h1>
            <GetAllEmployee   />
        </div>
    )
}

export default Admin