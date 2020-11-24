import React from "react";

const Product = (props) => {
  const { product } = props;
  return (
    <>
      <div className="card col-md-3 product-card">
        <img src={product.src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.price}$</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-warning btn-block text-white">add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Product;
