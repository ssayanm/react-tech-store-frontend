import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Link to="/products" className="btn btn-primary btn-hero">
          Our Products
        </Link>
      </Hero>
    </React.Fragment>
  );
};

export default Home;
