import { useEffect } from "react"

import EmployeeContainer from "../../store/action/employee_action"
import GetAllEmployee from "../employee/get-all-employee"
import "../../assets/admin.css"
import { useTranslation } from "react-i18next"

const Admin = () => {
    const { getAllEmployee } = EmployeeContainer()
    const { t } = useTranslation()

    useEffect(() => {
        getAllEmployee()
    },[])

    return (
        <div>
            <h1>{t("details")}</h1>
            <h2 className="adminHome" >Admin home</h2>
            <GetAllEmployee   />
        </div>
    )
}

export default Admin