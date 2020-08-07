import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import FeaturedProducts from "../components/Products/FeaturedProducts";

const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Link to="/products" className="btn btn-primary btn-hero">
          Our Products
        </Link>
      </Hero>
      <FeaturedProducts />
    </React.Fragment>
  );
};

export default Home;
