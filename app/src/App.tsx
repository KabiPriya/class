import React, { Component } from "react";
import Components from "./Components";
interface AppState {
  firstName: string;
  lastName: string;
  age: string;
}
class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
    };
  }
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log(this.state);
  };
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as Pick<
      AppState,
      keyof AppState
    >);
  };
  render() {
    const { Button, Input } = Components; 
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
          <Input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
          <Input
            type="text"
            placeholder="Age"
            name="age"
            value={this.state.age}
            onChange={this.handleInputChange}
          />
          <Button label="Submit" />
        </form>
      </div>
    );
  }
}
export default App;