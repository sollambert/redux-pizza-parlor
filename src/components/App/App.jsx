import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import PizzaList from '../PizzaList/PizzaList';

function App() {

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>

          <Router>
            <div>
              <Route exact path="/">
                {/* <PizzaList /> */}
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



      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
    </>

  );
}

export default App;
