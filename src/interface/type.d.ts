interface InputField {
    id: number,
    name: string,
    age: number,
    city: string,
    salary: number
}

interface UserInputField {
    email: string,
    username?: string,
    password: string
}

interface UserState {
    employee?: InputField;
    employees?: Array<InputField>;
    user?: UserInputField;
    users?: Array<UserInputField>;
    login?: boolean
}

interface Employee {
    employeeData: any;
    type: string,
    payload: InputField
}

interface Employees {
    employeeData: any;
    type: string,            //emp.inter.ts,  action.ts, reducer.ts
    payload: InputField[]
}

interface User {
    userData: any;
    type: string;
    payload: UserInputField
}

interface Users {
    userData: any;
    type: string;
    payload: UserInputField[]
}

export type EmployeeActionType = Employee & Employees
export type UserActionType = User