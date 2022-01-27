import "./App.css";
import React from "react";

import "./styles/Header.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <header>
          <h1>BBC YOUTH</h1>
          <nav>
            <a>
              <h3>Home</h3>
            </a>
            <a>
              <h3>Gallery</h3>
            </a>
            <a>
              <h3>Trips</h3>
            </a>
            <a>
              <h3>events</h3>
            </a>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default App;
