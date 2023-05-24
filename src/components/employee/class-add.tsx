import React from "react";
import { validate } from "../../shared/validation/validate";
import { InputField } from "../../shared/interface/employee.interface";
import { t } from "i18next";
import { connect } from "react-redux";
import Add from "../../container/handler/add";
import addEmployee from "../../store/logic/add-employee";

// const { addEmployee } = EmployeeContainer()

class AddEmployeeClass extends React.Component {
    
    constructor(props:any) {
        super(props) 
        console.log("props in class", props)
        this.state = {
            id:0, name:'', age:0, city:'', salary:0,
            formError: {},
            credentials: {id:0, name:'', age:0, city:'', salary:0}
        }

        this.handleChange = this.handleChange

        console.log("state in class", this.state)
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        console.log("inside handlechange")
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { id, name, age, city, salary }: any = this.state
        console.log("inside render : ", this.state)
        

        const addHandler = (credentials: any) => {
            // e.preventDefault()
            // let employee: InputField
            console.log("inside add handler")
            console.log("emp data input : ", credentials)
            // this.setState(() => validate(credentials))
            addEmployee(credentials)
    
            // this.setState(() => validate(this.props.credentials))
        }

        return(
            <div>
                <h2>Create New Employee</h2>
                    <div>
                        <div>
                            <input type="number" placeholder="id" name="id" onChange={(e) => this.handleChange(e)} min={0} value={id} />
                        </div>
                        <div>
                            <input type="text" placeholder="name" name="name" onChange={(e) => this.handleChange(e)} value={name} />
                        </div>
                        <div>
                            <input type="number" placeholder="age" name="age" min={1} onChange={(e) => this.handleChange(e)} value={age} />
                        </div>
                        <div>
                            <input type="text" placeholder="city" name="city" onChange={(e) => this.handleChange(e)} value={city} />
                        </div>
                        <div>
                            <input type="number" placeholder="salary" name="salary" onChange={(e) => this.handleChange(e)} min={0} value={salary} />
                        </div>
                    </div>
                    {/* <Add /> */}
                    <button onClick={(credentials) => addHandler(credentials)}>{t("add")}</button>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    console.log("inside mapstprops", state)
    return {
        id: state.id,
        name: state.name,
        age: state.age, 
        city: state.city, 
        salary: state.salary
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addEmployee: (credentials: InputField) => dispatch(addEmployee({type: 'POST_EMP', credentials}))
    }
}

export default connect (mapDispatchToProps, mapStateToProps) (AddEmployeeClass)