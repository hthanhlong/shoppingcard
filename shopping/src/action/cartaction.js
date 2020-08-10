import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";

export const addToCart = (product) => (dispatch, getState) => {
  console.log(product);
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((x) => {
    if (x.id === product.id) {
      x.count++;
      alreadyExists = true;
    }
  }); // thoat vong lap for

  /// chu y vong lap for,
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }

  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x.id !== product.id); // nho clone array
  dispatch({
    type: REMOVE_FROM_CART,
    payload: cartItems,
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

// export const addToCart = (initCartItems, product) => (dispatch) => {
//   const cartItems = initCartItems.slice();
//   let alreadyExists = false; // trang thai cua 1 product
//   cartItems.forEach((x) => {
//     if (x.id === product.id) {
//       x.count++;
//       alreadyExists = true;
//     }
//     cartItems.push({ ...product, count: 1 }); // push object chu y ngoac {}
//   });
//   dispatch({
//     type: ADD_TO_CART,
//     payload: { cartItems },
//   });
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));
// };

// export const removeFromCart = (items, product) => (dispatch) => {
//   const cartItems = items.slice().filter((x) => x.id !== product.id);

//   dispatch({
//     type: REMOVE_FROM_CART,
//     payload: cartItems,
//   });
//   localStorage.setItem(JSON.stringify(cartItems));
// };
