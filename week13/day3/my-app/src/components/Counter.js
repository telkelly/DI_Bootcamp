import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(count);
    },[])
    const add = () => {
        setCount(count+1)
    }
  return (
    <>
      <h2>Counter</h2>
      <button onClick={add}>+</button>
      {count}
          <button onClick={() => {
              setCount(count-1)
      }}>-</button>
    </>
  );
};

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//     componentWillUnmount = () => {
//         alert('dontttt')
//     }

//   add = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   notAdd = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     return (
//       <>
//         <h2>Counter Class</h2>
//         <h3>{this.state.count}</h3>
//         <button onClick={this.add}>+</button>
//         <button onClick={this.notAdd}>-</button>
//         <h2>{this.props.title}</h2>

//       </>
//     );
//   }
// }

export default Counter;
