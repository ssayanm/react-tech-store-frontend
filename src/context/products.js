import React, { useEffect, useLayoutEffect, createContext } from "react";
import axios from "axios";
import url from "../utils/URL";
import { featuredProducts, flattenProducts, paginate } from "../utils/helpers";
export const ProductContext = createContext();

const urlapi = "http://localhost:5000";

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [myproducts, setMyProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  // extra state values
  const [sorted, setSorted] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [filters, setFilters] = React.useState({
    search: "",
    category: "all",
    shipping: false,
    price: "all",
  });

  const changePage = (index) => {
    setPage(index);
  };

  const updateFilters = (e) => {
    const type = e.target.type;
    const filter = e.target.name;
    const value = e.target.value;
    let filterValue;
    if (type === "checkbox") {
      filterValue = e.target.checked;
    } else if (type === "radio") {
      value === "all" ? (filterValue = value) : (filterValue = parseInt(value));
    } else {
      filterValue = value;
    }
    setFilters({ ...filters, [filter]: filterValue });
  };

  useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then((response) => {
      const featured = featuredProducts(flattenProducts(response.data));
      const products = flattenProducts(response.data);
      setProducts(products);
      setSorted(paginate(products));
      setFeatured(featured);
      setLoading(false);
    });

    // axios.get(`${urlapi}/api/products`).then((response) => {
    //   const products = flattenProducts(response.data);
    //   setMyProducts(products);

    //   setLoading(false);
    // });

    axios.get(`${urlapi}/api/products`, {}).then((response) => {
      const products = response.data;
      console.log(products);
      setMyProducts(products);

      setLoading(false);
    });

    return () => {};
  }, []);

  useLayoutEffect(() => {
    let newProducts = [...products].sort((a, b) => a.price - b.price);
    const { search, category, shipping, price } = filters;
    //
    if (category !== "all") {
      newProducts = newProducts.filter((item) => item.category === category);
    }
    if (shipping !== false) {
      newProducts = newProducts.filter(
        (item) => item.free_shipping === shipping
      );
    }
    if (price !== "all") {
      newProducts = newProducts.filter((item) => {
        if (price === 0) {
          return item.price < 100;
        } else if (price === 100) {
          return item.price > 100 && item.price < 200;
        } else {
          return item.price >= 200;
        }
      });
    }

    if (search !== "") {
      newProducts = newProducts.filter((item) => {
        let title = item.title.toLowerCase().trim();
        return title.startsWith(search) ? item : null;
      });
    }
    setPage(0);
    setSorted(paginate(newProducts));
  }, [filters, products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        myproducts,
        loading,
        featured,
        sorted,
        page,
        changePage,
        filters,
        updateFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
