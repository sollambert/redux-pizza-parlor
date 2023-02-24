import "./CustomerInfoForm.css";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  ButtonGroup,
} from "@mui/material";
import Header from "../Header/Header";
import InputField from "./InputField/InputField";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// import { useTheme } from "@mui/material/styles";

function CustomerInfoForm() {
  // const theme = useTheme();
  const dispatch = useDispatch();
  const history = useHistory();
  const swal = withReactContent(Swal);

  // go back to previous page
  const goBack = () => {
    history.push("/");
  };

  const goToCheckout = () => {
    swal
      .fire({
        title: "Only one more step! Let's go look at your order and checkout!",
        imageUrl: "images/penguin_dancing.gif",
        imageHeight: "200px",
        imageWidth: "300px",
      })
      .then(() => {
        history.push("/checkout");
      });
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

  const handleTypeChange = (event) => {
    setCustomerInfo({
      ...customerInfo,
      type: event.target.value,
    });
  };

  return (
    <>
      <Header headerText="Prime Pizza" displayTotal={true} />
      <form id="customer-form" onSubmit={handleSubmit}>
        <h4>Step 2: Customer Information</h4>
        <div id="input-container">
          <InputField
            setCustomerInfo={setCustomerInfo}
            customerInfo={customerInfo}
            customerInfoKey={"customer_name"}
            type={"Name"}
          />
          <InputField
            setCustomerInfo={setCustomerInfo}
            customerInfo={customerInfo}
            customerInfoKey={"street_address"}
            type={"Address"}
          />
          <InputField
            setCustomerInfo={setCustomerInfo}
            customerInfo={customerInfo}
            customerInfoKey={"city"}
            type={"City"}
          />
          <InputField
            setCustomerInfo={setCustomerInfo}
            customerInfo={customerInfo}
            customerInfoKey={"zip"}
            type={"Zip Code"}
          />
        </div>

        <RadioGroup onChange={handleTypeChange}>
          <FormControlLabel value="pickup" control={<Radio />} label="Pickup" />
          <FormControlLabel
            value="delivery"
            control={<Radio />}
            label="Delivery"
          />
        </RadioGroup>
        <ButtonGroup id="button-group">
          <Button id="back-btn" onClick={goBack} variant="contained">
            BACK
          </Button>
          <Button
            id="next-btn"
            type="submit"
            color="secondary"
            variant="contained"
          >
            NEXT
          </Button>
        </ButtonGroup>

        {displayIncompleteMessage && (
          <p>Oops! Fill out all fields to go to the next page.</p>
        )}
      </form>
    </>
  );
}

export default CustomerInfoForm;
