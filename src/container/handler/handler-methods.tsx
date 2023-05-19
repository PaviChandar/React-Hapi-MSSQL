import employeeContainer from "../employee/employee_container"
import { validate } from "../../shared/validation/validate"
import { InputField } from "../../shared/interface/employee.interface"
import useEmployeeContainer from "../employee/employee_container"
import EmployeeContainer from "../employee/employee_container"
import { connect } from "react-redux"
import React from "react"

const { deleteEmployee, updateEmployee } = EmployeeContainer()

class HandleMethod extends React.Component{

    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.deleteHandler = this.deleteHandler
        this.state = {
            success: false
        }
    }

    
        // addHandler = ( setFormError: (arg0: () => any) => void, formError: {}, setSubmit: (arg0: boolean) => void, submit: any, credentials: InputField, setSuccess: (arg0: boolean) => void) => {
   //     console.log("inside add handleer")
   //     setFormError(() => validate(credentials))
   //     setSubmit(true)
   //     if(Object.keys(formError).length === 0 && submit) { 
   //         console.log("credentials : ", credentials)
   //         EmployeeContainer().addEmployee(credentials)
   //         setSuccess(true)
   //     }
   // }

    deleteHandler = (id: number) => {
       console.log("inside delete", id)
       // EmployeeContainer().deleteEmployee(id)
       deleteEmployee(id)
       if(window.confirm("Are you sure that you want to delete the Employee?")) {
           // setSuccess(true)
           return true
       }
   }

   // updateHandler = (formError: {},setFormError: (arg0: () => any) => void, submit: any, setSubmit: (arg0: boolean) => void,credentials: InputField, id: any, setSuccess: (arg0: boolean) => void) => {
   //     console.log("update handle : ", credentials)
   //     console.log("id in update : ", id)
   //     setFormError(() => validate(credentials))
   //     setSubmit(true)
   //     if (Object.keys(formError).length === 0 && submit) {
   //         console.log("inside if", credentials)
   //         console.log("inside if id", id)
   //         EmployeeContainer().updateEmployee(credentials)
   //         updateEmployee(credentials)
   //         setSuccess(true)
   //     }
   // }
   
    
   


}

const mapStateToProps = (state: HandleMethod) => {
    return {
        deleteHandler : state.deleteHandler
    }
}

export default connect(mapStateToProps) (HandleMethod)