import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    useEffect(()=> {
        allProducts()
    },[])
    const allProducts = async () => {
        try {
            const response = await fetch(`http://localhost:3030/api/products`)
            const data = await response.json();
            setProducts(data)
        } catch (e){
            console.log(e);
        }
    }

    const searchProducts = async () => {
         try {
           const response = await fetch(`http://localhost:3030/api/search?name=${search}`);
           const data = await response.json();
           setProducts(data);
         } catch (e) {
           console.log(e);
         }
    }

    const addProduct = (e) => {
        e.preventDefault();
        const fetchData = async () => {
            try {
                const response = await fetch(
                  `http://localhost:3030/api/products`,
                  {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify({ name, price }),
                  }
                );
              const data = await response.json();
              setProducts(data);
            } catch (e) {
              console.log(e);
            }
        }
        fetchData()
        
    }
    return (
      <div>
        <h1>Shop</h1>
        <div>
          <input onChange={(e) => setSearch(e.target.value)}></input>
          <button onClick={searchProducts}>Search</button>
        </div>
        <form onSubmit={addProduct}>
          Name: <input name="name" onChange={(e) => setName(e.target.value)} />
          Price: <input price="price" onChange={(e) => setPrice(e.target.value)} />
          <input type="submit" value={"Add"} />
        </form>
        {products
          ? products.map((item) => {
              return (
                <div
                  style={{
                    display: "inline-block",
                    padding: "20px",
                    margin: "20px",
                    border: "1px solid grey",
                  }}
                  key={item.id}
                >
                  <h3>{item.name}</h3> <p>{item.price}</p>
                  <Link to={`/product/${item.id}`}>Shop now</Link>
                </div>
              );
            })
          : null}
      </div>
    );
}

export default Products