import { useState,useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Product = (props) => {
    const [productData, setProductData] = useState();
    const params = useParams();

    return (
        <div>
            <h1>Product</h1>
        </div>
    )
}

export default Product;