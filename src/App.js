import "./App.css";
import "./styles.css";
import React from "react";
import Form from "./Form";
import Daily from "./Daily";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Form />
        <Daily />
      </div>
      <div className="git-link">
        <span> Code by Bethany Budzeak: </span>
        <a
          href="https://github.com/bbudzeak/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Link to GitHub
        </a>
      </div>
    </div>
  );
}

export default App;
