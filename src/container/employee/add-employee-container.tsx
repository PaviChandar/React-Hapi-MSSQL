import React, { Component } from "react";
import { validate } from "../../shared/validation/validate";
import { InputField } from "../../shared/interface/employee.interface";
import { connect } from "react-redux";
import addEmployee from "../../store/logic/add-employee";

import { Dispatch } from "redux";
import AddEmployee from "../../components/employee/add-employee";
import EmployeeContainer from "../../store/action/employee_action";
// import addEmployee from "../../container/handler/add";

interface State {
    credentials: InputField
}

class AddEmployeeClass extends Component<{}, State> {
    
    constructor(props:any) {
        super(props) 
        
        this.state = {
          credentials:  { id:0, name:'', age:0, city:'', salary:0 }            
        }

        this.handleChange = this.handleChange.bind(this)
        this.addHandler = this.addHandler.bind(this)
        console.log("state in class", this.state)
        console.log("props in class", props)
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        console.log("inside handlechange")
        e.preventDefault()
        const { name, value } = e.target
        console.log("e target name : ", e.target.name)
        console.log("e target val : ", e.target.value)
        this.setState((prev) => ({ 
            credentials: {
                ...prev.credentials,
                [name] : value
            }
        }))
    }

    addHandler = () => {
        console.log("props in add : ", this.props)
        console.log("inside add handler")
        console.log("emp data input : ", this.state.credentials)
        this.setState(() => validate(this.state.credentials))
        // this.props.addEmployee(this.state.credentials)
        addEmployee(this.state.credentials)
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
    console.log("inside mapstprops", state)

    return {
        employee: state.employeeData.employee
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => { //wrong
    console.log("inside mapdispatch")
    return {
        addEmployee: (credentials: InputField) => dispatch(addEmployee(credentials))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(AddEmployeeClass)

// const mapDispatchToProps = (dispatch: Dispatch): any => {
    // console.log("inside mapdispatch : ", typeof Dispatch)
//     return bindActionCreators({ addEmployee }, dispatch)
// }

// const mapDispatchToProps = (dispatch: Dispatch<'POST_EMP'>): ComponentProps => {
    // console.log("inside mapdispatch : ", typeof Dispatch)
//     return {
        // dispatchAction: () => dispatchEvent(addEmployee())
// }
// }

// export default connect (mapStateToProps, mapDispatchToProps)(AddEmployeeClass)
