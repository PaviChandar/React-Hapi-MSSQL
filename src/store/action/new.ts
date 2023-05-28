import { InputField } from "../../shared/interface/employee.interface";

export const myfunction = (employee: InputField) => {

    return ({ type: 'POST_EMP', payload: employee })
}