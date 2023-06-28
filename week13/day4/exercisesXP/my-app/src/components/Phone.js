import { Component } from "react";

class Phone extends Component {
  constructor() {
    super();
    this.state = {
      brand: "Samsung",
      model: "Galaxy S20",
      color: "black",
      year: 2020,
    };
  }
  changeColor = () => {
    this.setState((prevState) => ({
      color: prevState.color === "black" ? "red" : "blue"
    }));
  };

  render() {
    return (
      <>
        <h1>My phone is a {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}
        </p>
        <button onClick={this.changeColor}>Change color</button>
      </>
    );
  }
}

export default Phone;
