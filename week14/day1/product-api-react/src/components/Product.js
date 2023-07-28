import { useState,useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Product = (props) => {
    const [productData, setProductData] = useState();
    const params = useParams();

    useEffect(() => {
        getProductInfo()
    })

    const getProductInfo = async () => {
        try{
            const res = await fetch(`http://localhost:3030/api/products/${params.id}`);
            const data = await res.json();
            setProductData(data);
        } catch {
            
        }
    };

    return (
      <div>
        <h1>Product</h1>
        {productData ? (
          productData.map((item) => {
            return (
              <div>
                <h2>{item.name}</h2>
              </div>
            );
          })
        ) : (
          <h1>no</h1>
        )}
      </div>
    );
}

export default Product;