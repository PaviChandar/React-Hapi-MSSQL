interface InputField {
    id: number,
    name: string,
    age: number,
    city: string,
    salary: number
}

interface UserState {
    employee?: InputField;
    employees?: Array<InputField>
}

interface Employee {
    employeeData: any;
    type: string,
    payload: InputField
}

interface Employees {
    employeeData: any;
    type: string,
    payload: InputField[]
}

export type EmployeeActionType = Employee & Employees