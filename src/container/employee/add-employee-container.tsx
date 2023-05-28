import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import AddEmployee from "../../components/employee/add-employee";
import { InputField } from "../../shared/interface/employee.interface";
import { myfunction } from "../../store/action/new";

interface State {
    credentials: InputField
    errors: any
}


class AddEmployeeClass extends Component<any, State> {
    
    constructor(props:any) {
        super(props)
        this.state = {
            credentials: {
                id: 0,
                name: '',
                age: 0,
                city: '',
                salary: 0
            },
            errors: {
                idError: '',
                nameError: '',
                ageError: '',
                cityError: '',
                salaryError: ''
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.addHandler = this.addHandler.bind(this)
    }

    validate = (value: InputField) => {
        console.log("inside emp validate func")
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

    handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState((prev) => ({ 
            credentials: {
                ...prev.credentials,
                [name] : value
            }
        }), () => this.validate(this.state.credentials))
    }

    addHandler = () => {
        this.setState(() => this.validate(this.state.credentials))
        this.props.addEmployee(this.state.credentials)
    }

    render() {

        return(
            <div>
                <AddEmployee addHandler= {this.addHandler} handleChange= {this.handleChange} someState= {this.state.credentials} />
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    console.log("state in mapstate : ", state)

    return {
        employee: state.employeeData.employee
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => { 
    
    return {
        addEmployee: (credentials: InputField) => dispatch(myfunction(credentials))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(AddEmployeeClass)

