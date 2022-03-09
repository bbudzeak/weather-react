import "./App.css";
import "./styles.css";
import React from "react";
import Form from "./Form";
import Daily from "./Daily";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Form />
        <Daily />
      </div>
      <div className="git-link">
        <span> Code by Bethany Budzeak: </span>
        <a href="https://github.com/bbudzeak/weather-react" target="_blank">
          Link to GitHub
        </a>
      </div>
    </div>
  );
}

export default App;
