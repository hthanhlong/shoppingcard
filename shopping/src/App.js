import React from "react";
import "./App.css";
import Navbar from "./Components/header/Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";

// Test change
// thay đổi ở đây nè
function App() {
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
