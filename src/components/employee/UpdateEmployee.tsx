import { Dispatch, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getSingleEmployee, updateEmployee } from "../../redux/action/action";
import { store } from "../../redux/store/store";
import { InputField } from "../../interface/type";

// const dispatch = useDispatch()

const UpdateEmployee = () => {

    const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>;
    let { id } = useParams()
    console.log("id in update : ", id)
    const data = useSelector((state: any) => state.employeeData.employee)
    console.log("Data in update : ", data)
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

    const handleChange = (e: any) => {
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        console.log("name : ", e.target.name)
        console.log("value : ", e.target.value)
        setFormError(() => validate(credentials))
    }

    useEffect(() => {   
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

    const updateHandler = (e: any) => {
        console.log("update handle : ", credentials)
        e.preventDefault()
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

    const validate = (value: InputField) => {
        const errors: any = {}

        if(!value.name) {
            errors.name = "*Employee name is required"
        }
        if(!value.age) {
            errors.age = "*Employee age is required"
        }
        if(!value.city) {
            errors.city = "*Employee city is required"
        }
        if(!value.salary) {
            errors.salary = "*Employee salary is required"
        }

        return errors
    }

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
           <button onClick={(e) => updateHandler(e)}>Update details</button>
        </div>
    )
}

export default UpdateEmployee