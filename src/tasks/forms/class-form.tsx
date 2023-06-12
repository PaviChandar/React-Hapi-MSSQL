import { Component } from "react"

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
            formError: {
                fnameError:"",
                lnameError:"",
                emailError:"",
                ageError:"",
                genderError:""
            },
            submit: false,
            success: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    validate = (credentials: any) => {
        console.log("inside val")
        const errors: any = {}

        if(!credentials.firstname) {
            errors.firstname = "Firstname is required"
        }
        if(!credentials.lastname) {
            errors.lastname = "Lastname is required"
        }
        if(!credentials.email) {
            errors.email = "Email is required"
        }
        if(!credentials.age) {
            errors.age = "Age is required"
        }
        if(!credentials.gender) {
            errors.gender = "Gender is required"
        }

        return errors
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        e.preventDefault()
        const { name, value } = e.target
        const { credentials } = this.state
        const errors = this.validate(credentials)

        this.setState((prev: { credentials: any, formError: any }) => ({
            credentials: {
                ...prev.credentials,
                [name] : value
            },
            formError: {
                ...prev.formError,
                // [name]: errors
                [name]: ''
            }
        })) 
    }

    handleSubmit = () => {
        const { credentials, submit } = this.state
        const errors = this.validate(credentials)
        this.setState ({ submit : true })
        if(Object.keys(errors).length === 0 && submit) {
            this.setState({
                credentials: {
                    firstname:"",
                    lastname:"",
                    email:"",
                    age:'',
                    gender:""
                },
                // formError : {
                //     fnameError:'',
                //     lnameError:'',
                //     emailError:'',
                //     ageError:'',
                //     genderError:''
                // }
            })
            this.setState({ success: true })
            alert("Hi, "+credentials.firstname+" "+credentials.lastname)
        } else {
            console.log("errors : ", errors)
            console.log("err st : ", this.setState({errors}))
            this.setState(errors)
        }
    }

    render() {
        const { firstname, lastname, email, age, gender } = this.state.credentials
        const { formError } = this.state

        return (
            <div>
                <h1>Class - Form</h1>
                <form>
                    <div>
                        <label>Firstname</label>
                        <input type="text" name="firstname" placeholder="firstname" onChange={(e) => this.handleChange(e)} value={firstname} />
                        <span>{formError.fnameError}</span>
                    </div>
                    <div>
                        <label>Lastname</label>
                        <input type="text" name="lastname" placeholder="lastname" onChange={(e) => this.handleChange(e)} value={lastname} />
                        <span>{formError.lnameError}</span>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="email" onChange={(e) => this.handleChange(e)} value={email} />
                        <span>{formError.emailError}</span>
                    </div>
                    <div>
                        <label>Age</label>
                        <input type="number" name="age" placeholder="age" onChange={(e) => this.handleChange(e)} value={age} />
                        <span>{formError.ageError}</span>
                    </div>
                    <div>
                        <label>Gender</label>
                        <select  placeholder="gender" name="gender" onChange={(e) => this.handleChange(e)} value={gender}>
                            <option value="select" >Select</option>
                            <option value="male" >Male</option>
                            <option value="female" >Female</option>
                            <option value="others" >Others</option>
                        </select>
                        <span>{formError.genderError}</span>
                    </div>
                </form>
                <button onClick={this.handleSubmit} >Submit</button>
            </div>
        )
    }
}

export default ClassForm