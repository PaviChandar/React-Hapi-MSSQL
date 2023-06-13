const ageRegex = /^(0?[1-9]|[1-9][0-9]|[1][0-2][0-9]|120)$/
const emailRegex = /^([a-z]+[.-\d]*)@([a-z-]+)\.([a-z-]{2,8})(\.[a-z]{2,8})?$/
const nameRegex = /^[A-Za-z][A-Za-z ]{7,29}$/
const contactRegex = /^[6-9]{1}[0-9]{9}$/
const cityRegex = /^[a-zA-Z ]*$/
const addressRegex = /^[a-zA-Z0-9\s,'-]*$/

export const validate = (values: any) => {

    const errors: any = {}
    if(!values.firstname) {
        errors.firstname = "*Firstname is required"
    } else if (!nameRegex.test(values.firstname)) {
        errors.firstname = "*Name can contain alphabets,space and length should be minimum 4 characters"
    }

    if(!values.lastname) {
        errors.lastname = "*Lastname is required"
    } else if (!nameRegex.test(values.lastname)) {
        errors.lastname = "*Name should contain only alphabets and space"
    }

    if(!values.age) {
        errors.age = "*Age is required"
    } else if (!ageRegex.test(values.age)) {
        errors.age = "*Invalid age"
    }

    if(!values.gender) {
        errors.gender = "*Gender is required"
    }

    if(!values.city) {
        errors.city = "*City is required"
    } else if (!cityRegex.test(values.city)) {
        errors.city = "*City can have only alphabets and space"
    }

    if(!values.email) {
        errors.email = "*Email is required"
    }  else if (!emailRegex.test(values.email)) {
        errors.email = "*Invalid email"
    }

    if(!values.phone) {
        errors.phone = "*Phone number is required"
    }  else if (!contactRegex.test(values.phone)) {
        errors.phone = "*Contact should contain 10 digits and start with 6/7/8/9"
    }

    if(!values.address) {
        errors.address = "*Address is required"
    }  else if (!addressRegex.test(values.address)) {
        errors.address = "*Invalid address"
    }

    return errors
}

export const validateClass = (credentials: any) => {
    console.log("inside val")
    const errors: any = {}

    if(!credentials.firstname) {
        errors.firstname = "Firstname is required"
    } else if (!nameRegex.test(credentials.firstname)) {
        errors.firstname = "*Name can contain alphabets,space and length should be minimum 4 characters"
    }

    if(!credentials.lastname) {
        errors.lastname = "Lastname is required"
    } else if (!nameRegex.test(credentials.lastname)) {
        errors.lastname = "*Name should contain only alphabets and space"
    }

    if(!credentials.email) {
        errors.email = "Email is required"
    }  else if (!emailRegex.test(credentials.email)) {
        errors.email = "*Invalid email"
    }

    if(!credentials.age) {
        errors.age = "Age is required"
    } else if (!ageRegex.test(credentials.age)) {
        errors.age = "*Invalid age"
    }

    if(!credentials.gender) {
        errors.gender = "Gender is required"
    }

    return errors
}