import { InputField } from "../../interface/employee.interface"
import { UserInputField } from "../../interface/user.interface"

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

export const validateUser = (value: UserInputField) => {
    const errors: any = {}

    if(!value.email) {
        errors.email = '*User Email is required'
    }

    if(!value.password) {
        errors.password = '*User Password is required'
    }

    return errors
}