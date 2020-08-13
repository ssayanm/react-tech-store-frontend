import React from "react";
import Product from "./Product";

const ProductList = ({ title, products }) => {
  return (
    <section className="products-section">
      <div className="products-center">
        {products.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;
