import { Dispatch, Action } from "redux"
import AddEmployee from "../../components/employee/addemployee"

import { validate } from "../../components/shared/validate"
import { InputField } from "../../interface/employee.interface"
import { addEmployeeApi } from "../../redux/action/logic/addemployee"


const AddEmployeeContainer = () => {

    const addHandler = (dispatchStore: Dispatch<Action>, setFormError: (arg0: () => any) => void, formError: {}, setSubmit: (arg0: boolean) => void, submit: any, credentials: InputField, setSuccess: (arg0: boolean) => void) => {
        console.log("inside add handleer")
        setFormError(() => validate(credentials))
        setSubmit(true)
        if(Object.keys(formError).length === 0 && submit) { 
            console.log("credentials : ", credentials)
            // dispatchStore(addEmployee(credentials))
            dispatchStore(addEmployeeApi)
            setSuccess(true)
        }
    }
    return <AddEmployee addHandler={addHandler} />
}

export default AddEmployeeContainer
