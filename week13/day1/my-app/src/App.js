import "./App.css";
import { useState, useEffect } from "react";
import User from "./components/User";
// import myUsers from "./users.json";
import 'tachyons';


const App = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((res) => {
        setData(res);
      });
  }, [])

  

  return <div className="App">
    {/* <button onClick={() => {
      setData(data)
    }}>Click</button> */}
    <input type="text" onClick={(e) => {
      setInput(console.log(e.target.value))
    }}/>
    {
      data.map((i, idx) => {
        return (
          <User info={i} key={idx} />
        )
      })
    }
  </div>;
}

export default App;
