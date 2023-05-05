import { InputField } from "../../interface/employee.interface"

export const validate = (value: InputField) => {
    const errors: any = {}

    if(!value.id) {
        errors.id = "*Employee ID is required"
    }
    if(!value.name) {
        errors.name = "*Employee name is required"
    }
    if(!value.age) {
        errors.age = "*Employee age is required"
    }
    if(!value.city) {
        errors.city = "*Employee city is required"
    }
    if(!value.salary) {
        errors.salary = "*Employee salary is required"
    }

    return errors
}