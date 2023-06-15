import { Component } from 'react';

class ExampleComponent extends Component<any, any> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log('Component mounted')
  }

  componentDidUpdate( prevState: { count: number }) {
    console.log('Component updated')
    if (prevState.count !== this.state.count) {
      console.log('Count changed:', this.state.count)
    }
  }

  componentWillUnmount() {
    console.log('Component unmounted');
  }

  incrementCount = () => {
    this.setState((prevState: { count: number }) => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  } 

}

export default ExampleComponent
