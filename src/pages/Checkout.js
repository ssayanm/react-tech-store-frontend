import React, { useContext, useState } from "react";
import { CartContext } from "../context/cart";
import { UserContext } from "../context/user";
import { useHistory } from "react-router-dom";
import EmptyCart from "../components/Cart/EmptyCart";
//import react-stripe-elements from "reac"
import submitOrder from "../strapi/submitOrder";

const Checkout = (props) => {
  const { cart, total, clearCart } = useContext(CartContext);
  const { user, alert, showAlert, hideAlert } = useContext(UserContext);
  const history = useHistory();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const isEmpty = !name || alert.show;

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  if (cart.length < 1) return <EmptyCart />;
  return (
    <section className="section form">
      <h2 className="section-title">checkout</h2>
      <form className="checkout-form">
        <h3>
          order total: <span>${total}</span>
        </h3>

        <div className="form-control">
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="stripe-info">
          <label htmlFor="card-element">Credit or Debit Card</label>
          <p className="stripe-info">
            Test using credit card: <span>4242 42424 4242 4242</span>
            <br />
            enter any 5 digits for zip code
            <br />
            enter any 3 digits for cvc
          </p>
        </div>
        {error && <p className="form-empty">{error}</p>}
        {isEmpty ? (
          <p className="form-empty">please fill out name field</p>
        ) : (
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary btn-block"
          >
            submit{" "}
          </button>
        )}
      </form>
    </section>
  );
};

export default Checkout;
