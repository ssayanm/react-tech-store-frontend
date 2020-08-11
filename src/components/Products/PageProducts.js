import React, { useContext } from "react";
import ProductList from "./ProductList";
import { ProductContext } from "../../context/products";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const PageProducts = () => {
  const { sorted, page, changePage } = useContext(ProductContext);
  if (sorted[page]) {
    return (
      <React.Fragment>
        <ProductList products={sorted[page]} />;
        {sorted.length > 1 && (
          <article className="pagination-buttons">
            {page > 0 && (
              <button
                className="prev-page-btn"
                onClick={() => changePage(page - 1)}
              >
                <FaAngleDoubleLeft />
              </button>
            )}

            {sorted.map((_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    changePage(index);
                  }}
                  className={`page-btn ${page === index && `page-btn-current`}`}
                >
                  {index + 1}
                </button>
              );
            })}
            {page < sorted.length - 1 && (
              <button
                className="prev-page-btn"
                onClick={() => changePage(page + 1)}
              >
                <FaAngleDoubleRight />
              </button>
            )}
          </article>
        )}
      </React.Fragment>
    );
  } else {
    return (
      <h3 className="search-errors">
        sorry, no search results for your search query
      </h3>
    );
  }
};

export default PageProducts;
