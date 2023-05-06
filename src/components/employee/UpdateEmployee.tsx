import { Dispatch, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { getSingleEmployee, updateEmployee } from "../../redux/action/action";
import { store } from "../../redux/store/store";
import { InputField } from "../../interface/employee.interface";
import { validate } from "../shared/validate";
import { updateHandler } from "../../container/employee/updateemployee";

const UpdateEmployee = () => {

    let { id } = useParams()
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
        dispatch(getSingleEmployee(id))
    }, [])

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
                <input type="number" placeholder="id" name="id" onChange={(e) => handleChange(e)} min={0} value={credentials.id} readOnly />
                <div>
                    <input type="text" placeholder="name" name="name" onChange={(e) => handleChange(e)} value={credentials.name} />
                    <span>{formError.name}</span>
                </div>
                <div>
                    <input type="number" placeholder="age" name="age" min={1} onChange={(e) => handleChange(e)} value={credentials.age} />
                    <span>{formError.age}</span>
                </div>
                <div>
                    <input type="text" placeholder="city" name="city" onChange={(e) => handleChange(e)} value={credentials.city} />
                    <span>{formError.city}</span>
                </div>
              <div>
                    <input type="number" placeholder="salary" name="salary" onChange={(e) => handleChange(e)} min={0} value={credentials.salary} />
                    <span>{formError.salary}</span>
              </div>
           </div>
           <button onClick={() => updateHandler(dispatch, formError, setFormError, submit, setSubmit, credentials, id, setSuccess) }>Update details</button>
        </div>
    )
}

export default UpdateEmployee