import { Button } from "antd"
import React from "react"
import { connect } from "react-redux"
// import addEmployee from "../../store/logic/add-employee"
import EmployeeContainer from "../employee/employee_container"

// const { addEmployee } =  EmployeeContainer()

class Add extends React.Component<any, any> {
    addEmployee: any
    
    addHandler() {
        console.log("inside add add handler ")
        // this.addEmployee()
    }

    render() {
        console.log("inside render of add")
        return <Button onClick={() => this.addHandler()}> Addddd </Button>
    }
}

export default connect(null, {  }) (Add)