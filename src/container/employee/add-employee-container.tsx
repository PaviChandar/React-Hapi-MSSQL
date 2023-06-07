import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Dispatch } from "redux";

import AddEmployee from "../../components/employee/add-employee";
import { InputField } from "../../shared/interface/employee.interface";
import { addEmployee } from "../../store/action/add_action";

interface State {
    credentials: InputField
    success: boolean
}

class AddEmployeeClass extends Component<any, State> {
    
    constructor(props: Object) {
        super(props)
        this.state = {
            credentials: {
                id: 0,
                name: '',
                age: 0,
                city: '',
                salary: 0
            }, 
            success: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.addHandler = this.addHandler.bind(this)
        this.validate = this.validate.bind(this)
    }

    validate = (value: any) => {
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
        }))
    }

    addHandler = () => {
        this.props.addEmployee(this.state.credentials)
        alert('Employee added successfully!')
        this.setState({ success : true })
    }

    render() {

        return(
            <div>
                <AddEmployee addHandler= {this.addHandler} handleChange= {this.handleChange} someState= {this.state.credentials}  />
                {
                    this.state.success ? <Navigate to='/admin'></Navigate>: null
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => { 
    
    return {
        addEmployee: (credentials: InputField) => dispatch(addEmployee(credentials))
    }
}

export default connect (null, mapDispatchToProps)(AddEmployeeClass)

