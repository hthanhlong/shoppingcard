import GET_DATA from "../constants";

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case "FILTER_PRODUCTS":
      return { ...state, filterproducts: action.payload.items };
    case "GET_DATA":
      return { items: action.payload };
    default:
      return state;
  }
};
