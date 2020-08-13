import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import HomeIntro from "../components/HomeIntro";
import FeaturedProducts from "../components/Products/FeaturedProducts";

const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Link to="/products" className="btn btn-primary btn-hero">
          Our Products
        </Link>
      </Hero>
      <HomeIntro />
      <FeaturedProducts />
    </React.Fragment>
  );
};

export default Home;
