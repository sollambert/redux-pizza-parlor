import React from 'react';
import './App.css';
import Checkout from '../Checkout/Checkout';

import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import PizzaList from '../PizzaList/PizzaList';
import Admin from '../Admin/Admin'


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    getPizzas();
  }, [])

  const getPizzas = () => {
    axios.get('/api/pizza')
      .then((response) => {
        dispatch({
          type: 'SET_PIZZAS',
          payload: response.data
        });
      })
  }

  return (
      <div className='App'>
        <Router>
          <div>
            <Route exact path="/">
              <header className='App-header'>
                <h1 className='App-title'>Prime Pizza</h1>
              </header>
              <PizzaList />
            </Route>
            <Route exact path="/customerForm">
              {/* CustomerForm component */}
            </Route>
            <Route exact path="/checkout">
                <Checkout />
            </Route>
            <Route exact path="/admin">
              <Admin/>
            </Route>
          </div>
        </Router>
      </div>

  );
}

export default App;
