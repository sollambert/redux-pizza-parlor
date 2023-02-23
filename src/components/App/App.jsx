import React from 'react';
import './App.css';
<<<<<<< HEAD
import Checkout from '../Checkout/Checkout';
=======
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import PizzaList from '../PizzaList/PizzaList';
>>>>>>> origin

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
        payload: response.data});
    })
  }

  return (
<<<<<<< HEAD
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
     
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <Checkout />
  
    </div>
=======
    <>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>

          <Router>
            <div>
              <Route exact path="/">
                <PizzaList/>
              </Route>
              <Route exact path="/customerForm">
                {/* CustomerForm component */}
              </Route>
              <Route exact path="/checkout">
                {/* Checkout component */}
              </Route>
              <Route exact path="/admin">
                {/* Admin component */}
              </Route>
            </div>
          </Router>

        </header>
      </div>
    </>

>>>>>>> origin
  );
}

export default App;
