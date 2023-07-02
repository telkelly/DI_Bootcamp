import { useReducer } from "react";

const initState = {
  result: 0,
};

const reducerCalculator = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, result: state.result + 1 };
    case "MUNIS":
      return { ...state, result: state.result - 1 };
    case "MILTIPLY":
      return { ...state, result: state.result * 2 };
    case "DIVIDE":
      return { ...state, result: state.result / 2 };
    default:
      return { ...state };
  }
};

const MathCalculate = (props) => {
  const [state, dispatch] = useReducer(reducerCalculator, initState);
  return (
    <>
      <h2>Simple Calcualtor</h2>
      <h4>Result: {state.result}</h4>
      <button onClick={() => dispatch({ type: "ADD" })}>Add 1</button>
      <button onClick={() => dispatch({ type: "MUNIS" })}>Minus 1</button>
      <button onClick={() => dispatch({ type: "DIVIDE" })}>Divide by 2</button>
      <button onClick={() => dispatch({ type: "MILTIPLY" })}>
        Multiple by 2
      </button>
    </>
  );
};

export default MathCalculate;
