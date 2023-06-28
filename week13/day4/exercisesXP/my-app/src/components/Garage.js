import { Component } from "react";

class Garage extends Component {
    render() {
        const { size } = this.props;
    return (
      <>
            <h2>Who lives in in my {size} Garage?</h2>
      </>
    );
  }
}

export default Garage;