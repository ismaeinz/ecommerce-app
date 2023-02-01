import React from "react";

const Product = ({ prod }) => {
  return (
    <div className="card">
      <img src={prod.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{prod.title}</h5>
        <p className="card-text">{prod.description}</p>
        <button className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  );
};

export default Product;
