import { createContext, useState, useRef } from "react";
import "./App.css";
import Counter from "./components/Counter";
import MathCalculate from "./components/MathCalculate";

export const AppContext = createContext();

const App = (props) => {
  const nameInput = useRef()
  const [count, setCount] = useState(0);

  const name = useRef()

  const handleClick = () => {
    name.current = nameInput.current.value;
  }
  return (
    // <AppContext.Provider value={{count, setCount}}>
    //   <div className="App">
    //     <Counter />
    //     <input type="text" ref={nameInput} />
    //     <button onClick={handleClick}>Click input</button>
    //   </div>
    // </AppContext.Provider>
    <MathCalculate/>
  );
};

export default App;
