import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import OrderTable from './OrderTable/OrderTable';

function Admin() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders()
    }, [])

    const getOrders = () => {
        axios.get('/api/order')
            .then((response) => {
                setOrders(response.data);
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <>
            <Header headerText="Prime Pizza Orders"/>
            <OrderTable orders={orders}/>
        </>
    )
}

export default Admin;