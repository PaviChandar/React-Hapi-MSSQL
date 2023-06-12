import { useState } from "react"

const FunctionalForm = () => {

    const [credentials, setCredentials] = useState({
        firstname:"",
        lastname:"",
        email:"",
        age:"",
        gender:"",
        phone:"",
        address:"",
        city:""
    })
    const [formError, setFormError] = useState<any>(false)
    const [submit, setSubmit] = useState(false)
    const [success, setSuccess] = useState(false)

    const validate = (values: any) => {
        const errors: any = {}
        if(!values.firstname) {
            errors.firstname = "*Firstname is required"
        }
        if(!values.lastname) {
            errors.lastname = "*Lastname is required"
        }
        if(!values.age) {
            errors.age = "*Age is required"
        }
        if(!values.gender) {
            errors.gender = "*Gender is required"
        }
        if(!values.city) {
            errors.city = "*City is required"
        }
        if(!values.email) {
            errors.email = "*Email is required"
        }
        if(!values.phone) {
            errors.phone = "*Phone number is required"
        }
        if(!values.address) {
            errors.address = "*Address is required"
        }

        return errors
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        e.preventDefault()
        setCredentials((prev) => ({...prev, [e.target.name] : e.target.value }))
        setFormError(() => validate(credentials))
    }

    const handleSubmit = () => {
        setFormError(() => validate(credentials))
        setSubmit(true)
        const { firstname, lastname, age, email } = credentials
        if(Object.keys(formError).length === 0 && submit) {
            alert("Hi ,"+firstname+" "+lastname+"! Your age and email is "+age+" and "+email+".")
        }
    }

    return (
        <div>
            <h1>Functional - Form</h1>
            <form>
                <div>
                    <label>Firstname</label>
                    <input type="text" name="firstname" placeholder="firstname" onChange={(e) => handleChange(e)} value={credentials.firstname} />
                    <span>{formError.firstname}</span>
                </div>
                <div>
                    <label>Lastname</label>
                    <input type="text" name="lastname" placeholder="lastname" onChange={(e) => handleChange(e)} value={credentials.lastname} />
                    <span>{formError.lastname}</span>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="email" onChange={(e) => handleChange(e)} value={credentials.email} />
                    <span>{formError.email}</span>
                </div>
                <div>
                    <label>Age</label>
                    <input type="number" name="age" placeholder="age" onChange={(e) => handleChange(e)} value={credentials.age} />
                    <span>{formError.age}</span>
                </div>
                <div>
                    <label>Gender</label>
                    <select  placeholder="gender" name="gender" onChange={(e) => handleChange(e)} value={credentials.gender}>
                        <option value="select" >Select</option>
                        <option value="male" >Male</option>
                        <option value="female" >Female</option>
                        <option value="others" >Others</option>
                    </select>
                    <span>{formError.gender}</span>
                </div>
                <div>
                    <label>Phone</label>
                    <input type="number" placeholder="phone-number" name="phone" onChange={(e) => handleChange(e)} value={credentials.phone} />
                    <span>{formError.phone}</span>
                </div>
                <div>
                    <label>Address</label>
                    <input type="text" placeholder="address" name="address" onChange={(e) => handleChange(e)} value={credentials.address} />
                    <span>{formError.address}</span>
                </div>
                <div>
                    <label>City</label>
                    <input type="text" placeholder="city" name="city" onChange={(e) => handleChange(e)} value={credentials.city} />
                    <span>{formError.city}</span>
                </div>
            </form>
            <button onClick={handleSubmit} >Submit</button>
        </div>
    )
}

export default FunctionalForm