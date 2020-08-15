import React from "react";
import Navbar from "./header/Navbar";
import Products from "./products/Products";
import Filter from "./filter/Filter";
import Cart from "./Cart/Cart";
import CssBaseline from "@material-ui/core/CssBaseline";

function Home(props) {
  const { history } = props;
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
              <Cart history={history} />
            </div>
          </div>
        </main>
        <footer>THIS IS FOOTER</footer>
      </div>
    </>
  );
}

export default Home;
