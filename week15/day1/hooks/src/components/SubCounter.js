import { useContext } from "react";
import { AppContext } from "../App";
import { CounterContex } from "./Counter";

const SubCounter = (props) => {
  const { count, setCount } = useContext(AppContext);
  const { title } = useContext(CounterContex);
  return (
    <>
      <h2>{title}</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
};

export default SubCounter;
