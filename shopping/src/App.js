import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/header/Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import data from "./data.json";
import Products from "./Components/products/Products";

function App() {
  const [products, setProducts] = useState(data.products);

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
              <Products products={products} />
            </div>
            <div className="sidebararea">Cartitem</div>
          </div>
        </main>
        <footer>THIS IS FOOTER</footer>
      </div>
    </>
  );
}

export default App;
