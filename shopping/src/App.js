import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/login/login";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Switch>
        <div className="grid-container">
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </div>
      </Switch>
    </>
  );
}

export default App;
