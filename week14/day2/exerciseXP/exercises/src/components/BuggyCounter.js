import { Component, useState } from "react";

class BuggyCounter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  handleClick = () => {
    this.setState(this.counter + 1);
  };
  componentDidUpdate() {
    if (this.state.counter === 5) {
      throw new Error("I crashed!");
    }
  }
  render() {
    return (
      <div>
        <h1>Buggy Counter</h1>
        <h2 onClick={this.handleClick}>{this.counter}</h2>
      </div>
    );
  }
}

export default BuggyCounter;
