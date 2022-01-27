import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

import "./styles/Header.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <header>
          <h1>BBC YOUTH</h1>
          <nav>
            {/* <Link to="/Home"> */}
            <h3>Home</h3>
            {/* </Link> */}
            {/* <Link to="/gallery"> */}
            <h3>Gallery</h3>
            {/* </Link> */}
            {/* <Link to="/trips"> */}
            <h3>Trips</h3>
            {/* </Link> */}
            {/* <Link to="/events"> */}
            <h3>events</h3>
            {/* </Link> */}
          </nav>
        </header>
      </div>
    </div>
  );
}

export default App;
