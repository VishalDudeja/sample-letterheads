import React from "react";
import "./App.css";
import Letterhead from "./Components/LetterHead";
import Content from "./Components/Content";

function App() {
  return (
    <div className="main-container">
      <div className="letterhead">
        <Letterhead />
      </div>
      <div className="content">
        <Content />
      </div>
    </div>
  );
}

export default App;
