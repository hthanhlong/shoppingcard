import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/header/Navbar";
import Products from "./Components/products/Products";
import Filter from "./Components/filter/Filter";
import Cart from "./Components/Cart/Cart";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const [products, setProducts] = useState([]);
  const [size, setSize] = useState("");
  const [productsort, setProductsort] = useState("");

  const [cartItem, setCartItem] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  /// Quan ly filter

  /// Quan ly them san pham
  const handleAddToCart = (product) => {
    const newCartItem = [...cartItem]; // clone ra 1 mang mới
    let alreadyInCart = false; // Tạo trang thái cho sanr phảm
    newCartItem.forEach((item) => {
      // lăp qua mảng nếu để xem có sản phẩm trungf hay không
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
      localStorage.setItem("cartItems", JSON.stringify(newCartItem));
    });
    if (!alreadyInCart) {
      // them san pham moi
      newCartItem.push({ ...product, count: 1 });
    }
    setCartItem(newCartItem); /// set gia trị cho mảng
    localStorage.setItem("cartItems", JSON.stringify(newCartItem));
  };

  /// Remove Item in Cart
  const handleRemoveItem = (product) => {
    const cartItems = cartItem.filter((item) => item._id !== product._id);
    setCartItem(cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const handleSubmitform = (order) => {
    alert("Need to order");

    console.log(order);
  };

  return (
    <>
      <CssBaseline />
      <div className="grid-container">
        <header>
          <Navbar />
        </header>
        <main>
          <div className="content">
            <div className="productsarea">
              <Filter />
              <Products products={products} />
            </div>
            <div className="sidebararea">
              <Cart
                cartItem={cartItem}
                handleRemoveItem={handleRemoveItem}
                handleSubmitform2={handleSubmitform}
              />
            </div>
          </div>
        </main>
        <footer>THIS IS FOOTER</footer>
      </div>
    </>
  );
}

export default App;
