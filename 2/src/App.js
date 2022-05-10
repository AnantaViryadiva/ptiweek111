import React, { useState } from "react";
import "./styles.css";

function App() {
  const [menghitung, setMenghitung] = useState("TIME");

  function date() {
    let time = new Date().toLocaleTimeString();
    setMenghitung(time);
  }

  return (
    <div className="container">
      <h1>{menghitung}</h1>
      <button className="button" onClick={date}>
        Get Time
      </button>
    </div>
  );
}

export default App;
