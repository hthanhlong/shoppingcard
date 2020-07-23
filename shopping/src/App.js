import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/header/Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import data from "./data.json";

function App() {
  const [products, setProducts] = useState(data.products);

  return (
    <>
      <CssBaseline />
      <div className="grid-container">
        <header>
          <Navbar />
        </header>
        <main>This is main</main>
        <footer>THIS IS FOOTER</footer>
      </div>
    </>
  );
}

export default App;
