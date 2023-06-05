import { Component, createContext } from "react"

export interface MyContextType {
    message: string
    updateMessage : (newMessage: string) => void
}

export const MyContext = createContext<MyContextType>({
    message: '',
    updateMessage: () => {}
})


export class MyProvider extends Component<any, {message: string}> {
    constructor(props: {}) {
        super(props);
        this.state = {
            message: 'Hello from context'
        }
    }

    updateMessage = (newMessage: string) => {
        this.setState({ message: newMessage })
    }

    render() {
        return (
            <MyContext.Provider 
                value={{
                    message: this.state.message,
                    updateMessage: this.updateMessage
                }} >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}