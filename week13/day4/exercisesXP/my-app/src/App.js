import "./App.css";
import Garage from './components/Garage'
import Car from "./components/Car";
import Events from "./components/Events";
import Phone from "./components/Phone";

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };
  return <div className="App">
    <Car cars={carinfo} />
    <Garage size='big' />
    <Events />
    <Phone />
  </div>;
}

export default App;
