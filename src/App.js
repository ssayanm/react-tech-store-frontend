import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

import Header from "./components/Header";
import Alert from "./components/Alert";

const App = () => {
  return (
    <Router>
      <Header />
      <Alert />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductDetails} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
