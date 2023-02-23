import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const root = ReactDOM.createRoot(document.getElementById('root'));

const pizzas = (state = [], action) => {
    switch (action.type) {
        case "SET_PIZZAS":
            return action.payload;
    }
    return state;
}

const cart = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [...state, action.payload]
        case "REMOVE_FROM_CART":
            return state.filter((pizza) => {
                if (pizza != action.payload) {
                    return pizza
                }});
        case 'CLEAR_CART':
            return {};
        default:
            return state;
            };
    }

const store = createStore(
    combineReducers({
        pizzas,
        cart
    }),
    applyMiddleware(logger)
)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
