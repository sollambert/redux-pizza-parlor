import { useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';
import { useHistory } from 'react-router-dom';
import './PizzaList.css'

function PizzaList() {

    const history = useHistory();
    const pizzas = useSelector(store => store.pizzas);

    const goToCheckout = () => {
        alert('You are going to checkout.');
        history.push('/checkout');
    }

    return (
        <>
        <div className='pizza-list'>
            {pizzas.map((pizza) => {
                return <PizzaItem key={pizza.id} pizza={pizza}/>
            })}
        </div>
        <button className="go-to-checkout-btn" onClick={goToCheckout} type="submit">Next</button>
        </>
    )
}

export default PizzaList;