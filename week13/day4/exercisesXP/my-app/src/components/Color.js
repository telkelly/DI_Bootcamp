import { Component } from "react";

class Color extends Component {
  constructor() {
    super();
    this.state = {
      favoriteColor: "red",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        favoriteColor: "yellow",
      });
    }, 5000);
  }
    changeColor = () => {
      this.setState({favoriteColor: 'blue'})
  }
  render() {
    return (
      <>
        <hr /> Exercise-4 <br />
        <h1>
          My Favorite Color is <i>{this.state.favoriteColor}</i>
        </h1>
        <button onClick={this.changeColor}>Change color</button>
      </>
    );
  }
}

export default Color