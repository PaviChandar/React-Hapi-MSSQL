import { Dispatch, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../../redux/action/action";
import { store } from "../../redux/store/store";
import { InputField } from "../../interface/type";

const AddEmployee = () => {

    const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>; //useDispatch
    const [credentials, setCredentials] = useState 
    ({
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

    const handleChange = (e: any) => { //method typeOf
        e.preventDefault()
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        setFormError(() => validate(credentials))
    }

    const addHandler = () => {
        setFormError(() => validate(credentials))
        setSubmit(true)
        if(Object.keys(formError).length === 0 && submit) {
            dispatchStore(addEmployee(credentials))
            setSuccess(true)
        }
    }

    useEffect(() => {
        if(success) {
            alert("Employee added succesfully!")
            navigate('/')
        }
    },[success])

    const validate = (value: InputField) => {
        const errors: any = {}

        if(!value.id) {
            errors.id = "*Employee ID is required"
        }
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
                <button onClick={addHandler}>Add employee</button>
        </div>
    )
}

export default AddEmployee