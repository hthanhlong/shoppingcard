export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case "SORTED_PRODUCTS":
      return {
        ...state,
        filterproducts: action.payload.items,
        sort: action.payload.sort,
      };
    case "FILTER_PRODUCTS":
      return {
        ...state,
        filterproducts: action.payload.items,
        size: action.payload.size,
      };
    case "GET_DATA":
      return { items: action.payload, filterproducts: action.payload };
    default:
      return state;
  }
};
