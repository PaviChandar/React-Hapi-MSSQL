import { Component } from "react";

class ControlledClassComponent extends Component<any, any> {
    constructor(props: {}) {
      super(props);
      this.state = {
        value: ''
      }
  
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
      this.setState({value: e.target.value});
    }
  
    handleSubmit(e: any) {
      e.preventDefault()
      alert('Hi, ' + this.state.value)
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default ControlledClassComponent