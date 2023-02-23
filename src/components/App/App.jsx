import React from "react";
import axios from "axios";
import "./App.css";

import CustomerInfoForm from "../CustomerInfoForm/CustomerInfoForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>

      <CustomerInfoForm />
    </div>
  );
}

export default App;
