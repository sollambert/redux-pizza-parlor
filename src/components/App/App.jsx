import React from 'react';
import axios from 'axios';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';

import PizzaList from '../PizzaList/PizzaList';

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
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <PizzaList/>
  
    </div>
  );
}

export default App;
