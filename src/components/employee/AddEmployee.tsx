import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addHandler } from "../../container/employee/addemployee";

import { InputField } from "../../interface/employee.interface";
import { validate } from "../shared/validate";

const AddEmployee = () => {

    const dispatchStore = useDispatch()
    const [credentials, setCredentials] = useState({
        id:0,
        name:'',
        age:0,
        city:'',
        salary:0
    })
    const navigate = useNavigate()
    const [formError, setFormError] = useState<any>(false) //parse
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

    return(
        <div>
            <h2>Create New Employee</h2>
                <div>
                    <div>
                        <input type="number" placeholder="id" name="id" onChange={(e) => handleChange(e)} min={0} value={credentials.id} />
                        <span>{formError.id}</span>
                    </div>
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
                <button onClick={() => addHandler(dispatchStore, setFormError, formError, setSubmit, submit, credentials, setSuccess)}>Add employee</button>
        </div>
    )
}

export default AddEmployee