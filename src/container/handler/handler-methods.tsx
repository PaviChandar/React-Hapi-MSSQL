//@ts-nocheck

// import { validate } from "../../shared/validation/validate"
// import { InputField } from "../../shared/interface/employee.interface"
// import EmployeeContainer from "../employee/employee_container"

import { connect } from 'react-redux'
import React, { Component } from "react"
import { InputField } from "../../shared/interface/employee.interface"
import { validate } from "../../shared/validation/validate"
import EmployeeContainer from "../employee/employee_container"
import { bindActionCreators } from 'redux';
// import { Dispatch, AnyAction } from '@reduxjs/toolkit'

// import { connect } from "react-redux"
// import React from "react"
// import { Button } from "antd"

// const { deleteEmployee, updateEmployee, addEmployee } = EmployeeContainer()

// class HandleMethod extends React.Component{

//     constructor(props: any) {
//         super(props)

//         // this.deleteHandler = this.deleteHandler
//         // this.addHandler = this.addHandler
//         // this.updateHandler = this.updateHandler

//         this.state = {
//             success: false
//         }
//     }
    
//     addHandler: any = ( setFormError: (arg0: () => any) => void, formError: {}, setSubmit: (arg0: boolean) => void, submit: any, credentials: InputField, setSuccess: (arg0: boolean) => void) => {
//         console.log("inside add handleer")
//         setFormError(() => validate(credentials))
//         setSubmit(true)
//         if(Object.keys(formError).length === 0 && submit) { 
//            console.log("credentials : ", credentials)
//            addEmployee(credentials)
//            setSuccess(true)
//         }
//    }

//     deleteHandler: any = (id: number, setSuccess: (arg0: boolean) => void) => {
//         console.log("inside delete", id)
//         deleteEmployee(id)
//         // deleteEmployee(id)
//         if(window.confirm("Are you sure that you want to delete the Employee?")) {
//            setSuccess(true)
//         }
//     }

//     updateHandler: any = (formError: {},setFormError: (arg0: () => any) => void, submit: any, setSubmit: (arg0: boolean) => void,credentials: InputField, id: any, setSuccess: (arg0: boolean) => void) => {
//         console.log("update handle : ", credentials)
//         console.log("id in update : ", id)
//         setFormError(() => validate(credentials))
//         setSubmit(true)
//         if (Object.keys(formError).length === 0 && submit) {
//            console.log("inside if", credentials)
//            console.log("inside if id", id)
//            updateEmployee(credentials)
//            setSuccess(true)
//         }
//     }

//     render() {
//         return (
//            <div>
//              <Button onClick={() => this.addHandler()} ></Button>
//              <Button onClick={() => this.deleteHandler()} ></Button>
//              <Button onClick={() => this.updateHandler()} ></Button>
//            </div>
//         )
//     }

// }

// const mapStateToProps = (state: any) => {
//     console.log("state : ", state)
// }

// const mapDispatchToProps = (dispatch: (arg0: void) => any) => {
//     return {
//         deleteEmployee: (id: number) => dispatch(deleteEmployee(id)),
//         addEmployee: (credentials: InputField) => dispatch(addEmployee(credentials)),
//         updateEmployee: (credentials: InputField) => dispatch(updateEmployee(credentials))
//     }
// }

// export default connect(mapDispatchToProps, mapStateToProps) (HandleMethod)



const { addEmployee } = EmployeeContainer()

import { Dispatch } from "react"
import ts from 'typescript'

type MyDispatch = Dispatch<any>

class Addd  {

    constructor(props){
        super(props)
        this.addHandler = this.addHandler
    }

    // myFunc = (credentials: InputField) => {
    //     console.log("in");
        
    //     const {addEmployee} = EmployeeContainer()

    //     return addEmployee(credentials)
    // }

    addHandler = ( setFormError: (arg0: () => any) => void, formError: {}, setSubmit: (arg0: boolean) => void, submit: any, credentials: InputField, setSuccess: (arg0: boolean) => void) => {
        console.log("inside add handleer")
        const dispatch = this.props

        setFormError(() => validate(credentials))
        setSubmit(true)
        if(Object.keys(formError).length === 0 && submit) { 
           console.log("credentials : ", credentials)
           dispatch(addEmployee(credentials))
           setSuccess(true)
        }
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): any => {
//     return bindActionCreators({ addEmployee }, dispatch)
// }

export default Addd

// export const addHandler = ( setFormError: (arg0: () => any) => void, formError: {}, setSubmit: (arg0: boolean) => void, submit: any, credentials: InputField, setSuccess: (arg0: boolean) => void) => {
//     console.log("inside add handleer")
//     setFormError(() => validate(credentials))
//     setSubmit(true)
//     if(Object.keys(formError).length === 0 && submit) { 
//        console.log("credentials : ", credentials)
//        addEmployee(credentials)
//        setSuccess(true)
//     }
// }

// export const deleteHandler = (id: number, setSuccess: (arg0: boolean) => void) => {
//     console.log("inside delete", id)
//     deleteEmployee(id)
//     if(window.confirm("Are you sure that you want to delete the Employee?")) {
//        setSuccess(true)
//     }
// }

// export const updateHandler = (formError: {},setFormError: (arg0: () => any) => void, submit: any, setSubmit: (arg0: boolean) => void,credentials: InputField, id: any, setSuccess: (arg0: boolean) => void) => {
//     console.log("update handle : ", credentials)
//     console.log("id in update : ", id)
//     setFormError(() => validate(credentials))
//     setSubmit(true)
//     if (Object.keys(formError).length === 0 && submit) {
//        console.log("inside if", credentials)
//        console.log("inside if id", id)
//        updateEmployee(credentials)
//        updateEmployee(credentials)
//        setSuccess(true)
//     }
// }