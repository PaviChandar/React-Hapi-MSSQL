import { InputField } from "../../shared/interface/employee.interface";

export const addEmployee = (employee: InputField) => {

    return ({ type: 'POST_EMP', payload: employee })
}