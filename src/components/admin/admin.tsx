import { useEffect } from "react"

import EmployeeContainer from "../../store/action/employee_action"
import GetAllEmployee from "../employee/get-all-employee"
import "../../assets/admin.css"
import getAllEmployeeApi from "../../store/logic/get-all"

const Admin = () => {
    const { getAllEmployee } = EmployeeContainer()

    useEffect(() => {
        getAllEmployee()
        // getAllEmployeeApi()
    },[])

    return (
        <div>
            <h1 className="adminHome" >Admin home</h1>
            <GetAllEmployee   />
        </div>
    )
}

export default Admin