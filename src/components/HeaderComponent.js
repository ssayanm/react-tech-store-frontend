import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import CartLink from "./Cart/CartLink";
import { UserContext } from "../context/user";
import LoginLink from "./LoginLink";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={logo} alt="react store logo" className="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          {user.token && (
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          )}

          <LoginLink />
          <CartLink />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
