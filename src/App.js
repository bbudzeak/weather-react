import "./App.css";
import "./styles.css";
import React from "react";
import Form from "./Form";
import Daily from "./Daily";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Form />
        <Daily />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
