import cartType from "./cart.types";
import { addItemToCart, removeItemToCart } from "./cart.utils";

const INIT_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducers = (state = INIT_STATE, action) => {
  switch (action.type) {
    case cartType.TOGGLE_CART_HIDEEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartType.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case cartType.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemToCart(state.cartItems, action.payload)
      };
    case cartType.CLEAR_GROUP_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};

export default cartReducers;
