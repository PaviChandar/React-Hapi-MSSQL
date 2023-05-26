import { useDispatch } from "react-redux";
import { Employee, IEmployeeContainer, InputField } from "../../shared/interface/employee.interface";
import { UserInputField } from "../../shared/interface/user.interface";
import { store } from "../store";

export const myfunction = (employee: InputField) => {

    return store.dispatch({ type: 'POST_EMP', payload: employee })
}