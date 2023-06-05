import { Component } from "react";
import { MyProvider } from "./context";
import { MyComponent } from "./message";

export class ClassContext extends Component {
    render() {
        return(
            <MyProvider>
                <MyComponent />
            </MyProvider>
        )
    }
}