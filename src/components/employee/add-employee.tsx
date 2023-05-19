import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { validate } from "../../shared/validation/validate";
import "../../assets/add.module.css"
import employeeContainer from "../../container/employee/employee_container";
import { InputField } from "../../shared/interface/employee.interface";
import useEmployeeContainer from "../../container/employee/employee_container";
import EmployeeContainer from "../../container/employee/employee_container";

const AddEmployee = (props: any) => {
    const { t } = useTranslation()

    const [credentials, setCredentials] = useState({id:0, name:'', age:0, city:'', salary:0 })
    const navigate = useNavigate()
    const [formError, setFormError] = useState<any>(false)
    const [submit, setSubmit] = useState(false)
    const [success,setSuccess] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        e.preventDefault()
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        setFormError(() => validate(credentials))
    }

    useEffect(() => {
        if(success) {
            alert("Employee added succesfully!")
            navigate('/')
        }
    },[success])

    const { addEmployee } = EmployeeContainer()

    const addHandler = ( setFormError: (arg0: () => any) => void, formError: {}, setSubmit: (arg0: boolean) => void, submit: any, credentials: InputField, setSuccess: (arg0: boolean) => void) => {
        console.log("inside add handleer")
        setFormError(() => validate(credentials))
        setSubmit(true)
        if(Object.keys(formError).length === 0 && submit) { 
            console.log("credentials : ", credentials)
            EmployeeContainer().addEmployee(credentials)
            setSuccess(true)
        }
    }

    return(
        <div>
            <h2>Create New Employee</h2>
                <div>
                    <div>
                        <input type="number" placeholder="id" name="id" onChange={(e) => handleChange(e)} min={0} value={credentials.id} />
                        <span className="error">{formError.id}</span>
                    </div>
                    <div>
                        <input type="text" placeholder="name" name="name" onChange={(e) => handleChange(e)} value={credentials.name} />
                        <span className="error">{formError.name}</span>
                    </div>
                    <div>
                        <input type="number" placeholder="age" name="age" min={1} onChange={(e) => handleChange(e)} value={credentials.age} />
                        <span className="error">{formError.age}</span>
                    </div>
                    <div>
                        <input type="text" placeholder="city" name="city" onChange={(e) => handleChange(e)} value={credentials.city} />
                        <span className="error">{formError.city}</span>
                    </div>
                    <div>
                        <input type="number" placeholder="salary" name="salary" onChange={(e) => handleChange(e)} min={0} value={credentials.salary} />
                        <span className="error">{formError.salary}</span>
                    </div>
                </div>
                <button onClick={() => addHandler(setFormError, formError, setSubmit, submit, credentials, setSuccess)}>{t("add")}</button>
        </div>
    )
}

export default AddEmployee