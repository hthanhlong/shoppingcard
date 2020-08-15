import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducer/productreducer";
import { cartReducer } from "./reducer/cartreducer";
import { tokenReducer } from "./reducer/tokenreducer";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    products: productReducer,
    cart: cartReducer,
    token: tokenReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
