import { Dispatch, Action } from "redux"

import AddEmployee from "../../components/employee/add-employee"
import { validate } from "../../shared/validation/validate"
import { InputField } from "../../shared/interface/employee.interface"
import { addEmployeeApi } from "../../store/action/logic/add/addemployee"
// import { addEmployeeApi } from "../../store/api/api-calls"


const AddEmployeeContainer = () => {

    const addHandler = (dispatchStore: any, setFormError: (arg0: () => any) => void, formError: {}, setSubmit: (arg0: boolean) => void, submit: any, credentials: InputField, setSuccess: (arg0: boolean) => void) => {
        console.log("inside add handleer")
        setFormError(() => validate(credentials))
        setSubmit(true)
        if(Object.keys(formError).length === 0 && submit) { 
            console.log("credentials : ", credentials)
            // dispatchStore(addEmployeeApi(credentials))
            dispatchStore(addEmployeeApi(credentials))
            setSuccess(true)
        }
    }
    return <AddEmployee addHandler={addHandler} />
}

export default AddEmployeeContainer
