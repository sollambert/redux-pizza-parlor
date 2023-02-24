import { useSelector } from "react-redux";
import PizzaItem from "../PizzaItem/PizzaItem";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import "./PizzaList.css";

import Header from "../Header/Header";

function PizzaList() {
  const history = useHistory();
  const pizzas = useSelector((store) => store.pizzas);

  const goToForm = () => {
    alert("Thanks for your order! Fill out your information on the next page.");
    history.push("/customerForm");
  };

  return (
    <>
      <Header headerText="Prime Pizza" displayTotal={true} />
      <div className="pizza-list">
        {pizzas.map((pizza) => {
          return <PizzaItem key={pizza.id} pizza={pizza} />;
        })}
      
      <Button 
      className="go-to-form-btn" 
      onClick={goToForm} 
      type="submit"
      variant="outlined">
        Next </Button>
    </div>
    </>
  );
}

export default PizzaList;
