import React, { Component } from "react";
import { validate } from "../../shared/validation/validate";
import { InputField } from "../../shared/interface/employee.interface";
import { connect } from "react-redux";
// import addEmployee from "../../store/logic/add-employee";

import { Dispatch } from "redux";
import AddEmployee from "../../components/employee/add-employee";
import EmployeeAction from "../../store/action/employee_action";
import addEmployeeApiLogic from "../../store/logic/add-employee";
import { store } from "../../store/store";

interface State {
    credentials: InputField
    // addEmployee: (credentials: any) => void
}

// const { addEmployee } = EmployeeAction()

class AddEmployeeClass extends Component<any, State> {
    
    constructor(props:any) {
        super(props) 
        
        this.state = {
          credentials:  { id:0, name:'', age:0, city:'', salary:0 }            
        }

        this.handleChange = this.handleChange.bind(this)
        this.addHandler = this.addHandler.bind(this)
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        console.log("inside handlechange")
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
        this.setState(() => validate(this.state.credentials)) 
        // this.props.addEmployee(this.state.credentials)
        addEmployeeApiLogic(this.state.credentials)
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

    return {
        employee: state.employeeData.employee
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => { 
    
    return {
        addEmployee: (credentials: InputField) => dispatch(addEmployee(credentials))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(AddEmployeeClass)

