import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux'

const root = ReactDOM.createRoot(document.getElementById('root'));

const pizzas = (state = [], action ) => {
    switch(action.type) {
        case "SET_PIZZAS":
            return action.payload;
    }
    return state;
}

const store = createStore(
    combineReducers({
        pizzas
    })
)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
