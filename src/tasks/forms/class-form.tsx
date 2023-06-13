import { Component } from "react"

const ageRegex = /^(0?[1-9]|[1-9][0-9]|[1][0-2][0-9]|120)$/
const emailRegex = /^([a-z]+[.-\d]*)@([a-z-]+)\.([a-z-]{2,8})(\.[a-z]{2,8})?$/
const nameRegex = /^[A-Za-z][A-Za-z ]{7,29}$/

class ClassForm extends Component<any, any> {

    constructor(props: Object) {
        super(props)
        this.state = {
            credentials: {
                firstname:"",
                lastname:"",
                email:"",
                age:'',
                gender:""
            },
            errors: {},
            submit: false,
            success: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.validateClass = this.validateClass.bind(this)
    }

    validateClass = (credentials: any) => {
        const errors: any = {}
    
        if(!credentials.firstname) {
            errors.firstname = "*Firstname is required"
        } else if (!nameRegex.test(credentials.firstname)) {
            errors.firstname = "*Name can contain alphabets,space and length should be minimum 4 characters"
        }
    
        if(!credentials.lastname) {
            errors.lastname = "*Lastname is required"
        } else if (!nameRegex.test(credentials.lastname)) {
            errors.lastname = "*Name should contain only alphabets and space"
        }
    
        if(!credentials.email) {
            errors.email = "*Email is required"
        }  else if (!emailRegex.test(credentials.email)) {
            errors.email = "*Invalid email"
        }
    
        if(!credentials.age) {
            errors.age = "*Age is required"
        } else if (!ageRegex.test(credentials.age)) {
            errors.age = "*Invalid age"
        }
    
        if(!credentials.gender) {
            errors.gender = "*Gender is required"
        }

        this.setState({ errors })
    
        return errors
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        e.preventDefault()
        const { name, value } = e.target

        this.setState((prev: { credentials: any }) => ({
            credentials: {
                ...prev.credentials,
                [name] : value
            }
        })) 

        this.setState((prev: { errors: any }) => ({
            errors: {
                ...prev.errors,
                [name] : ''
            }
        })) 
    }

    handleSubmit = () => {
        const { credentials, submit } = this.state
        const errors = this.validateClass(credentials)
        this.setState ({ submit : true })
        if(Object.keys(errors).length === 0 && submit) {
            this.setState({
                credentials: {
                    firstname:"",
                    lastname:"",
                    email:"",
                    age:'',
                    gender:""
                }
            })
            this.setState({ success: true })
            alert("Hi, "+credentials.firstname+" "+credentials.lastname)
        } else {
            this.setState({ errors })
        }
    }

    render() {
        const { firstname, lastname, email, age, gender } = this.state.credentials
        const { errors } = this.state

        return (
            <div>
                <h1>Class - Form</h1>
                <form>
                    <div>
                        <label>Firstname</label>
                        <input type="text" name="firstname" placeholder="firstname" onChange={(e) => this.handleChange(e)} value={firstname} />
                        {errors.firstname && <span>{errors.firstname}</span>}
                    </div>
                    <div>
                        <label>Lastname</label>
                        <input type="text" name="lastname" placeholder="lastname" onChange={(e) => this.handleChange(e)} value={lastname} />
                        { errors.lastname && <span>{errors.lastname}</span> }
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="email" onChange={(e) => this.handleChange(e)} value={email} />
                        { errors.email && <span>{errors.email}</span> }
                    </div>
                    <div>
                        <label>Age</label>
                        <input type="number" name="age" placeholder="age" onChange={(e) => this.handleChange(e)} value={age} />
                        { errors.age && <span>{errors.age}</span> }
                    </div>
                    <div>
                        <label>Gender</label>
                        <select  placeholder="gender" name="gender" onChange={(e) => this.handleChange(e)} value={gender}>
                            <option value="select" >Select</option>
                            <option value="male" >Male</option>
                            <option value="female" >Female</option>
                            <option value="others" >Others</option>
                        </select>
                        { errors.gender && <span>{errors.gender}</span> }
                    </div>
                </form>
                <button onClick={this.handleSubmit} >Submit</button>
            </div>
        )
    }
}

export default ClassForm