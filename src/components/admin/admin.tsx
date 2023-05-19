import { Dispatch, SetStateAction, useEffect } from "react"
import employeeContainer from "../../container/employee/employee_container"
import EmployeeContainer from "../../container/employee/employee_container"
import useEmployeeContainer from "../../container/employee/employee_container"
import GetAllEmployeeContainer from "../../container/employee/employee_container"
import { HandleMethod } from "../../container/handler/handler-methods"
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