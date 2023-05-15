export interface UserState {
    user?: UserInputField;
    users?: Array<UserInputField>;
    login?: boolean
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

export interface UserInputField {
    email: string,
    password: string
    username?: string
}

export type UserActionType = User