import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const ProductDeta = () => {
  const apiUrl = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});

  const params = useParams();

  useEffect(() => {
    fetch(`${apiUrl}/${params.productId}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }, [params.productId]);
  return (
    <div>
      <Product prod={product} />
    </div>
  );
};

export default ProductDeta;
