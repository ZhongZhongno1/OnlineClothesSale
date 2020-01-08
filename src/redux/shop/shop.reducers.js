import shopTypes from "./shop.types";

const INIT_STATE = {
  collections: null,
  isLoading: false
};

const shopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case shopTypes.SHOP_FETCH_COLLECTIONS_START:
      return {
        ...state,
        isLoading: true
      };
    case shopTypes.SHOP_FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};


export default shopReducer;