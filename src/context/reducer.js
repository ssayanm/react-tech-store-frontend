import {
  REMOVE_ITEM_FROM_CART,
  INCREASE_ITEM_FROM_CART,
  DECREASE_ITEM_FROM_CART,
  ADD_ITEM_TO_CART,
  CLEAR_ITEM_FROM_CART,
} from "./actions";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const { id, image, title, price } = action.payload;
      let product = { id, image, title, price, amount: 1 };
      return [...state, product];

    case REMOVE_ITEM_FROM_CART:
      return state.filter((item) => item.id !== action.payload);

    case INCREASE_ITEM_FROM_CART:
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : { ...item };
      });

    case DECREASE_ITEM_FROM_CART:
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, amount: item.amount - 1 }
          : { ...item };
      });

    case CLEAR_ITEM_FROM_CART:
      return [];

    default:
      return state;
  }
};
