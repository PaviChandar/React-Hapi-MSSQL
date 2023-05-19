import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next";

import { InputField } from "../../shared/interface/employee.interface";
import { validate } from "../../shared/validation/validate";
import employeeContainer from "../../container/employee/employee_container";

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
    const dispatch = useDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        setFormError(() => validate(credentials))
    }

    useEffect(() => {   
        console.log("inside get sing emp useeffect")
        console.log("id inside useeffect update : ", id)
        getSingleEmployee(id)
    }, [])

    const updateHandler = (formError: {},setFormError: (arg0: () => any) => void, submit: any, setSubmit: (arg0: boolean) => void,credentials: InputField, id: any, setSuccess: (arg0: boolean) => void) => {
        console.log("update handle : ", credentials)
        console.log("id in update : ", id)
        setFormError(() => validate(credentials))
        setSubmit(true)
        if (Object.keys(formError).length === 0 && submit) {
            console.log("inside if", credentials)
            console.log("inside if id", id)
            updateEmployee(credentials)
            setSuccess(true)
        }
    }

    console.log("data outside ; ", data)

    useEffect(() => {
        if(data) {
            console.log("data in useef : ", data)
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