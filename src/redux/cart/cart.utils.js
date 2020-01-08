import { removeItem } from "./cart.actions";

export const addItemToCart = (cartItems, addItem) => {
  const existItem = cartItems.find(cartItem => cartItem.id === addItem.id);
  if (existItem) {
    return cartItems.map(cartItem => {
      if (cartItem.id === addItem.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1
        };
      } else {
        return cartItem;
      }
    });
  }
  return [...cartItems, {...addItem, quantity: 1}];
};

export const removeItemToCart = (cartItems, removeItem) => {

  const existItem = cartItems.find(cartItem => cartItem.id === removeItem.id);

  if (existItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== removeItem.id);
  }

  return cartItems.map(cartItem => {
    if (cartItem.id === removeItem.id) {
      return {
        ...cartItem,
        quantity: cartItem.quantity - 1
      };
    } else {
        return cartItem
    }
  });

};