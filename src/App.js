import "./App.css";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
//import { Switch } from "react-dom";
import HomePage from "./components/HomePage";

import "./styles/Header.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <header>
          <h1>BBC YOUTH</h1>

          <nav>
            <Link to="/home" className="link">
              <h3>Home</h3>
            </Link>
            <Link to="/gallery" className="link">
              <h3>Gallery</h3>
            </Link>
            <Link to="/trips" className="link">
              <h3>Trips</h3>
            </Link>
            <Link to="/events" className="link">
              <h3>Events</h3>
            </Link>
          </nav>
        </header>
      </div>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
