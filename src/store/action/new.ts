import { Employee, IEmployeeContainer, InputField } from "../../shared/interface/employee.interface";
import { UserInputField } from "../../shared/interface/user.interface";
import { store } from "../store";

export const addddd = (employee: InputField): any => {
    console.log("inside adddddd new file ")
    store.dispatch({
        type: 'POST_EMP',
        payload: employee
    })
}