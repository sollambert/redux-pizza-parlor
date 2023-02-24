import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {Button, TableRow, TableCell, TableHead} from '@mui/material'


function OrderItem({ order, getOrders }) {

    const pizzas = useSelector(store => store.pizzas);
    const [details, setDetails] = useState(false);
    const [pizzaIds, setPizzaIds] = useState([]);

    useEffect(() => {
        getOrder();
    }, [])

    const deleteOrder = () => {
        axios.delete(`/api/order/${order.id}`)
        .then((response) => {
            getOrders();
        })
        .catch((err) => {
            console.error(err);
        })
    }

    const handleDelete = () => {
        deleteOrder();
    }

    const getOrder = () => {
        axios.get(`/api/order/${order.id}`)
            .then((response) => {
                setPizzaIds(response.data.map((order) => {
                    return order.pizza_id;
                }))
                // console.log(pizzaIds)
                // console.log(pizzas)
            })
    }

    const displayDetails = () => {
        setDetails(!details);
    }

    // console.log(order)
    return (
        <>
            <TableRow onClick={displayDetails}>
                <TableCell>{order.customer_name}</TableCell>
                <TableCell>{new Date(order.time).toLocaleString()}</TableCell>
                <TableCell>{order.type}</TableCell>
                <TableCell>{order.total}</TableCell>
            </TableRow>
            {details ?
                <TableRow>
                    <TableCell >
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
                    </TableCell>
                    <TableCell colSpan='2'>
                            {`${order.street_address}, ${order.city}, ${order.zip}`}
                    </TableCell>
                    <TableCell >
                            <Button onClick={handleDelete}>Remove</Button>
                    </TableCell>
                </TableRow>
                : ''}
        </>
    )
}

export default OrderItem;