import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/header/Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import data from "./data.json";
import Products from "./Components/products/Products";
import Filter from "./Components/filter/Filter";
import Cart from "./Components/Cart/Cart";
import { purple } from "@material-ui/core/colors";

function App() {
  const intialState = data.products;
  const [products, setProducts] = useState(intialState);
  const [size, setSize] = useState("");
  const [productsort, setProductsort] = useState("");
  const [cartItem, setCartItem] = useState([]);

  console.log(cartItem);

  /// Quan ly filter
  const handleOnChangeFilter = (e) => {
    if (e.target.value === "") {
      setSize(e.target.value);
      setProducts([...intialState]);
    } else {
      setSize(e.target.value);
      setProducts(
        [...intialState].filter(
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
    });
    if (!alreadyInCart) {
      // them san pham moi
      newCartItem.push({ ...product, count: 1 });
    }
    setCartItem(newCartItem); /// set gia trị cho mảng
  };

  /// Remove Item in Cart
  const handleRemoveItem = (product) => {
    setCartItem(cartItem.filter((item) => item._id !== product._id));
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
              <Cart cartItem={cartItem} handleRemoveItem={handleRemoveItem} />
            </div>
          </div>
        </main>
        <footer>THIS IS FOOTER</footer>
      </div>
    </>
  );
}

export default App;
