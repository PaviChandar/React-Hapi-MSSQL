import { Dispatch, Action } from "redux"
import { validate } from "../../components/shared/validate"
import { InputField } from "../../interface/employee.interface"
import { addEmployee } from "../../redux/action/action"

export const addHandler = (dispatchStore: Dispatch<Action>, setFormError: (arg0: () => any) => void, formError: {}, setSubmit: (arg0: boolean) => void, submit: any, credentials: InputField, setSuccess: (arg0: boolean) => void) => {
    setFormError(() => validate(credentials))
    setSubmit(true)
    if(Object.keys(formError).length === 0 && submit) {
        dispatchStore(addEmployee(credentials))
        setSuccess(true)
    }

} 
