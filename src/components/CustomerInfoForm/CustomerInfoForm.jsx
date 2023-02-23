import "./CustomerInfoForm.css";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";

function CustomerInfoForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  // go back to previous page
  const goBack = () => {
    history.push("/");
  };

  const goToCheckout = () => {
    alert("Thanks for your order! Finalize your order on the next page.");
    history.push("/checkout");
  };

  // customer info object
  const [customerInfo, setCustomerInfo] = useState("");

  // boolean for whether all fields have been filled
  const [displayIncompleteMessage, setIncompleteMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // check if all fields are filled before submitting
    if (
      customerInfo.customer_name &&
      customerInfo.street_address &&
      customerInfo.city &&
      customerInfo.zip &&
      customerInfo.type
    ) {
      console.log("submitting customer, customer is:", customerInfo);
      dispatch({ type: "SET_CUSTOMER", payload: customerInfo });
      goToCheckout();
    } else {
      setIncompleteMessage(true);
      setTimeout(() => {
        setIncompleteMessage(false);
      }, 5000);
    }
  };

  const handleNameChange = (event) => {
    setCustomerInfo({
      ...customerInfo,
      customer_name: event.target.value,
    });
  };

  const handleStreetAddressChange = (event) => {
    setCustomerInfo({
      ...customerInfo,
      street_address: event.target.value,
    });
  };

  const handleCityChange = (event) => {
    setCustomerInfo({
      ...customerInfo,
      city: event.target.value,
    });
  };

  const handleZipChange = (event) => {
    setCustomerInfo({
      ...customerInfo,
      zip: event.target.value,
    });
  };

  const handleTypeChange = (event) => {
    setCustomerInfo({
      ...customerInfo,
      type: event.target.value,
    });
  };

  return (
    <>
      <Header displayTotal={true} />
      <form id="customer-form" onSubmit={handleSubmit}>
        <h3>Step 2: Customer Information</h3>
        <div id="input-container">
          <label htmlFor="name-input">Name: </label>
          <input
            onChange={handleNameChange}
            name="name-input"
            placeholder="your name here"
          ></input>
          <label htmlFor="address-input">Street Address: </label>
          <input
            onChange={handleStreetAddressChange}
            name="address-input"
            placeholder="your address here"
          ></input>
          <label htmlFor="city-input">City: </label>
          <input
            onChange={handleCityChange}
            name="city-input"
            placeholder="your city here"
          ></input>
          <label htmlFor="zip-input">Zip Code: </label>
          <input
            onChange={handleZipChange}
            name="zip-input"
            placeholder="your zip code here"
          ></input>
        </div>
        <div id="radio-container">
          <div id="pickup-container">
            <input
              onChange={handleTypeChange}
              type="radio"
              id="pickup"
              name="fav_language"
              value="pickup"
            />
            <label htmlFor="pickup">Pickup</label>
          </div>
          <div id="delivery-container">
            <input
              onChange={handleTypeChange}
              type="radio"
              id="delivery"
              name="fav_language"
              value="delivery"
            />
            <label htmlFor="delivery">Delivery</label>
          </div>
        </div>
        <button id="next-btn" type="submit">
          NEXT
        </button>
        {displayIncompleteMessage && (
          <p>Oops! Fill out all fields to go to the next page.</p>
        )}
        <button id="back-btn" onClick={goBack} type="submit">
          BACK
        </button>
      </form>
    </>
  );
}

export default CustomerInfoForm;
