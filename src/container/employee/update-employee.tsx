import { Dispatch, Action } from "redux"
import UpdateEmployee from "../../components/employee/update-employee"

import { validate } from "../../shared/validation/validate"
import { InputField } from "../../shared/interface/employee.interface"
// import { updateEmployee } from "../../store/action/action"
import { updateEmployeeApi } from "../../store/api/api-calls"

const UpdateEmployeeContainer = () => {
    const updateHandler = (dispatch: Dispatch<Action>, formError: {},setFormError: (arg0: () => any) => void, submit: any, setSubmit: (arg0: boolean) => void,credentials: InputField, id: any, setSuccess: (arg0: boolean) => void) => {
        console.log("update handle : ", credentials)
        console.log("id in update : ", id)
        setFormError(() => validate(credentials))
        setSubmit(true)
        if (Object.keys(formError).length === 0 && submit) {
            console.log("inside if", credentials)
            dispatch(updateEmployeeApi(id, credentials))
            setSuccess(true)
        }
    }
    
    return <UpdateEmployee updateHandler = {updateHandler} />
}

export default UpdateEmployeeContainer