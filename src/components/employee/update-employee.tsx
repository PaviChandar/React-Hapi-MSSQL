import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next";

import { InputField } from "../../shared/interface/employee.interface";
import { validate } from "../../shared/validation/validate";
import employeeContainer from "../../store/action/employee_action";

const UpdateEmployee = () => {

    const { t } = useTranslation()

    const { updateEmployee, getSingleEmployee } = employeeContainer()
    
    let { id }: any = useParams()
    const data = useSelector((state: any) => state.employeeData.employee)
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
    }, [])

    const updateHandler = (formError: {},setFormError: (arg0: () => any) => void, submit: any, setSubmit: (arg0: boolean) => void,credentials: InputField, id: any, setSuccess: (arg0: boolean) => void) => {
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
    },[credentials])

    useEffect(() => {
        if (success) {
            alert("Employee updated successfully!")
            navigate('/')
        }
    }, [success])

    return(
        <div>
           <h2>Update employee</h2>
           <div>
                <input type="number" placeholder="id" name="id" onChange={(e) => handleChange(e)} min={0} value={credentials.id} />
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
           <button onClick={() => updateHandler(formError, setFormError, submit, setSubmit, credentials, id, setSuccess) }>{t("update")}</button>
        </div>
    )
}

export default UpdateEmployee