import { Component } from "react";
import { MyContext } from "./context";

export class MyComponent extends Component {
    
    static contextType = MyContext;
    context!: React.ContextType<typeof MyContext>;
    
    render() {

        const { message, updateMessage } = this.context

        return (
            <div>
                <p>{message}</p>
                <button onClick={() => updateMessage('Updated message')} >Update</button>
            </div>
        )
    }
}