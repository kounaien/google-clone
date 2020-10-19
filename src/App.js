import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>this is search page</h1>
          </Route>
          <Route path="/">
            <Home />

            <h1>hey clever programmer let's build the google clone</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
