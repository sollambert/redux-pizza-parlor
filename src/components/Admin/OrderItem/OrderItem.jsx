import { useState, useEffect } from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';


function OrderItem({ order }) {

    const pizzas = useSelector(store => store.pizzas);
    const [details, setDetails] = useState(false);
    const [pizzaIds, setPizzaIds] = useState([]);

    useEffect(() => {
        getOrder();
    }, [])

    const getOrder = () => {
        axios.get(`/api/order/${order.id}`)
        .then((response) => {
            setPizzaIds(response.data.map((order) => {
                return order.pizza_id;
            }))
            console.log(pizzaIds)
            console.log(pizzas)
        })
    }

    const displayDetails = () => {
        setDetails(!details);
    }

    // console.log(pizzas)
    return (
        <>
            <tr onClick={displayDetails}>
                <td>{order.customer_name}</td>
                <td>{new Date(order.time).toLocaleString()}</td>
                <td>{order.type}</td>
                <td>{order.total}</td>
            </tr>
            {details ?
            <tr>
                <td colspan='4'>
                    <ul>
                        {pizzaIds.map((id, index) => {
                            return <li key={index}>
                                {pizzas.filter((pizza) => {
                                    if (pizza.id == id) {
                                        return pizza;
                                    }
                                })[0].name}
                            </li>
                        })}
                    </ul>
                </td>
            </tr>
            :''}
        </>
    )
}

export default OrderItem;