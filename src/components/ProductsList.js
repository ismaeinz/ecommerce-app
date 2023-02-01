import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const apiUrl = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2 className="text-center p-3">Our products</h2>
      <div className="row"></div>
      {products.map((prod) => (
        <div className="col-3" key={prod.id}>
          <Product prod={prod} />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
