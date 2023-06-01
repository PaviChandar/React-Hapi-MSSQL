import { Component } from "react";

const withCounter = (WrappedComponent: any, incrementNumber: number) => {
    class WithCounter extends Component<any, any> {

        constructor(props: {}) {
            super(props)
    
            this.state= {
                count: 0
            }
        }
    
        increment = () => {
            this.setState((prev: any) => {
                return { count: prev.count + incrementNumber }
            })
        }

        render() {
            return <WrappedComponent count={this.state.count} increment={this.increment} 
            // {...this.props}
            />
        }
    }

    return WithCounter
}

export default withCounter