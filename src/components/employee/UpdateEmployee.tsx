import { Dispatch, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { getSingleEmployee, updateEmployee } from "../../redux/action/action";
import { store } from "../../redux/store/store";
import { InputField } from "../../interface/employee.interface";
import { validate } from "../shared/validate";

const UpdateEmployee = () => {

    const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>;
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        setFormError(() => validate(credentials))
    }

    useEffect(() => {   
        console.log("inside useeffect getsing")
        // let id:number
        dispatchStore(getSingleEmployee(id))
    }, [])

    useEffect(() => {
        console.log("data in useefect : ", data)
        if(data) {
            setCredentials({ ...data })
        }
    }, [data])

    useEffect(() => {
    },[credentials])

    const updateHandler = () => {
        console.log("update handle : ", credentials)
        console.log("id in update : ", id)
        setFormError(() => validate(credentials))
        setSubmit(true)
        if (Object.keys(formError).length === 0 && submit) {
            console.log("inside if", credentials)
            dispatchStore(updateEmployee(id, credentials))
            setSuccess(true)
        }
    }

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
           <button onClick={ updateHandler }>Update details</button>
        </div>
    )
}

export default UpdateEmployee