import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/header/Navbar";
import Products from "./Components/products/Products";
import Filter from "./Components/filter/Filter";
import Cart from "./Components/Cart/Cart";
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import fetchData from "./action/productaction";

function App() {
  const [products, setProducts] = useState([]);
  const [size, setSize] = useState("");
  const [productsort, setProductsort] = useState("");

  fetchData();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/product/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  const [cartItem, setCartItem] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  /// Quan ly filter
  const handleOnChangeFilter = (e) => {
    if (e.target.value === "") {
      setSize(e.target.value);
      setProducts([...products]);
    } else {
      setSize(e.target.value);
      setProducts(
        [...products].filter(
          (product) => product.availableSizes.indexOf(e.target.value) >= 0
        )
      );
    }
  };

  /// Quan ly sort

  const handleOnChangeSort = async (e) => {
    const sort = e.target.value;
    setProductsort(sort);

    //   Cách sort 1
    // setProducts(
    //   [...products].sort((a, b) =>
    //     sort === "slowest"
    //       ? a.price > b.price
    //         ? 1
    //         : -1
    //       : sort === "highest"
    //       ? a.price < b.price
    //         ? 1
    //         : -1
    //       : a._id > b._id
    //       ? 1
    //       : -1
    //   )
    // );

    // Cách sort 2
    setProducts(
      [...products].sort((a, b) => {
        if (sort === "slowest") {
          return a.price - b.price;
        }
        if (sort === "highest") {
          return b.price - a.price;
        }
        return a._id - b.id;
      })
    );
  };

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
              <Filter
                filter={size}
                sort={productsort}
                products={products.length}
                handleFilter={handleOnChangeFilter}
                handleSort={handleOnChangeSort}
              />
              <Products products={products} handleAddToCart={handleAddToCart} />
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
