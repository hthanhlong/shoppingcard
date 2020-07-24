import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/header/Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import data from "./data.json";
import Products from "./Components/products/Products";
import Filter from "./Components/filter/Filter";

function App() {
  const intialState = data.products;
  const [products, setProducts] = useState(intialState);
  const [size, setSize] = useState("");
  const [productsort, setProductsort] = useState("");
  console.log("ơ ngoài,", productsort);
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
