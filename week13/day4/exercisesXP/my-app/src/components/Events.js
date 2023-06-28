import { Component } from "react";

class Events extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      isToggleOn: true,
    };
  }
  clickMe = () => {
    alert("I was clicked");
  };
  handleKeyDown = (event) => {
    if (event.key === "Enter")
      alert("the enter key was pressed, your input is: react");
  };
  changeToogle = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };
  render() {
    return (
      <>
        <hr /> Exercise: 2 <br/><button onClick={this.clickMe}>Click</button>
        <input
          placeholder="press the enter key"
          onKeyDown={this.handleKeyDown}
        />
        <button onClick={this.changeToogle}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
      </>
    );
  }
}

export default Events;
