import { Dispatch, Action } from "redux"

import { validate } from "../../components/shared/validate"
import { InputField } from "../../interface/employee.interface"
import { updateEmployee } from "../../redux/action/action"

export const updateHandler = (dispatch: Dispatch<Action>, formError: {},setFormError: (arg0: () => any) => void, submit: any, setSubmit: (arg0: boolean) => void,credentials: InputField, id: any, setSuccess: (arg0: boolean) => void) => {
    console.log("update handle : ", credentials)
    console.log("id in update : ", id)
    setFormError(() => validate(credentials))
    setSubmit(true)
    if (Object.keys(formError).length === 0 && submit) {
        console.log("inside if", credentials)
        dispatch(updateEmployee(id, credentials))
        setSuccess(true)
    }
}