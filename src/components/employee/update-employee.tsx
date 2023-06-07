import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Employee, InputField } from "../../shared/interface/employee.interface";
import { validate } from "../../shared/validation/validate";
import employeeContainer from "../../store/action/employee_action";
import "../../assets/update.css"

const UpdateEmployee = () => {

    const { t } = useTranslation()

    const { updateEmployee, getSingleEmployee } = employeeContainer()
    
    const { id }: any= useParams()
    const data = useSelector((state: Employee) => state.employeeData.employee)
    const [credentials, setCredentials] = useState<InputField>({
        id:0,
        name:'',
        age:0,
        city:'',
        salary:0
    })
    const [formError, setFormError] = useState<any>(false)
    const [submit, setSubmit] = useState(false)
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        setFormError(() => validate(credentials))
    }

    useEffect(() => { 
        getSingleEmployee(id)
    }, [id])

    const updateHandler = () => {
        setFormError(() => validate(credentials))
        setSubmit(true)
        if (Object.keys(formError).length === 0 && submit) {
            updateEmployee(credentials)
            setSuccess(true)
        }
    }

    useEffect(() => {
        if(data) {
            setCredentials({ ...data })
        }
    }, [data])

    useEffect(() => {
        if (success) {
            alert("Employee updated successfully!")
            navigate('/admin')
        }
    }, [success, navigate])

    return(
        <div className="updateContainer" >
           <h2>Update employee</h2>
           <div className="updateInputContainer" >
                <input type="number" placeholder="id" name="id" onChange={(e) => handleChange(e)} min={0} value={credentials.id} className="updateId" readOnly  />
                <div className="updateInput"  >
                    <div >
                        <input type="text" placeholder="name" name="name" onChange={(e) => handleChange(e)} value={credentials.name} className="updateName" />
                        <span className="error">{formError.name}</span>
                    </div>
                    <div >
                        <input type="number" placeholder="age" name="age" min={1} onChange={(e) => handleChange(e)} value={credentials.age} className="updateName" />
                        <span className="error">{formError.age}</span>
                    </div>
                    <div >
                        <input type="text" placeholder="city" name="city" onChange={(e) => handleChange(e)} value={credentials.city} className="updateName" />
                        <span className="error">{formError.city}</span>
                    </div>
                    <div >
                            <input type="number" placeholder="salary" name="salary" onChange={(e) => handleChange(e)} min={0} value={credentials.salary} className="updateName" />
                            <span className="error">{formError.salary}</span>
                    </div>
                </div>
           </div> 
           <button onClick={() => updateHandler() } className="updateButton" >{t("update")}</button>
           <button onClick={() => navigate('/admin')} className="goBackButton" >Go Back</button>
        </div>
    )
}

export default UpdateEmployee