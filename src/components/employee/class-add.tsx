import React, { Component } from "react";
import { validate } from "../../shared/validation/validate";
import { InputField } from "../../shared/interface/employee.interface";
import { t } from "i18next";
import { connect } from "react-redux";
import Add from "../../container/handler/add";
import addEmployee from "../../store/logic/add-employee";
import { bindActionCreators, Dispatch } from "redux";
import EmployeeContainer from "../../container/employee/employee_container";
import AddEmployee from "./add-employee";

// const { addEmployee } = EmployeeContainer()

interface State {
    credentials: InputField
}

interface ComponentProps {
    dispatchAction: () => void
}

class AddEmployeeClass extends Component<{}, State> {
    
    constructor(props:any) {
        super(props) 
        console.log("props in class", props)
        this.state = {
          credentials:  { id:0, name:'', age:0, city:'', salary:0 }            
        }

        this.handleChange = this.handleChange.bind(this)
        this.addHandler = this.addHandler.bind(this)
        console.log("state in class", this.state)
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        console.log("inside handlechange")
        e.preventDefault()
        const { name, value } = e.target
        console.log("e target name : ", e.target.name)
        console.log("e target val : ", e.target.value)
        this.setState( (prev) => ({ 
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
        addEmployee(this.state.credentials)
    }

    render() {
        const { id, name, age, city, salary }: any = this.state.credentials
        console.log("inside render : ", this.state.credentials)

        return(
            <div>
                {/* <h2>Create New Employee</h2>
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
                    </div> */}
                    {/* <button onClick={this.addHandler}>{t("add")}</button> */}

                    <AddEmployee addHandler = {this.addHandler} handleChange ={this.handleChange} someState={this.state.credentials} />
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    console.log("inside mapstprops", state)
    return {
        employee: state.employeeData.employee,
        credentials: state.credentials
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    console.log("inside mapdispatch : ")
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
