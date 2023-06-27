import Products from "./components/Products";
import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/product/:id" element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
