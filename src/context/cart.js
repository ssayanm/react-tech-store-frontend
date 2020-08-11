import React, { createContext, useReducer, useEffect } from "react";
// import localCart from "../utils/localCart";
import reducer from "./reducer.js";

const getCartFromLocalStorage = () => {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
};

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, getCartFromLocalStorage());
  const [total, setTotal] = useReducer(0);
  const [cartItems, setCartItems] = useReducer(0);

  useEffect(() => {
    // local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    //cart items
    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItems(newCartItems);
    //cart total
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
  }, [cart]);

  //remove item
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: id });
  };
  //increase amount
  const increaseAmount = (id) => {
    dispatch({ type: "INCREASE_ITEM_FROM_CART", payload: id });
  };

  //decrease amount
  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: id });
      return;
    } else {
      dispatch({ type: "DECREASE_ITEM_FROM_CART", payload: id });
    }
  };
  //add to cart
  const addToCart = (product) => {
    let item = [...cart].find((item) => item.id === product.id);
    if (item) {
      dispatch({ type: "INCREASE_ITEM_FROM_CART", payload: product.id });
    } else {
      dispatch({ type: "ADD_ITEM_TO_CART", payload: product });
    }
  };
  //clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_ITEM_FROM_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
