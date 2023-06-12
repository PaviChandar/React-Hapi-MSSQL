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
        const { id, name, age, city, salary } = this.state.credentials
        if(!(id && name && age && city && salary)) {
            alert("Enter required field inputs")
        } else {
            this.props.addEmployee(this.state.credentials)
            alert('Employee added successfully!')
            this.setState({ success : true })
        }
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

