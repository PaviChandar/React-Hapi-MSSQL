import { Component } from "react";
import { UserConsumer } from "./user-context";

export class MyComponent extends Component<any, any> {
    render() {
        return (
            <UserConsumer>
                {(props) => {
                    return <div>Hi, {props.name}</div>
                }}
            </UserConsumer>
        )
    }
}