import "./App.css";
import Car from "./components/Car";

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };
  return <div className="App">
    <Car cars={carinfo}/>
  </div>;
}

export default App;
