import React, { useContext } from "react";
import { ProductContext } from "../../context/products";

const Filters = () => {
  const {
    filters: { search, category, shipping, price },
    updateFilters,
    sorted,
  } = useContext(ProductContext);
  return (
    <section className="filters-section">
      <h2 className="section-title">search products</h2>
      <form className="filters-form">
        <div>
          <div className="form-group">
            <label htmlFor="search">search term</label>
            <input
              type="text"
              name="search"
              id="search"
              className="form-control"
              value={search}
              onChange={updateFilters}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              className="form-control"
              value={category}
              onChange={updateFilters}
            >
              <option value="all">all</option>
              <option value="phone">phone</option>
              <option value="radio">radio</option>
              <option value="computer">computer</option>
            </select>
          </div>

          <div className="form-group">
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
            <label htmlFor="shipping">free shipping</label>
          </div>
        </div>

        <div className="price-group">
          <p>price</p>
          <label>
            <input
              type="radio"
              name="price"
              value="all"
              checked={price === "all"}
              onChange={updateFilters}
            />
            all
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="0"
              checked={price === 0}
              onChange={updateFilters}
            />
            ₹0 - ₹100
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="100"
              checked={price === 100}
              onChange={updateFilters}
            />
            ₹100 - ₹200
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="200"
              checked={price === 200}
              onChange={updateFilters}
            />
            Over ₹200
          </label>
        </div>
      </form>
      <h6>total products: {sorted.flat().length}</h6>
      <hr />
    </section>
  );
};

export default Filters;
