export interface InputField {
    id: number,
    name: string,
    age: number,
    city: string,
    salary: number
}

export interface EmployeeState {
    employee?: InputField;
    employees?: Array<InputField>;
}

export interface Employee {
    employeeData: any;
    type: string,
    payload: InputField
}

export interface Employees {
    employeeData: any;
    type: string,            
    payload: InputField[]
}

export interface IEmployeeContainer {
    addEmployee: (credentials: InputField) => any
}

export type EmployeeActionType = Employee & Employees