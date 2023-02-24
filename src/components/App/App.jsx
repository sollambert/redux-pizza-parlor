import React from "react";
import "./App.css";
import Checkout from "../Checkout/Checkout";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import PizzaList from "../PizzaList/PizzaList";
import Admin from "../Admin/Admin";

import CustomerInfoForm from "../CustomerInfoForm/CustomerInfoForm";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = () => {
    axios.get("/api/pizza").then((response) => {
      dispatch({
        type: "SET_PIZZAS",
        payload: response.data,
      });
    });
  };

  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/">
            <PizzaList />
          </Route>
          <Route exact path="/customerForm">
            <CustomerInfoForm />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
