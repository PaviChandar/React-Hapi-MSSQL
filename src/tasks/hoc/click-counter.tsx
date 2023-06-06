import { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component<any,any> {

    render() {
        const { count, increment } = this.props
        return (
            <div>
                <button onClick={increment}>Clicked {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 5)