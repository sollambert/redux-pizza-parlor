import { useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';
import './PizzaList.css'

function PizzaList() {

    const pizzas = useSelector(store => store.pizzas);

    return (
        <div className='pizza-list'>
            {pizzas.map((pizza) => {
                return <PizzaItem key={pizza.id} pizza={pizza}/>
            })}
        </div>
    )
}

export default PizzaList;