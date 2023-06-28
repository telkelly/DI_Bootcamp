import { Component } from "react";

class Car extends Component {
    constructor() {
        super();
        this.state = {
            color: 'orange',
        }
    }
    render() {
        const { cars } = this.props;
        const { color } = this.state;
    return (
      <>
         Exercise: 1 <br />
        <h1>
          This car is {color} {cars.model}
        </h1>
      </>
    );
  }
}

export default Car;
