import axios from "axios";
import { GET_DATA, FILTER_PRODUCTS, SORTED_PRODUCTS } from "../constants";

export const FetchData = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8000/api/product/");
  dispatch({ type: GET_DATA, payload: res.data });
};

export const filterProduct = (products, size) => async (dispatch) => {
  await dispatch({
    type: FILTER_PRODUCTS,
    payload: {
      size: size,
      items:
        size === "ALL"
          ? products
          : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
    },
  });
};

// export const sortProducts = (filterProduct, sort) => (dispatch, getState) => {
//   const sortedproducts = getState().products.filterProduct.slice();

//   dispatch({
//     type: SORTED_PRODUCTS,
//     payload: {
//       sort: sort,
//       items: sortedproducts,
//     },
//   });
// };
