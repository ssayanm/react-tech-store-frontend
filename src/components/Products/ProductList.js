import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";

const ProductList = ({ title, products }) => {
  return (
    <section className="products-section">
      <h2 className="section-title">{title}</h2>
      <div className="products-center">
        {products.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
      <Link to="/products" className="btn-products">
        Our Products
      </Link>
    </section>
  );
};

export default ProductList;
