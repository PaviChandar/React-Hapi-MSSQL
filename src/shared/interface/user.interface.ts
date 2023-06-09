export interface UserInputField {
    email: string,
    password: string
    username?: string
    message?: string
}

export interface UserState {
    user?: UserInputField;
    users?: Array<UserInputField>
    login?: boolean
    success_message: string
    error_message: string
}

export interface User {
    userData: any;
    type: string;
    payload: UserInputField
}

export interface Users {
    userData: any;
    type: string;
    payload: UserInputField[]
}

export type UserActionType = User