import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/header/Navbar";
import Products from "./Components/products/Products";
import Filter from "./Components/filter/Filter";
import Cart from "./Components/Cart/Cart";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
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
              <Products />
            </div>
            <div className="sidebararea">
              <Cart />
            </div>
          </div>
        </main>
        <footer>THIS IS FOOTER</footer>
      </div>
    </>
  );
}

export default App;
