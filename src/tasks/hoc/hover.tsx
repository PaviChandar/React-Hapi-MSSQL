import { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component<any,any> {

    render() {
        const { count, increment } = this.props
        return (
            <div>
                <h2 onMouseOver={increment} >Hovered {count} times
                </h2>
            </div>
        )
    }
}

export default withCounter(HoverCounter, 2)