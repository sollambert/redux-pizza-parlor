import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Import Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// Reducer for customer info form
const customer = (state = [], action) => {
  if (action.type === "SET_CUSTOMER") {
    return action.payload;
  }
  return state;
};

// The redux store store
const storeInstance = createStore(
  combineReducers({
    customer,
  }),
  applyMiddleware(logger)
);

root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
