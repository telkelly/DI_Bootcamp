import { useContext, createContext, useState } from "react";
import { AppContext } from "../App";
import SubCounter from "./SubCounter";

export const CounterContex = createContext();

const Counter = (props) => {
  const [title, setTitle] = useState("Hello stranger");
  const { count, setCount } = useContext(AppContext);
  return (
    <>
      <h2>Count</h2>
      <h3>{count}</h3>
      <CounterContex.Provider value={{ title }}>
        <SubCounter />
      </CounterContex.Provider>
    </>
  );
};

export default Counter;
