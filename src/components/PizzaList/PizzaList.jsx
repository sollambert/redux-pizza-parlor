import { useSelector } from "react-redux";
import PizzaItem from "../PizzaItem/PizzaItem";
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
      </div>
      <button className="go-to-form-btn" onClick={goToForm} type="submit">
        Next
      </button>
    </>
  );
}

export default PizzaList;
