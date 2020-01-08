import cartType from "./cart.types";

export const toggleCartHidden = () => ({
    type: cartType.TOGGLE_CART_HIDEEN
});

export const addItem = item => ({
    type: cartType.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: cartType.REMOVE_ITEM,
    payload: item
});

export const clearGroupItems = item => ({
    type: cartType.CLEAR_GROUP_ITEM,
    payload: item
});